Netbox, accessible by <https://netbox.tardis.ed.ac.uk>, is where we
store the majority of our system-level documentation. It is on the
`logopolis` machine.

## Admin

The webserver is NGINX. The config file for our website is in
*/etc/nginx/sites-available/netbox*, and consists of a wildcard redirect
to https, as well as a simple reverse proxy to the Netbox server.

## Upgrade

Follow these instructions
<https://netbox.readthedocs.io/en/latest/installation/upgrading/>

[category:ExternalServices](category:ExternalServices "wikilink")
[category:Services](category:Services "wikilink")