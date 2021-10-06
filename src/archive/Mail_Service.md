## Current setup

-   The main mail server is on [isolus](isolus "wikilink"), a virtual
    host.
-   We're using postfix as our MTA, and the default MDA is maildrop.
-   We [greylist](greylist "wikilink")
-   We also use the janet rbl
-   Users have the option to use [spamassassin](spamassassin "wikilink")
    for spam filtering.
-   [Lists Service](Lists_Service "wikilink")

### Renewing TLS certificates

Automation is not set up at the moment and there is no incoming https,
so you have to do a little work.

1.  Have two terminals, one on the DNS server, one of the mail server.
2.  On the DNS server, open the `db.tardis` zonefile and update the
    date. Go to the bottom of the file where the certificate update
    challenges are.
3.  On the mail server, run
    `certbot certonly --manual --cert-name isolus.tardis.ed.ac.uk --preferred-challenges=dns`
4.  certbot will give you the new challenges to add to the zonefile
    (annoyingly, one at a time). **Don't hit return after the last one
    yet!**
5.  Save the zonefile and restart bind9.
6.  Commit the new zonefile to git.
7.  Hit return in certbot to get the new certificates.
8.  Restart dovecot and postfix on the mail server.

## Handling spam

### Stop it quickly. Stop all mail from leaving the queue.

1.  ssh into the mail host (see above)
2.  Stop postfix by doing `postfix stop`

### Determine who is spamming

1.  ssh into the mail host (see above)
2.  Read `/var/log/mail.log` by doing `tail -f /var/log/mail.log` or
    using `less`
3.  Determine who is sending the spam by looking for:
    -   The `uid` in a `pickup` line
    -   The `sasl_username` in a `smtpd` line

Please be careful that you understand the log messages before taking
action. From addresses are trivially faked. You need to track the 11
character hex identifier across multiple log lines.

### Stop mail from going into the queue

1.  Log in to the gateway server, and change their password to something
    very random (`sudo passwd `<username>)
2.  Now more spam mail cannot be sent through that user (because nobody
    can access the account).

### Clear all mail in the queue being sent from that user

1.  ssh into the mail host (see above)
2.  Edit the `purge.sh` script in the root folder of the mail host
3.  Change the username in the script.
4.  Run the script (in a screen, possibly)
5.  Check `tail -f /var/log/mail.log` for "removed" messages to confirm
    the queue is being purged.

### Wait for the queue to be purged, and put things back to how they were

1.  When `tail` stops saying things are being removed (or when the
    process `awk` finishes) we need to put things back to how they were
    before.
2.  Start postfix by doing `postfix start` (only do this when the queue
    is done being purged.)

## Usage Guide

Tardis currently supports the following methods of accessing your email
account:

POP3
-   Server: `pop.tardis.ed.ac.uk`
-   Secure Connection: TLS or SSL
-   Username: Your Tardis username

<!-- -->

IMAP
-   Server: `imap.tardis.ed.ac.uk`,
-   Secure Connection: TLS or SSL
-   Username: Your Tardis username

<!-- -->

Webmail
We provide RoundCube Webmail at <https://webmail.tardis.ed.ac.uk>

<!-- -->

Via SSH
mutt and pine are both currently available on the shell server at
`ssh.tardis.ed.ac.uk`.

<!-- -->

Mail Submission
You can now send mail via Tardis' SMTP server from the outside world.

Configuration details:

-   Server: isolus.tardis.ed.ac.uk
-   Secure Connection: TLS
-   Server port: 587
-   Username: Your Tardis username

You may need to install the [CAcert Root
certificate](http://www.cacert.org/index.php?id=3) if you get mail
server certificate warnings every time you connect.

### Delivery and Filtering

Mail can be delivered by procmail or maildrop, (default) and can be spam
filtered by spamassassin. Support documentation for these applications
are currently unavailable, but hopefully will be soon. Before
[contacting us](Contact "wikilink"), we ask that you consult the man
page and online documentation for each application.

### Troubleshooting

-   IMAP can fail to connect if you've deleted your Maildir folder. To
    recreate it, run `maildirmake Maildir` in your home directory on
    Vortis.

## Admin

To change aliases (eg sysmans): edit /etc/aliases, run \`newaliases\`

To change virtual lookup tables (eg gamesoc emails): edit
/etc/postfix/virtual, run \`postmap /etc/postfix/virtual\`

## Breaking mail loops

(To prevent most of the loops between ecartis and majordomo
installations any mail to listar@tardis or majordomo@tardis which came
from majordomo-owner@... is now sent to support instead, using a small
procmail filter.)

Suppose ecartis gets into a bunfight with majordomo-owner@example.com,
replying to each other's automated messages. We can break the loop by
instructing postfix to hold messages from majordomo-owner@example.com
and delete the offending message. To put the mail on hold, edit
`/etc/postfix/access` on the mail host, adding a line like:

    majordomo-owner@example.com HOLD mail loop

The bit after `HOLD` is just a human-readable reason for putting the
mail on hold which gets put in our logs. Then run

    postmap access

to get postfix to pick up the change.

When a mail arrives, it gets put in the special hold queue. You can then
check that the message isn't legitimate mail with `postcat`, and delete
it with `postsuper`:

    root@mccoy:/etc/postfix# cd /var/spool/postfix/hold/
    root@mccoy:/var/spool/postfix/hold# ls -R
      [...]

    ./8:
    886702B036

      [...]
    root@mccoy:/var/spool/postfix/hold# postcat 8/886702B036
      [The message, plus a bit of header info...]
    root@mccoy:/var/spool/postfix/hold# postsuper -d 886702B036 hold

If it's real mail, you can release it with `postsuper -H 886702B036`.
You can remove the hold from `access` now, but remember to run postmap
so that postfix notices.

## Whitelisting and blacklisting

If mail from an external source is being rejected by postfix (say,
because they've got themselves listed in the RBL), they can be
whitelisted so that we can get mail from them anyway. To whitelist by
the claimed sender address, add an entry to `/etc/postfix/access`. To
whitelist by the hostname, IP address and such like, use
`/etc/postfix/clientaccess`. The entry should be followed by `OK`, and
`postmap` run to recreate the database file. Then postfix will consult
the new database file automatically.

You can also blacklist addresses and hosts using these files. Consult
the files for details.

## Webmail

Webmail (horde2) is available from
[webmail.tardis.ed.ac.uk](https://webmail.tardis.ed.ac.uk). It depends
on `/etc/init.d/imapproxy` running on [azal](azal "wikilink"). If IMAP
on [boe](boe "wikilink") is not functioning, this service will
eventually kill itself and webmail will start rejecting logins. In this
case, restart it with:

`  /etc/init.d/imapproxy restart`

## Wish list

-   ~~Amongst other things, we really really really need a better
    mailing list whatnot than ecartis. It occasionally completely
    garbles emails, and it doesn't seem to support attachments. It'd
    also be nice to have something that could perhaps pull userlists out
    of ldap? (Consider allusers, sysmans).~~ See [Lists
    Service](Lists_Service "wikilink")

<!-- -->

-   Perhaps we should use
    [spamhaus](http://www.spamhaus.org/effective_filtering.html) instead
    of or in addition to RBL+?

[category:services](category:services "wikilink")

[Category:OutOfDate](Category:OutOfDate "wikilink")