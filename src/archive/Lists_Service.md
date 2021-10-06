## News

### 2020-06-22 we spun down ood

We spun down the service because apparently it's running a vulnerable
version of exim. I checked the 'public' lists (ai@, compsoc@,
philsoc-committee@, and more) and they all had no entries in the past
five years.

I also checked the logs (`/var/log/mailman/smtp` and
`gzcat /var/log/mailman/smtp.2.gz`0 and only these public lists had hits
in the last week or so. The last week or so isn't a great a metric but
I'm somewhat confident that nobody is using this service.

**IF YOU ARE USING THIS SERVICE. COME ON IRC OR DISCORD AND SHOUT AT US,
AND WE WILL PUT SOME WORK INTO BRINGING IT BACK UP.** (See the homepage
for IRC/Discord links.)

--[Qaisjp](User:Qaisjp "wikilink") ([talk](User_talk:Qaisjp "wikilink"))
10:41, 22 June 2020 (BST)

__TOC__

## Mailman

This runs on ood. The setup is very debian and boring and default. The
lists file should probably be backed up.

-   Admin is by email and by web, for example:
    <http://lists.tardis.ed.ac.uk/cgi-bin/mailman/admin/ilovekfc>
-   It's not got any spam filtering on it... yet.
-   To make a new list:

<!-- -->

    ood:/etc/mailman# newlist ilovekfc
    Enter the email of the person running the list: bung@tardis.ed.ac.uk
    Initial ilovekfc password:
    To finish creating your mailing list, you must edit your /etc/aliases (or
    equivalent) file by adding the following lines, and possibly running the
    `newaliases' program:

    ## ilovekfc mailing list
    ilovekfc:              "|/var/lib/mailman/mail/mailman post ilovekfc"
    ilovekfc-admin:        "|/var/lib/mailman/mail/mailman admin ilovekfc"
    ilovekfc-bounces:      "|/var/lib/mailman/mail/mailman bounces ilovekfc"
    ilovekfc-confirm:      "|/var/lib/mailman/mail/mailman confirm ilovekfc"
    ilovekfc-join:         "|/var/lib/mailman/mail/mailman join ilovekfc"
    ilovekfc-leave:        "|/var/lib/mailman/mail/mailman leave ilovekfc"
    ilovekfc-owner:        "|/var/lib/mailman/mail/mailman owner ilovekfc"
    ilovekfc-request:      "|/var/lib/mailman/mail/mailman request ilovekfc"
    ilovekfc-subscribe:    "|/var/lib/mailman/mail/mailman subscribe ilovekfc"
    ilovekfc-unsubscribe:  "|/var/lib/mailman/mail/mailman unsubscribe ilovekfc"

    Hit enter to notify ilovekfc owner...
    ood:/etc/mailman# vim /etc/aliases # like it says
    ood:/etc/mailman# newaliases

## Ecartis

This runs on mccoy, and enjoys the same setup as mccoy (blacklisting,
whitelisting, yellowlisting, redlisting, addyourminorityherelisting).

-   It's crap. Things break. It should be avoided.
-   All admin is done by email (subscription, user adding, etc etc)
    (unless you're root on tardis)

## Moving lists from ecartis to mailman

-   Make the new list on ood, as above. The following assumes you're the
    list admin (if you're not you probably should make yourself, and
    switch things over when things are stable). Maybe everything could
    be done with files. Or maybe something in the 'listadmin' package
    will do this all for you.
-   On mccoy you can find the subscribers by:

`root@mccoy:/var/lib/ecartis/lists/listname# cat users | awk '{print $1}'`

-   Spam these users into
    <http://lists.tardis.ed.ac.uk/cgi-bin/mailman/admin/listname/members/add>
-   Forward listname@tardis to listname@lists.tardis by changing the
    entries in mccoy:/etc/postfix/listar.aliases

`# Aliases for 'listname' mailing list.`
`listname: listname@lists.tardis.ed.ac.uk`
`listname-owner: listowner@tardis.ed.ac.uk `

-   newaliases on mccoy
-   All should be done! Tell the list admins the new preferred ways to
    subscribe to the list (i.e. web interface and whatnot, find the
    links in the web interface).
-   At some point, postgrey died when I was doing this. My fault? Who
    knows. Make sure it's running on mccoy or things will die.
-   The default behaviour of ecartis is to have the reply going to the
    list, in mailman it goes to the sender by default. Change this in:
    <http://lists.tardis.ed.ac.uk/cgi-bin/mailman/admin/listname/?VARHELP=general/reply_goes_to_list>
    if you care.
-   If the list is redirected externally, you may find things are
    moderated that you're not expecting. See
    [1](http://www.washington.edu/computing/mailman/faqs/mailman.moderate.why.html)

## Archives

-   By default, mailman archives lists, and publishes without
    restrictions. Fortunately, the software also allows you to publish
    them privately (mailman gives all list members a password). Of
    course, admins have the choice of disabling archiving completely.

## Policy

There seem to be a plethora of mailing lists. Current policy seems to be
that the list admin must have a Tardis account, but group accounts
aren't required.

## Spam

Spamassassin is disabled as I thought it did (for at least one list)
more harm than good. Spam that should have been discarded was pending
moderation. --[Bung](User:Bung "wikilink") 17:08, 22 June 2007 (BST)

Logging is done to `ood:/var/log/mailman/vette`

[category:services](category:services "wikilink")