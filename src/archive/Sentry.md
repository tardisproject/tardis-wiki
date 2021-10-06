Sentry is hosted on [Judoon](Judoon "wikilink") and can be accessed at
<http://judoon.tardis.ed.ac.uk/>.

Sentry is a realtime event logging and aggregation platform. It
specializes in monitoring errors and extracting all the information
needed to do a proper post-mortem without any of the hassle of the
standard user feedback loop. (From
[PyPI](https://pypi.python.org/pypi/sentry))

# Registration

Typically you will be registering in response to an invite to join an
organisation. In this case, you will get an email from Sentry with text
such as

<code> You have been invited to join the ORGNAME organization on Sentry.

ORGNAME is using Sentry to capture exceptions in real-time.

To accept this invitation, proceed to the following url:

http://judoon.tardis.ed.ac.uk/accept/\<int>/\<key>/ </code>

When you follow the link in the email, you will be able to create an
account if you do not already have one.

# Documentation

Documentation for Sentry is available within Sentry itself at
<http://judoon.tardis.ed.ac.uk/docs/>.

Useful information in the documentation includes how to set up the raven
client in Python, PHP, Ruby, JavaScript, Java, Node.js and Go.

# Plugins

Sentry is a very pluggable system, and as such there are multitudes of
plugins and integrations with other services out there. If you would
like a plugin installed that is not on the below list, please ping
[User:Skull](User:Skull "wikilink") or
[User:Arkan](User:Arkan "wikilink") in IRC.

-   [sentry-irc](https://pypi.python.org/pypi/sentry-irc) - If you get
    this to work, let [User:Skull](User:Skull "wikilink") know and he
    will love you longtime
-   [sentry-slack](https://pypi.python.org/pypi/sentry-slack)

# Components

This section goes into the technical setup of the sentry server,
[Judoon](Judoon "wikilink")

## PostgreSQL

We're using peer authentication for PostgreSQL, so if you need to get at
the command line for sentry's db, use the following:

`root@judoon# sudo -u sentry psql`

## Nginx

There is only one VHost enabled in Nginx, `sentry`.

Because we're just using the one VHost, Nginx logs are just in the
default /var/log/nginx folder.

## Redis

Redis is still in a default config.

## Supervisor

Supervisor is in use to daemonize Gunicorn and Celery.

Config for supervisord lives at `/etc/supervisord.conf`.

Individual app configs go in `/etc/supervisor/` and can be viewed with
`supervisorctl`.

## Sentry

Configuration lives at `/etc/sentry.conf.py`.

[category:Services](category:Services "wikilink")