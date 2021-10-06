## Mysql

### Adding service accounts

` create database service_table_name;`
` GRANT ALL PRIVILEGES ON service_table_name.* to username@'%' IDENTIFIED BY 'password';`
` GRANT ALL PRIVILEGES ON service_table_name.* to username@localhost IDENTIFIED BY 'password';`

### Adding databases/users

While logged in to [sil](sil "wikilink"):

`  mysql -u root -p`

Then:

`  mysql> CREATE DATABASE `<user>`;`
`  mysql> GRANT ALL PRIVILEGES ON `<user>`.* TO '`<user>`'@'%.tardis.ed.ac.uk' IDENTIFIED BY '`<password>`';`

If you need to connect to this database from davros (which has old php
packages) you need to convert the password to an old-style version with

`   SET PASSWORD FOR 'some_user'@'some_host' = OLD_PASSWORD('newpwd');`

I hope these passwords still work when we move over to mara.

*Also, there's probably a way to compound those lines, but I CBA testing
it. wv.*

See: [1](http://dev.mysql.com/doc/refman/5.0/en/old-client.html) for
more information.

## PostgreSQL

*Note, this was copied straight from the original doc, and is a bit out
of date (RIP troughton). Also, it's not an appropriate way to do
backups. [Seth](User:Seth "wikilink")*

As of 2004-04-18 a PostgreSQL database service is available for user
access. The server is running on peri, and client access has been
configured on mccoy.

This service is being maintained by Martin Ling (mling@tardis). The
PostgreSQL version currently deployed is 7.4.5.

### Administrator notes

#### Adding accounts

To create a new PostgreSQL user account, execute as root on troughton:
*(peri??)*

`  su - postgres -c 'createuser --createdb --no-adduser -P'`

and enter the username and a password as required. The username should
match the requesting user's TARDIS account name.

Note that these options allow the user to create and remove their own
databases as they require, and grant or revoke permissions on them to
other PostgreSQL users. Users should be advised not to use generic names
such as 'test' for their databases, as the names must be globally unique
within the server.

#### Configuring client hosts

Hosts from which users will use the PostgreSQL client should have the
`postgresql-client` package installed, with version matching that of the
server install. The file /etc/postgresql/postgresql.env should be edited
and PGHOST set to the current database server, and /etc/profile should
source this file.

#### Moving or restoring the service

Should the databases need to be restored from a backup, or the service
moved to a different server, the new or restored server must be set up
with a fresh installation of `postgresql` package, with the same version
as used previously.

After installation the server should be stopped, and the
/var/lib/postgres/data directory replaced with that from the old server
or backup (/var/autofs/backups/postgres/data). Note that permission
information must be maintained. The access control configuration
/etc/postgresql/pg_hba.conf should also be transferred or set to contain
the line:

`  host         all         193.62.81.0   255.255.255.0       md5`

in place of:

`  host         all         0.0.0.0       0.0.0.0             reject`

which is installed by default.

The server can then be restarted.

Finally, a cron job should be configured to execute nightly as root on
the server:

cp -a /var/lib/postgres/data /var/autofs/backups/postgres

#### Upgrading the service

When the service is running normally an upgrade can be performed simply
by installing the newer `postgresql` package on the server, and
upgrading clients to match. The Debian postinst scripts handle the
process of carrying databases safely through an upgrade.

However, please contact the maintainer before attempting this.

[Category:Services](Category:Services "wikilink")