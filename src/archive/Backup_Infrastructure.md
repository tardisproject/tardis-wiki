The other half of the raid array for the homedirs in
[dalek](dalek "wikilink") is sitting in
[brigadier](brigadier "wikilink"). We do not have any form of backups of
homedirs in place, other than a copy from about a year ago.

Same applies to the [webserver](davros "wikilink"), although it's raid
is in place, the disk has some very bizarre filesystem errors (re:
\~kate/qcmweb)

## Things to backup

### User data

*This is stuff we just can't get back/rebuild*

[LDAP](LDAP "wikilink")
Currently backed up using '/root/ldap/backup', run from cron on
[Piper](Piper "wikilink") (the [LDAP](LDAP "wikilink") server). The
script saves backups to '/export/home/backups/ldap/' and these should be
copied elsewhere, for obvious reasons.

<!-- -->

Home dirs
RAIDed again but no regular backups as yet.

<!-- -->

Mail dirs
*Similarly*

<!-- -->

Web dirs
Raid-Mirrored. Not backed-up.

<!-- -->

Databases
Not backed up. We should probably do SQL dumps, rather than dumps of the
raw db backened.

<!-- -->

[Lists Service](Lists_Service "wikilink")
Not backed up. No idea how it needs to be done.

### Other stuff

System configurations
[LCFG](LCFG "wikilink") proved too much of a beast to handle. Best
methods for doing this, suggestions?

Backing up `/etc` would *help* in a lot of cases, but isn't a proper
solution.

<!-- -->

System logs
There's probably some sense in this, if we get haX0rised, but that's
probably OTT.

<!-- -->


Logs are kept on each system and sent to [Piper](Piper "wikilink") (see
[Log_Host](Log_Host "wikilink")) so this should be enough.

<!-- -->

The wiki
This could/should be covered by our regular (cough) database backups.

<!-- -->

DNS data
This could be covered by the 'System configurations' bit above or be
done by taking backups of '[leela](leela "wikilink"):/etc/bind/'
specifically.

<!-- -->

[Xen](Xen "wikilink")
It might be good to take some LVM snapshots of the root FSes of our Xen
VMs. It's not a real backup but would be a quick way to recover from any
problems on the VMs.

<!-- -->

The [firewall](firewall "wikilink")
We could do with some backups of the firewall script.

## Solution

[Pert](User:Pert "wikilink") had started installing a new machine which
contained one 120GB disk in LVM.

This was going to run BackupPC but this does not allow users to restore
thier own files and does not seem to play well with rsync. Therefore
I've been testing a new solution, using rsync to create hard-link-based
incremental backups. The script I've been writing is currently in /root/
on piper and so far this has only been tested on the home directories.

### Architecture

Backups will be pushed from the various servers (file, web, etc.) to
backup.t using rsync, some scripts and cron. Rsync's '--link-dest'
argument will be used to create hard-link-based incremental backups on
the LVMed space in backup.t.

As it would be tricky to monitor the backups on each of the servers
using the backup service, (file, web, etc.) monitoring will be done by a
script on backup.t. It should mail daily reports to a specific person
(WV me (pert)) who will notice and fix things if the mails stop. These
mails should contain disk usage info from backup.t and warn about missed
backups. This script will probably also be responsible for removing
backups as they get old.

Backups of home directories and mail will be shared out to the shell
server(s) using NFS so users can restore their own files.

Here's an example of the directory structure used on backup.t:

<code>

    /export/
    /export/home
    /export/home/2006-02-23
    /export/home/2006-02-23/newusers
    ...
    /export/home/2006-02-24
    /export/home/2006-02-24/newusers
    ...
    /export/mail/2006-02-23
    /export/mail/2006-02-23/pert
    ...
    /export/mysql
    ...
    /export/psql
    ...
    ...

</code>

[Category:OutOfDate](Category:OutOfDate "wikilink")