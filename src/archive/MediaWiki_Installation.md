## Installing MediaWiki on Reaper

A short story, as written by seth.

Mostly in note form so I can work out what I've done at a later date.

## Zone Installation

create the db zone

    reaper:~# zonecfg -z db
    db: No such zone configured
    Use 'create' to begin configuring a new zone.
    zonecfg:db> create
    zonecfg:db> set zonepath=/zones/zone_roots/db
    zonecfg:db> add net
    zonecfg:db:net> set address=193.62.81.38
    zonecfg:db:net>
    zonecfg:db:net> set physical=hme0
    zonecfg:db:net> end
    zonecfg:db> commit
    zonecfg:db> exit


    reaper:~# zoneadm -z db install
    Preparing to install zone <db>.
    Creating list of files to copy from the global zone.
    Copying <25506> files to the zone.

... make a nice cup of tea (this will take a few minutes (15-20))...

    Initializing zone product registry.
    Determining zone package initialization order.
    Preparing to initialize <1057> packages on the zone.
    Initialized <1057> packages on zone.                                 [[A^[[A
    Zone <db> is initialized.
    Installation of <1> packages was skipped.
    Installation of these packages generated warnings: <SUNWglrt>
    The file </zones/zone_roots/db/root/var/sadm/system/logs/install_log> contains
    a log of the zone installation.

    reaper:~# zoneadm -z db boot
    reaper:~# zlogin -e] -C db

(tra la la)

accept the obvious settings

-   term is xterms
-   domain reaper.tardis.ed.ac.uk
-   naming service is dns
    -   nameserver1 193.62.81.14
    -   nameserver2 129.215.200.7
    -   search reaper.tardis.ed.ac.uk
    -   search tardis.ed.ac.uk

*FIXME: set zone to autoboot*

## Set up MySQL

(from
<http://meta.wikimedia.org/wiki/Help:Running_MediaWiki_on_Solaris_10>)

    # /usr/sfw/bin/mysql_install_db
    # groupadd mysql

    # useradd -g mysql -d /var/mysql mysql
    # chgrp -R mysql /var/mysql
    # chmod -R 770 /var/mysql

    # /usr/sfw/sbin/mysqld_safe --user=mysql &

    # /usr/sfw/bin/mysqladmin -u root password <password>

    # ln /etc/sfw/mysql/mysql.server /etc/rc3.d/S99mysql
    # ln /etc/sfw/mysql/mysql.server /etc/rc1.d/K00mysql
    # ln /etc/sfw/mysql/mysql.server /etc/rc0.d/K00mysql
    # ln /etc/sfw/mysql/mysql.server /etc/rc2.d/K00mysql
    # ln /etc/sfw/mysql/mysql.server /etc/rcS.d/K00mysql

FIXME - fix security settings

## WEBSERVER

    reaper:~# zonecfg -z www
    www: No such zone configured
    Use 'create' to begin configuring a new zone.
    zonecfg:www> create
    zonecfg:www> set zonepath=/zones/zone_roots/www
    zonecfg:www> add net
    zonecfg:www:net> set address=193.62.81.36
    zonecfg:www:net> set physical=hme0
    zonecfg:www:net> end
    zonecfg:www> commit
    zonecfg:www> exit

add /usr/apache as a lofs thingy *FIXME - DOCUMENT THIS* cp reapers
version into shared dir

    reaper:~# zoneadm -z www install
    Preparing to install zone <www>.
    Creating list of files to copy from the global zone.
    Copying <25506> files to the zone.
    Initializing zone product registry.
    Determining zone package initialization order.
    Preparing to initialize <1057> packages on the zone.
    Initialized <1057> packages on zone.
    Zone <www> is initialized.
    Installation of <1> packages was skipped.
    Installation of these packages generated warnings: <SUNWglrt>
    The file </zones/zone_roots/www/root/var/sadm/system/logs/install_log>
    contains a log of the zone installation.
    reaper:~# zoneadm -z www boot && zlogin -e] -C www
    [Connected to zone 'www' console]
    Hostname: www

then installation begins:

Answers to questions pretty much the same as the previous zone.

and then off we go!

create a user account:

    # svcadm disable svc:/system/filesystem/autofs:default
    # chmod 755 /home
    # useradd -m -d /home/username -s /bin/bash/ username
    # passwd seth

scp config files from reaper (saves time)
`reaper# scp /etc/profile /etc/default/login /etc/default/su user@newhost`

drop them into place on the new system (ssh in with user account, then
su to root)

you may also wish to change root's shell and homedir (in /etc/passwd)

logout, log back in.... voila!

install the php package (sun url)

PATCH LIKE A MOTHERFUCKER

run x_postinstall

edit the apache config file:

-   use vhosts
-   serve index.php as an index
-   set hostname, email etc

*there are links to this stuff on the web, google for SAMP stack, etc*
*FIXME: refind those links*

## WIKI

### Installation

Get tarball, dump into vhost directory.

### DB Installation

MYSQL: \> CREATE DATABASE dbname; \> GRANT ALL PRIVILEGES ON vworks.\*
TO newuser@192.168.0.2 IDENTIFIED BY 'newpassword';

### Configuring

Access <http://wiki/wiki/config/index.php> or whatever, RTFM. Copy
settings file as described in Fine Manual, nuke config dir

Edit localsettings.php Change the whitelist settings as
[documented](http://meta.wikimedia.org/wiki/Preventing_Access).

[Category:OutOfDate](Category:OutOfDate "wikilink")