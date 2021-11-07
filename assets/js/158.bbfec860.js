(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{529:function(e,t,a){"use strict";a.r(t);var r=a(46),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"broken-mediawiki-after-debian-squeeze-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broken-mediawiki-after-debian-squeeze-upgrade"}},[e._v("#")]),e._v(" Broken Mediawiki after Debian Squeeze upgrade")]),e._v(" "),a("p",[e._v("The upgrade to Debian Squeeze updated PHP to 5.3.3, which causes\nproblems in older versions of MediaWiki.")]),e._v(" "),a("p",[e._v("The simplest fix was to simply work around it with the instructions at\n"),a("a",{attrs:{href:"http://icesquare.com/wordpress/mediawiki-error-parse-error-syntax-error-unexpected-t_namespace-expecting-t_string-in-usrlocalwwwapache22datawikiincludesnamespace-php-on-line-46/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this web\npage."),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"ssl-certificate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl-certificate"}},[e._v("#")]),e._v(" SSL Certificate")]),e._v(" "),a("p",[e._v("For SSL certificates there are 4 options")]),e._v(" "),a("ol",[a("li",[e._v("Self signed (what Tardis has previously done)")]),e._v(" "),a("li",[e._v("University of Edinburgh signed")]),e._v(" "),a("li",[e._v("JANET server certificate service")]),e._v(" "),a("li",[e._v("Other commercial CA")])]),e._v(" "),a("h3",{attrs:{id:"janet-server-certificate-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#janet-server-certificate-service"}},[e._v("#")]),e._v(" JANET server certificate service")]),e._v(" "),a("p",[e._v("Probably the best option is the "),a("a",{attrs:{href:"http://www.ja.net/services/scs/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JANET server certificate\nservice"),a("OutboundLink")],1),e._v(" since it's 'free'\nfor non-commercial uses (that's us!) and it's backed by GlobalSign so it\nwill be recognised by pretty much every web device we care about. One\nminor problem is that we can't request a wildcard certificate, so no\n"),a("code",[e._v("*.tardis.ed.ac.uk")]),e._v(". But it looks like you can get certificates with a\n"),a("a",{attrs:{href:"http://www.globalsign.com/ssl/ssl-certificates/ssl-options/sans-multi-domain-ssl.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Subject Alternative\nName"),a("OutboundLink")],1),e._v("\nattached to them. Trouble is it's not exactly clear how you specify this\nin the Certificate Signing Request. HEAnet's documents\n"),a("a",{attrs:{href:"https://scs.heanet.ie/node/17",target:"_blank",rel:"noopener noreferrer"}},[e._v("suggests"),a("OutboundLink")],1),e._v(" just adding multiple CN, but\nit isn't clear if this is just reliant upon the GlobalSign's CA signing\nsystem converting them to Subject Alternative Names or something that\ncan be configured with OpenSSL. SWITCH's\n"),a("a",{attrs:{href:"https://www.switch.ch/pki/scs/howto-request-multidnsnames.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),a("OutboundLink")],1),e._v('\nmakes it sound like the first case: "'),a("em",[e._v('The "principal" FQDN of the server\nshould appear as the first CN (0.CN =), since only this CN will be\npreserved in the subject of the final certificate. All CNs except the\nfirst one will be "moved" to the subjectAltName extension (the first one\nis also copied).')]),e._v('"')]),e._v(" "),a("h3",{attrs:{id:"in-progress-csr-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-progress-csr-configuration-file"}},[e._v("#")]),e._v(" In progress CSR configuration file")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("# Certificate Signing Request Configuration for Tardis\n# Based of https://certificates.belnet.be/multidomains.conf\n# David Coles, 2009\n\n[ req ]\ndefault_bits = 2048\nprompt = no\nencrypt_key = no\ndefault_md = sha1\ndistinguished_name = dn\n\n[ dn ]\n# Country - MANDATORY\nC = GB\n# State/Provence - OPTIONAL\nST = Midlothian\n# Locality - OPTIONAL\nL = Edinburgh\n# insert your institution name -MANDATORY\nO = The University of Edinburgh\n# Organisational Unit - OPTIONAL\nOU = Tardis Project\n# FQDN of servers - MANDATORY\n0.CN = tardis.ed.ac.uk.\n1.CN = www.tardis.ed.ac.uk.\n2.CN = wiki.tardis.ed.ac.uk.\n")])])]),a("h2",{attrs:{id:"mod-perl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mod-perl"}},[e._v("#")]),e._v(" mod_perl")]),e._v(" "),a("p",[a("code",[e._v("mod_perl")]),e._v(" has recently been disabled, because there was some suspicion\nit was what breaking the apache parent.")]),e._v(" "),a("p",[a("em",[e._v("We shall see...")])]),e._v(" "),a("h3",{attrs:{id:"process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[e._v("#")]),e._v(" Process")]),e._v(" "),a("p",[a("em",[e._v("(for the purposes of undoing the damage)")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" apache-modconf apache disable mod_perl\n")])])]),a("p",[e._v("Also, some lines were commented out in\n"),a("code",[e._v("/etc/apache/conf.d/libhtml-mason-perl")]),e._v(", because they were stopping\napache from starting. I dont really know what they do, but if it comes\nround to bite me, I guess we'll find out 😃")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("...\n<IfModule !mod_perl.c>\n# No mod_perl available, just use CGI\n#Action mason_example http://localhost/cgi-bin/mason_example.cgi\n#<Directory /var/www/mason_example>\n#SetHandler mason_example\n#</Directory>\n</IfModule>\n...\n")])])]),a("h2",{attrs:{id:"server-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-config"}},[e._v("#")]),e._v(" Server config")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('Server version: Apache/1.3.33 (Debian GNU/Linux)\nServer built:   Dec 18 2004 11:28:47\nServer\'s Module Magic Number: 19990320:16\nServer compiled with....\n -D EAPI\n -D HAVE_MMAP\n -D HAVE_SHMGET\n -D USE_SHMGET_SCOREBOARD\n -D USE_MMAP_FILES\n -D HAVE_FCNTL_SERIALIZED_ACCEPT\n -D HAVE_SYSVSEM_SERIALIZED_ACCEPT\n -D SINGLE_LISTEN_UNSERIALIZED_ACCEPT\n -D DYNAMIC_MODULE_LIMIT=64\n -D HARD_SERVER_LIMIT=4096\n -D HTTPD_ROOT="/usr"\n -D SUEXEC_BIN="/usr/lib/apache/suexec"\n -D DEFAULT_PIDLOG="/var/run/apache.pid"\n -D DEFAULT_SCOREBOARD="/var/run/apache.scoreboard"\n -D DEFAULT_LOCKFILE="/var/run/apache.lock"\n -D DEFAULT_ERRORLOG="/var/log/apache/error.log"\n -D TYPES_CONFIG_FILE="/etc/mime.types"\n -D SERVER_CONFIG_FILE="/etc/apache/httpd.conf"\n -D ACCESS_CONFIG_FILE="/etc/apache/access.conf"\n -D RESOURCE_CONFIG_FILE="/etc/apache/srm.conf"\n')])])]),a("h2",{attrs:{id:"tardisification-stuff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tardisification-stuff"}},[e._v("#")]),e._v(" Tardisification stuff")]),e._v(" "),a("p",[e._v("We've got a silly directory structure, so that we don't need users\nhomedirs mounted on the webserver. Unfortunately this breaks the default\ndebian way of doing things. To get round this we've our own apache\npackage.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("apt-get update\nmkdir /tmp/apachelol\ncd /tmp/apachelol\napt-get build-dep apache\napt-get source apache\ncd apache-<version>\nvim debian/rules\n")])])]),a("p",[e._v("Then change the config args as follows (note the tardis bit, and the\nlast line):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("CONFARGS =      --target=apache --with-layout=Debian \\\n                --enable-suexec --suexec-caller=www-data \\\n                --suexec-docroot=/tardis/www --includedir=/$(inc) \\\n                --without-confadjust --without-execstrip \\\n                --enable-shared=max --enable-rule=SHARED_CHAIN \\\n                --enable-module=most --enable-module=status \\\n                --enable-module=auth_digest --enable-module=log_referer \\\n                --enable-module=log_agent --enable-module=auth_db \\\n                $(EXTRA_CONFARGS) \\\n                --activate-module=src/modules/extra/mod_macro.c \\\n                --suexec-userdir=cgi-bin\n")])])]),a("p",[e._v("Then:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(":wq\ntardis-buildpkg publish all\ntardis-buildrep\napt-get update\napt-get upgrade\n")])])]),a("h2",{attrs:{id:"mutex-related-crashes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutex-related-crashes"}},[e._v("#")]),e._v(" Mutex-related crashes")]),e._v(" "),a("p",[e._v("We kept seeing crashes where the master apache process would die. The\nchildren would stay around answering requests for a while afterwards,\nmaking diagnosis more difficult. From the logs, it would appear to be a\nproblem with sysvsem mutexes and the log rollover. We would get")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("[Fri Feb  3 06:34:11 2006] [notice] SIGUSR1 received.  Doing graceful restart\naccept_mutex_on: Identifier removed\n")])])]),a("p",[e._v("before the rollover, and")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("[Fri Feb  3 06:34:14 2006] [error] (2)No such file or directory: mod_mime_magic: can't read magic file /etc/apache/share/magic\n[Fri Feb  3 06:34:14 2006] [notice] Apache/1.3.33 configured -- resuming normal operations\n[Fri Feb  3 06:34:14 2006] [notice] suEXEC mechanism enabled (wrapper: /usr/lib/apache/suexec)\n[Fri Feb  3 06:34:14 2006] [notice] Accept mutex: sysvsem (Default: sysvsem)\n[Fri Feb  3 06:34:14 2006] [alert] Child 15864 returned a Fatal error... \\nApache is exiting!\n")])])]),a("p",[e._v("afterwards. Googling showed that lots of people have had this problem in\nthe past and noone has bothered finding the bug. Switching to fcntl\nmutexes appears to have stopped this.")]),e._v(" "),a("p",[a("a",{attrs:{href:"category:Services",title:"wikilink"}},[e._v("category:Services")]),e._v(" "),a("a",{attrs:{href:"category:ExternalServices",title:"wikilink"}},[e._v("category:ExternalServices")]),e._v(" "),a("a",{attrs:{href:"category:Admin_Documents",title:"wikilink"}},[e._v("category:Admin Documents")])]),e._v(" "),a("p",[a("a",{attrs:{href:"Category:OutOfDate",title:"wikilink"}},[e._v("Category:OutOfDate")])])])}),[],!1,null,null,null);t.default=n.exports}}]);