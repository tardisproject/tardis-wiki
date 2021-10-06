## Broken Mediawiki after Debian Squeeze upgrade

The upgrade to Debian Squeeze updated PHP to 5.3.3, which causes
problems in older versions of MediaWiki.

The simplest fix was to simply work around it with the instructions at
[this web
page.](http://icesquare.com/wordpress/mediawiki-error-parse-error-syntax-error-unexpected-t_namespace-expecting-t_string-in-usrlocalwwwapache22datawikiincludesnamespace-php-on-line-46/)

## SSL Certificate

For SSL certificates there are 4 options

1.  Self signed (what Tardis has previously done)
2.  University of Edinburgh signed
3.  JANET server certificate service
4.  Other commercial CA

### JANET server certificate service

Probably the best option is the [JANET server certificate
service](http://www.ja.net/services/scs/index.html) since it's 'free'
for non-commercial uses (that's us!) and it's backed by GlobalSign so it
will be recognised by pretty much every web device we care about. One
minor problem is that we can't request a wildcard certificate, so no
`*.tardis.ed.ac.uk`. But it looks like you can get certificates with a
[Subject Alternative
Name](http://www.globalsign.com/ssl/ssl-certificates/ssl-options/sans-multi-domain-ssl.htm)
attached to them. Trouble is it's not exactly clear how you specify this
in the Certificate Signing Request. HEAnet's documents
[suggests](https://scs.heanet.ie/node/17) just adding multiple CN, but
it isn't clear if this is just reliant upon the GlobalSign's CA signing
system converting them to Subject Alternative Names or something that
can be configured with OpenSSL. SWITCH's
[documentation](https://www.switch.ch/pki/scs/howto-request-multidnsnames.html)
makes it sound like the first case: "*The "principal" FQDN of the server
should appear as the first CN (0.CN =), since only this CN will be
preserved in the subject of the final certificate. All CNs except the
first one will be "moved" to the subjectAltName extension (the first one
is also copied).*"

### In progress CSR configuration file

    # Certificate Signing Request Configuration for Tardis
    # Based of https://certificates.belnet.be/multidomains.conf
    # David Coles, 2009

    [ req ]
    default_bits = 2048
    prompt = no
    encrypt_key = no
    default_md = sha1
    distinguished_name = dn

    [ dn ]
    # Country - MANDATORY
    C = GB
    # State/Provence - OPTIONAL
    ST = Midlothian
    # Locality - OPTIONAL
    L = Edinburgh
    # insert your institution name -MANDATORY
    O = The University of Edinburgh
    # Organisational Unit - OPTIONAL
    OU = Tardis Project
    # FQDN of servers - MANDATORY
    0.CN = tardis.ed.ac.uk.
    1.CN = www.tardis.ed.ac.uk.
    2.CN = wiki.tardis.ed.ac.uk.

## mod_perl

`mod_perl` has recently been disabled, because there was some suspicion
it was what breaking the apache parent.

*We shall see...*

### Process

*(for the purposes of undoing the damage)*

     apache-modconf apache disable mod_perl

Also, some lines were commented out in
`/etc/apache/conf.d/libhtml-mason-perl`, because they were stopping
apache from starting. I dont really know what they do, but if it comes
round to bite me, I guess we'll find out :)

    ...
    <IfModule !mod_perl.c>
    # No mod_perl available, just use CGI
    #Action mason_example http://localhost/cgi-bin/mason_example.cgi
    #<Directory /var/www/mason_example>
    #SetHandler mason_example
    #</Directory>
    </IfModule>
    ...

## Server config

    Server version: Apache/1.3.33 (Debian GNU/Linux)
    Server built:   Dec 18 2004 11:28:47
    Server's Module Magic Number: 19990320:16
    Server compiled with....
     -D EAPI
     -D HAVE_MMAP
     -D HAVE_SHMGET
     -D USE_SHMGET_SCOREBOARD
     -D USE_MMAP_FILES
     -D HAVE_FCNTL_SERIALIZED_ACCEPT
     -D HAVE_SYSVSEM_SERIALIZED_ACCEPT
     -D SINGLE_LISTEN_UNSERIALIZED_ACCEPT
     -D DYNAMIC_MODULE_LIMIT=64
     -D HARD_SERVER_LIMIT=4096
     -D HTTPD_ROOT="/usr"
     -D SUEXEC_BIN="/usr/lib/apache/suexec"
     -D DEFAULT_PIDLOG="/var/run/apache.pid"
     -D DEFAULT_SCOREBOARD="/var/run/apache.scoreboard"
     -D DEFAULT_LOCKFILE="/var/run/apache.lock"
     -D DEFAULT_ERRORLOG="/var/log/apache/error.log"
     -D TYPES_CONFIG_FILE="/etc/mime.types"
     -D SERVER_CONFIG_FILE="/etc/apache/httpd.conf"
     -D ACCESS_CONFIG_FILE="/etc/apache/access.conf"
     -D RESOURCE_CONFIG_FILE="/etc/apache/srm.conf"

## Tardisification stuff

We've got a silly directory structure, so that we don't need users
homedirs mounted on the webserver. Unfortunately this breaks the default
debian way of doing things. To get round this we've our own apache
package.

    apt-get update
    mkdir /tmp/apachelol
    cd /tmp/apachelol
    apt-get build-dep apache
    apt-get source apache
    cd apache-<version>
    vim debian/rules

Then change the config args as follows (note the tardis bit, and the
last line):

    CONFARGS =      --target=apache --with-layout=Debian \
                    --enable-suexec --suexec-caller=www-data \
                    --suexec-docroot=/tardis/www --includedir=/$(inc) \
                    --without-confadjust --without-execstrip \
                    --enable-shared=max --enable-rule=SHARED_CHAIN \
                    --enable-module=most --enable-module=status \
                    --enable-module=auth_digest --enable-module=log_referer \
                    --enable-module=log_agent --enable-module=auth_db \
                    $(EXTRA_CONFARGS) \
                    --activate-module=src/modules/extra/mod_macro.c \
                    --suexec-userdir=cgi-bin

Then:

    :wq
    tardis-buildpkg publish all
    tardis-buildrep
    apt-get update
    apt-get upgrade

## Mutex-related crashes

We kept seeing crashes where the master apache process would die. The
children would stay around answering requests for a while afterwards,
making diagnosis more difficult. From the logs, it would appear to be a
problem with sysvsem mutexes and the log rollover. We would get

    [Fri Feb  3 06:34:11 2006] [notice] SIGUSR1 received.  Doing graceful restart
    accept_mutex_on: Identifier removed

before the rollover, and

    [Fri Feb  3 06:34:14 2006] [error] (2)No such file or directory: mod_mime_magic: can't read magic file /etc/apache/share/magic
    [Fri Feb  3 06:34:14 2006] [notice] Apache/1.3.33 configured -- resuming normal operations
    [Fri Feb  3 06:34:14 2006] [notice] suEXEC mechanism enabled (wrapper: /usr/lib/apache/suexec)
    [Fri Feb  3 06:34:14 2006] [notice] Accept mutex: sysvsem (Default: sysvsem)
    [Fri Feb  3 06:34:14 2006] [alert] Child 15864 returned a Fatal error... \nApache is exiting!

afterwards. Googling showed that lots of people have had this problem in
the past and noone has bothered finding the bug. Switching to fcntl
mutexes appears to have stopped this.

[category:Services](category:Services "wikilink")
[category:ExternalServices](category:ExternalServices "wikilink")
[category:Admin Documents](category:Admin_Documents "wikilink")

[Category:OutOfDate](Category:OutOfDate "wikilink")