# IRMA plugin for FIR - Fast Incident Response

[FIR](https://github.com/certsocietegenerale/FIR) (Fast Incident Response by [CERT Société générale](https://cert.societegenerale.com/)) is an cybersecurity incident management platform designed with agility and speed in mind. It allows for easy creation, tracking, and reporting of cybersecurity incidents.

[IRMA](http://irma.quarkslab.com/) is an asynchronous and customizable analysis system for suspicious files. 

# Features

## FIR plugin

This plugin adds a menu in the navigation bar of FIR. You can scan files for malwares with your own IRMA installation.
When you scan a file, the plugin adds its hashes to the FIR artifacts database. These hashes can be correlated with other files or hashes associated with incidents.

## Standalone IRMA proxy

You can start an instance of this plugin as a standalone server. Files scanned with this server are added to the FIR artifacts database. You can manage your users and their rights in the Django admin site.

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
