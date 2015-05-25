# IRMA plugin for FIR - Fast Incident Response

[FIR](https://github.com/certsocietegenerale/FIR) (Fast Incident Response by [CERT Société générale](https://cert.societegenerale.com/)) is an cybersecurity incident management platform designed with agility and speed in mind. It allows for easy creation, tracking, and reporting of cybersecurity incidents.

[IRMA](http://irma.quarkslab.com/) is an asynchronous and customizable analysis system for suspicious files. 

# Features

## FIR plugin

This plugin adds a menu in the navigation bar of FIR. You can scan files for malwares with your own IRMA installation.
When you scan a file, the plugin adds its hashes to the FIR artifacts database. These hashes can be correlated with other files or hashes associated with incidents.

## Standalone IRMA proxy

You can start an instance of this plugin as a standalone server. If the standalone server is installed in the same environment as FIR, files scanned with this server are added to the FIR artifacts database. You can manage your users and their rights in the Django admin site.

# Installation

**Warning: This plugin needs some features not merged in the FIR official repository. PRs will be submitted soon!**

## Prerequisites

You'll need a working installation of IRMA ([IRMA docs](https://irma.readthedocs.org/en/latest/index.html))!

## Installation

You should install it in a _virtualenv_. If you plan to use this software as a FIR plugin or you want this software (as a standalone server) to add artifacts in the FIR database, you must use FIR's _virtualenv_.

```bash
(your_env)$ git clone https://github.com/gcrahay/fir_irma_plugin.git
(your_env)$ cd fir_irma_plugin
(your_env)$ python setup.py install
```

## As a FIR plugin

Add *fir_irma* in *$FIR_HOME/fir/config/installed_apps.txt* as stated in [FIR plugins doc](https://github.com/certsocietegenerale/FIR/wiki/Plugins#installing-a-plugin).

Add this line in your *urlpatterns* list in *$FIR_HOME/fir/urls.py*:

```python
url(r'^irma/', include('fir_irma.urls', namespace='fir_irma')),

```

In your *$FIR_HOME*, launch:

```bash
(your_env)$ ./manage.py migrate
```

Configure settings variables and user permissions (see **Configuration**).

## As a standalone server

You have a demo Django project in [this repository](https://github.com/gcrahay/fir_irma_plugin/tree/master/standalone).

If you want the server to add artifacts in your FIR database, configure *DATABASES* variable in *settings.py* accordingly.

Configure settings variables and user permissions (see **Configuration**). Don't forget to set the *IRMA_IS_STANDALONE* to `True`.

# Configuration

## Settings

* *IRMA_BASE_URL*: Base URL of your IRMA frontend, default: *http://127.0.0.1*
* *IRMA_HAS_UI*: Add user interface URLs (Angular application), default: `True`
* *IRMA_IS_STANDALONE*: Use as a standalone server (outside FIR), default: `False`
* *IRMA_REFRESH_MS*: UI refresh timeout during scan in ms, default: *3000*

## User permissions

* *scan_files*: User can submit files. This is the minimal permission.
* *read_all_results*: Scan results are not filtered. Without this permission, an user can only see results of his own scans.
* *can_force_scan*: User can bypass the scan cache and force a new scan.

# Credits

Files listed below are djangoized files from [quarkslab/irma-frontend](https://github.com/quarkslab/irma-frontend) :

* _irma_frontend_web/*_
* _fir_irma/static/irma/*_
* _fir_irma/templates/views/*_
* _fir_irma/templates/irma.js_
* _fir_irma/templates/partial_irma.html_
* _fir_irma/templates/standalone/standalone_base.html_
* _fir_irma/templates/standalone/interface.html_

These files are under the copyright of [Quarkslab](http://www.quarkslab.com/) and under [Apache License Version 2.0](LICENSE).
