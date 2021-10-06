Tardis has a a [MediaWiki](Special:Version "wikilink") hosting facility.

-   [Installation Doc](MediaWiki_Installation "wikilink")

Speak to seth for information.

## MediaWiki User Accounts

### Adding accounts

Thom can create new accounts.

### Some notes for future reference

From...
[1](http://people.planetpostgresql.org/greg/index.php?/archives/74-Reset-a-user-password-on-MediaWiki.html).
See also [2](http://meta.wikimedia.org/wiki/Help:User_rights). Log into
www.reaper as root, then:

`  www:~# mysql -h db.reaper -u tardiswiki -p`
`  Enter password: `
`  Welcome to the MySQL monitor.  Commands end with ; or \g.`
`  Your MySQL connection id is 4057 to server version: 4.0.24`
`  Type 'help;' or '\h' for help. Type '\c' to clear the buffer.`
`  mysql> insert into tw_user (user_name,user_real_name) values ('TestUser','Test User');`
`  Query OK, 1 row affected (0.03 sec)`
`  mysql> UPDATE tw_user SET user_password = md5( concat('25-',md5('somepassword'))) WHERE user_name='TestUser';`

Where we really want the concat() call to be something like

`  concat((SELECT user_id FROM tw_user WHERE user_name='TestUser'),'-',md5('somepassword'))`

... Need to fix this and script this for a tardis-add-wikiuser script
that users can run themselves to add their user or update password. Prod
people for the tardiswiki password.

## Wiki Service 2.0

[User:dcoles](User:dcoles "wikilink") is working on a more unified Wiki
hosting. Ideally we want to make it fairly easy to get a basic Wiki set
up in such a way that doesn't require fluffing around with DNS,
downloading a copy of MediaWiki and then setting up a new vhost for
each.

-   All the Wikis will be created by simlinks from the master MediaWiki
    dpkg installation at `/usr/share/mediawiki/`. This means all
    instances should remain up-to-date with the current Debian package.
    If needs be these can then be overidden simply by replacing the
    relevant file.
-   All the Wikis will be accessed via \*.wiki.tardis.ed.ac.uk. This
    means that you won't need to create any new DNS entries.
-   All the Wikis will share a single directory structure and Apache
    configuration. No need to create vhosts for each Wiki.

The rough guide to setting up a Wiki (ideally there should be a small
shell script here) is:

1.  `$ mkdir -p /tardis/www/wikiservice/$WIKINAME/pages`
2.  `$ ln -s /usr/share/mediawiki/* /tardis/www/wikiservice/$WIKINAME/pages/`
3.  `$ rm /tardis/www/wikiservice/$WIKINAME/pages/LocalSettings.php`
4.  -- Fix permissions?

You should now be able to run the normal MediWiki setup by browsing to
<http://$WIKINAME.wiki.tardis.ed.ac.uk>

[category:Services](category:Services "wikilink")