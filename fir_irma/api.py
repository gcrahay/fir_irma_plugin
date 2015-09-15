import requests

import logging

logger = logging.getLogger(__name__)

from fir_irma.settings import settings

DEFAULT_HEADERS = {'Content-type': 'application/json', 'Accept': 'application/json'}
DEFAULT_ERROR_CODE = 402


class APIError(Exception):
    def __init__(self, code=DEFAULT_ERROR_CODE, content=None, error_type='proxy_error', message='API proxy error'):
        self.code = code
        if isinstance(content, dict) and 'error_type' in content and 'message' in content:
            self.type = content.get('error_type', 'proxy_error')
            self.message = content.get('message', 'API proxy error')
        else:
            self.type = error_type
            self.message = message
        logger.error("IRMA API error - %s - %s", self.type, self.message)

    @property
    def content(self):
        return {'type': self.type, 'message': self.message}

    def __str__(self):
        return '{type}: {message}'.format(self)

    @staticmethod
    def wrong_method():
        return DEFAULT_ERROR_CODE, {'type': 'invalid_request_error', 'message': 'Invalid method'}

    @staticmethod
    def client_error(**kwargs):
        return DEFAULT_ERROR_CODE, {'type': 'invalid_request_error',
                                    'message': kwargs.get('message', 'Invalid request')}


def create_api_url(*args):
    def append_part(url, part):
        if not part == "" and part is not None:
            if url[-1] != '/':
                url += '/'
            if part[0] == '/':
                part = part[1:]
            url += part
        return url

    url = settings.IRMA_BASE_URL
    for part in args:
        if isinstance(part, (tuple, list)):
            for subpart in part:
                url = append_part(url, subpart)
        else:
            url = append_part(url, part)
    return url


def make_api_call(url, method='GET', **kwargs):
    """
	Performs an API call to IRMA
	:param url: URL components
	:param method: HTTP method
	:param files: files to upload
	:param json: JSON content
	:param params: parameters of the request
	:param default_headers: does the default headers should be added from DEFAULT_HEADERS ? (default: True)
	:return: (HTTP status code, JSON response content as dict)
	"""
    url = create_api_url(url)
    try:
        requests_args = {}
        for key in ['files', 'json', 'params']:
            value = kwargs.get(key, None)
            if value is not None:
                requests_args[key] = value
        if kwargs.get('default_headers', True):
            requests_args['headers'] = DEFAULT_HEADERS
        response = requests.request(method, url, **requests_args)
    except requests.exceptions.RequestException:
        raise APIError(DEFAULT_ERROR_CODE, message='The API proxy cannot handle the request')
    try:
        payload = response.json()
    except ValueError:
        raise APIError(DEFAULT_ERROR_CODE, message='The API proxy cannot handle the response')
    if response.status_code > 299:
        raise APIError(response.status_code, content=payload)
    return response.status_code, payload


def get_probes():
    return make_api_call('/api/v1/probes')


def new_scan():
    return make_api_call('/api/v1/scans', method='POST')


def launch_scan(scan_id, force=False, probes=None):
    json_request = {'force': force}
    if probes is not None:
        json_request['probes'] = probes
    return make_api_call(['/api/v1/scans/', scan_id, '/launch'], method='POST', json=json_request)


def upload_files(scan_id, files=None):
    if files is None:
        files = list()
    return make_api_call(['/api/v1/scans/', scan_id, '/files'], method='POST', files=files, default_headers=False)


def search(file_hash=None, file_name=None, offset=0, limit=25):
    query = {'offset': offset, 'limit': limit}
    if file_name is not None:
        query['name'] = file_name
    elif file_hash is not None:
        query['hash'] = file_hash
    else:
        return APIError.client_error(message='Missing required parameter hash or name')
    code, payload = make_api_call('/api/v1/search/files', params=query)
    if 'items' not in payload:
        raise APIError(DEFAULT_ERROR_CODE, message='The API response is invalid')
    return code, payload
