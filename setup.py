#!/usr/bin/env python
# -*- coding: utf-8 -*-


try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup


with open('README.md') as readme_file:
    readme = readme_file.read()

from pip.req import parse_requirements

# parse_requirements() returns generator of pip.req.InstallRequirement objects
install_reqs = parse_requirements('requirements.txt')

# reqs is a list of requirement
reqs = [str(ir.req) for ir in install_reqs]

setup(
    name='fir_irma',
    version='0.1.0',
    description="Plugin for FIR (Fast Incident Response) integrating IRMA",
    long_description=readme,
    author="Gaetan Crahay",
    author_email='gaetan@crahay.eu',
    #url='https://github.com/crahayg/tmsim',
    packages=[
        'fir_irma',
    ],
    package_dir={'fir_irma':
                 'fir_irma'},
    include_package_data=True,
    install_requires=reqs,
    license="BSD",
    zip_safe=False,
    keywords='fir',
    classifiers=[
        'Development Status :: 2 - Pre-Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Natural Language :: English',
        'Programming Language :: Python :: 2.7',
    ]
)