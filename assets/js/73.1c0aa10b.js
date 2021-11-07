(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{444:function(e,t,a){"use strict";a.r(t);var i=a(46),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"current-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-setup"}},[e._v("#")]),e._v(" Current setup")]),e._v(" "),a("ul",[a("li",[e._v("The main mail server is on "),a("a",{attrs:{href:"isolus",title:"wikilink"}},[e._v("isolus")]),e._v(", a virtual\nhost.")]),e._v(" "),a("li",[e._v("We're using postfix as our MTA, and the default MDA is maildrop.")]),e._v(" "),a("li",[e._v("We "),a("a",{attrs:{href:"greylist",title:"wikilink"}},[e._v("greylist")])]),e._v(" "),a("li",[e._v("We also use the janet rbl")]),e._v(" "),a("li",[e._v("Users have the option to use "),a("a",{attrs:{href:"spamassassin",title:"wikilink"}},[e._v("spamassassin")]),e._v("\nfor spam filtering.")]),e._v(" "),a("li",[a("a",{attrs:{href:"Lists_Service",title:"wikilink"}},[e._v("Lists Service")])])]),e._v(" "),a("h3",{attrs:{id:"renewing-tls-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renewing-tls-certificates"}},[e._v("#")]),e._v(" Renewing TLS certificates")]),e._v(" "),a("p",[e._v("Automation is not set up at the moment and there is no incoming https,\nso you have to do a little work.")]),e._v(" "),a("ol",[a("li",[e._v("Have two terminals, one on the DNS server, one of the mail server.")]),e._v(" "),a("li",[e._v("On the DNS server, open the "),a("code",[e._v("db.tardis")]),e._v(" zonefile and update the\ndate. Go to the bottom of the file where the certificate update\nchallenges are.")]),e._v(" "),a("li",[e._v("On the mail server, run\n"),a("code",[e._v("certbot certonly --manual --cert-name isolus.tardis.ed.ac.uk --preferred-challenges=dns")])]),e._v(" "),a("li",[e._v("certbot will give you the new challenges to add to the zonefile\n(annoyingly, one at a time). "),a("strong",[e._v("Don't hit return after the last one\nyet!")])]),e._v(" "),a("li",[e._v("Save the zonefile and restart bind9.")]),e._v(" "),a("li",[e._v("Commit the new zonefile to git.")]),e._v(" "),a("li",[e._v("Hit return in certbot to get the new certificates.")]),e._v(" "),a("li",[e._v("Restart dovecot and postfix on the mail server.")])]),e._v(" "),a("h2",{attrs:{id:"handling-spam"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-spam"}},[e._v("#")]),e._v(" Handling spam")]),e._v(" "),a("h3",{attrs:{id:"stop-it-quickly-stop-all-mail-from-leaving-the-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-it-quickly-stop-all-mail-from-leaving-the-queue"}},[e._v("#")]),e._v(" Stop it quickly. Stop all mail from leaving the queue.")]),e._v(" "),a("ol",[a("li",[e._v("ssh into the mail host (see above)")]),e._v(" "),a("li",[e._v("Stop postfix by doing "),a("code",[e._v("postfix stop")])])]),e._v(" "),a("h3",{attrs:{id:"determine-who-is-spamming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#determine-who-is-spamming"}},[e._v("#")]),e._v(" Determine who is spamming")]),e._v(" "),a("ol",[a("li",[e._v("ssh into the mail host (see above)")]),e._v(" "),a("li",[e._v("Read "),a("code",[e._v("/var/log/mail.log")]),e._v(" by doing "),a("code",[e._v("tail -f /var/log/mail.log")]),e._v(" or\nusing "),a("code",[e._v("less")])]),e._v(" "),a("li",[e._v("Determine who is sending the spam by looking for:\n"),a("ul",[a("li",[e._v("The "),a("code",[e._v("uid")]),e._v(" in a "),a("code",[e._v("pickup")]),e._v(" line")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("sasl_username")]),e._v(" in a "),a("code",[e._v("smtpd")]),e._v(" line")])])])]),e._v(" "),a("p",[e._v("Please be careful that you understand the log messages before taking\naction. From addresses are trivially faked. You need to track the 11\ncharacter hex identifier across multiple log lines.")]),e._v(" "),a("h3",{attrs:{id:"stop-mail-from-going-into-the-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-mail-from-going-into-the-queue"}},[e._v("#")]),e._v(" Stop mail from going into the queue")]),e._v(" "),a("ol",[a("li",[e._v("Log in to the gateway server, and change their password to something\nvery random ("),a("code",[e._v("sudo passwd")]),a("username",[e._v(")")])],1),e._v(" "),a("li",[e._v("Now more spam mail cannot be sent through that user (because nobody\ncan access the account).")])]),e._v(" "),a("h3",{attrs:{id:"clear-all-mail-in-the-queue-being-sent-from-that-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear-all-mail-in-the-queue-being-sent-from-that-user"}},[e._v("#")]),e._v(" Clear all mail in the queue being sent from that user")]),e._v(" "),a("ol",[a("li",[e._v("ssh into the mail host (see above)")]),e._v(" "),a("li",[e._v("Edit the "),a("code",[e._v("purge.sh")]),e._v(" script in the root folder of the mail host")]),e._v(" "),a("li",[e._v("Change the username in the script.")]),e._v(" "),a("li",[e._v("Run the script (in a screen, possibly)")]),e._v(" "),a("li",[e._v("Check "),a("code",[e._v("tail -f /var/log/mail.log")]),e._v(' for "removed" messages to confirm\nthe queue is being purged.')])]),e._v(" "),a("h3",{attrs:{id:"wait-for-the-queue-to-be-purged-and-put-things-back-to-how-they-were"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wait-for-the-queue-to-be-purged-and-put-things-back-to-how-they-were"}},[e._v("#")]),e._v(" Wait for the queue to be purged, and put things back to how they were")]),e._v(" "),a("ol",[a("li",[e._v("When "),a("code",[e._v("tail")]),e._v(" stops saying things are being removed (or when the\nprocess "),a("code",[e._v("awk")]),e._v(" finishes) we need to put things back to how they were\nbefore.")]),e._v(" "),a("li",[e._v("Start postfix by doing "),a("code",[e._v("postfix start")]),e._v(" (only do this when the queue\nis done being purged.)")])]),e._v(" "),a("h2",{attrs:{id:"usage-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-guide"}},[e._v("#")]),e._v(" Usage Guide")]),e._v(" "),a("p",[e._v("Tardis currently supports the following methods of accessing your email\naccount:")]),e._v(" "),a("p",[e._v("POP3")]),e._v(" "),a("ul",[a("li",[e._v("Server: "),a("code",[e._v("pop.tardis.ed.ac.uk")])]),e._v(" "),a("li",[e._v("Secure Connection: TLS or SSL")]),e._v(" "),a("li",[e._v("Username: Your Tardis username")])]),e._v(" "),a("p",[e._v("IMAP")]),e._v(" "),a("ul",[a("li",[e._v("Server: "),a("code",[e._v("imap.tardis.ed.ac.uk")]),e._v(",")]),e._v(" "),a("li",[e._v("Secure Connection: TLS or SSL")]),e._v(" "),a("li",[e._v("Username: Your Tardis username")])]),e._v(" "),a("p",[e._v("Webmail\nWe provide RoundCube Webmail at "),a("a",{attrs:{href:"https://webmail.tardis.ed.ac.uk",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://webmail.tardis.ed.ac.uk"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Via SSH\nmutt and pine are both currently available on the shell server at\n"),a("code",[e._v("ssh.tardis.ed.ac.uk")]),e._v(".")]),e._v(" "),a("p",[e._v("Mail Submission\nYou can now send mail via Tardis' SMTP server from the outside world.")]),e._v(" "),a("p",[e._v("Configuration details:")]),e._v(" "),a("ul",[a("li",[e._v("Server: isolus.tardis.ed.ac.uk")]),e._v(" "),a("li",[e._v("Secure Connection: TLS")]),e._v(" "),a("li",[e._v("Server port: 587")]),e._v(" "),a("li",[e._v("Username: Your Tardis username")])]),e._v(" "),a("p",[e._v("You may need to install the "),a("a",{attrs:{href:"http://www.cacert.org/index.php?id=3",target:"_blank",rel:"noopener noreferrer"}},[e._v("CAcert Root\ncertificate"),a("OutboundLink")],1),e._v(" if you get mail\nserver certificate warnings every time you connect.")]),e._v(" "),a("h3",{attrs:{id:"delivery-and-filtering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delivery-and-filtering"}},[e._v("#")]),e._v(" Delivery and Filtering")]),e._v(" "),a("p",[e._v("Mail can be delivered by procmail or maildrop, (default) and can be spam\nfiltered by spamassassin. Support documentation for these applications\nare currently unavailable, but hopefully will be soon. Before\n"),a("a",{attrs:{href:"Contact",title:"wikilink"}},[e._v("contacting us")]),e._v(", we ask that you consult the man\npage and online documentation for each application.")]),e._v(" "),a("h3",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("ul",[a("li",[e._v("IMAP can fail to connect if you've deleted your Maildir folder. To\nrecreate it, run "),a("code",[e._v("maildirmake Maildir")]),e._v(" in your home directory on\nVortis.")])]),e._v(" "),a("h2",{attrs:{id:"admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin"}},[e._v("#")]),e._v(" Admin")]),e._v(" "),a("p",[e._v("To change aliases (eg sysmans): edit /etc/aliases, run `newaliases`")]),e._v(" "),a("p",[e._v("To change virtual lookup tables (eg gamesoc emails): edit\n/etc/postfix/virtual, run `postmap /etc/postfix/virtual`")]),e._v(" "),a("h2",{attrs:{id:"breaking-mail-loops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breaking-mail-loops"}},[e._v("#")]),e._v(" Breaking mail loops")]),e._v(" "),a("p",[e._v("(To prevent most of the loops between ecartis and majordomo\ninstallations any mail to listar@tardis or majordomo@tardis which came\nfrom majordomo-owner@... is now sent to support instead, using a small\nprocmail filter.)")]),e._v(" "),a("p",[e._v("Suppose ecartis gets into a bunfight with majordomo-owner@example.com,\nreplying to each other's automated messages. We can break the loop by\ninstructing postfix to hold messages from majordomo-owner@example.com\nand delete the offending message. To put the mail on hold, edit\n"),a("code",[e._v("/etc/postfix/access")]),e._v(" on the mail host, adding a line like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("majordomo-owner@example.com HOLD mail loop\n")])])]),a("p",[e._v("The bit after "),a("code",[e._v("HOLD")]),e._v(" is just a human-readable reason for putting the\nmail on hold which gets put in our logs. Then run")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("postmap access\n")])])]),a("p",[e._v("to get postfix to pick up the change.")]),e._v(" "),a("p",[e._v("When a mail arrives, it gets put in the special hold queue. You can then\ncheck that the message isn't legitimate mail with "),a("code",[e._v("postcat")]),e._v(", and delete\nit with "),a("code",[e._v("postsuper")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("root@mccoy:/etc/postfix# cd /var/spool/postfix/hold/\nroot@mccoy:/var/spool/postfix/hold# ls -R\n  [...]\n\n./8:\n886702B036\n\n  [...]\nroot@mccoy:/var/spool/postfix/hold# postcat 8/886702B036\n  [The message, plus a bit of header info...]\nroot@mccoy:/var/spool/postfix/hold# postsuper -d 886702B036 hold\n")])])]),a("p",[e._v("If it's real mail, you can release it with "),a("code",[e._v("postsuper -H 886702B036")]),e._v(".\nYou can remove the hold from "),a("code",[e._v("access")]),e._v(" now, but remember to run postmap\nso that postfix notices.")]),e._v(" "),a("h2",{attrs:{id:"whitelisting-and-blacklisting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whitelisting-and-blacklisting"}},[e._v("#")]),e._v(" Whitelisting and blacklisting")]),e._v(" "),a("p",[e._v("If mail from an external source is being rejected by postfix (say,\nbecause they've got themselves listed in the RBL), they can be\nwhitelisted so that we can get mail from them anyway. To whitelist by\nthe claimed sender address, add an entry to "),a("code",[e._v("/etc/postfix/access")]),e._v(". To\nwhitelist by the hostname, IP address and such like, use\n"),a("code",[e._v("/etc/postfix/clientaccess")]),e._v(". The entry should be followed by "),a("code",[e._v("OK")]),e._v(", and\n"),a("code",[e._v("postmap")]),e._v(" run to recreate the database file. Then postfix will consult\nthe new database file automatically.")]),e._v(" "),a("p",[e._v("You can also blacklist addresses and hosts using these files. Consult\nthe files for details.")]),e._v(" "),a("h2",{attrs:{id:"webmail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webmail"}},[e._v("#")]),e._v(" Webmail")]),e._v(" "),a("p",[e._v("Webmail (horde2) is available from\n"),a("a",{attrs:{href:"https://webmail.tardis.ed.ac.uk",target:"_blank",rel:"noopener noreferrer"}},[e._v("webmail.tardis.ed.ac.uk"),a("OutboundLink")],1),e._v(". It depends\non "),a("code",[e._v("/etc/init.d/imapproxy")]),e._v(" running on "),a("a",{attrs:{href:"azal",title:"wikilink"}},[e._v("azal")]),e._v(". If IMAP\non "),a("a",{attrs:{href:"boe",title:"wikilink"}},[e._v("boe")]),e._v(" is not functioning, this service will\neventually kill itself and webmail will start rejecting logins. In this\ncase, restart it with:")]),e._v(" "),a("p",[a("code",[e._v("/etc/init.d/imapproxy restart")])]),e._v(" "),a("h2",{attrs:{id:"wish-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wish-list"}},[e._v("#")]),e._v(" Wish list")]),e._v(" "),a("ul",[a("li",[a("s",[e._v("Amongst other things, we really really really need a better\nmailing list whatnot than ecartis. It occasionally completely\ngarbles emails, and it doesn't seem to support attachments. It'd\nalso be nice to have something that could perhaps pull userlists out\nof ldap? (Consider allusers, sysmans).")]),e._v(" See "),a("a",{attrs:{href:"Lists_Service",title:"wikilink"}},[e._v("Lists\nService")])])]),e._v(" "),a("ul",[a("li",[e._v("Perhaps we should use\n"),a("a",{attrs:{href:"http://www.spamhaus.org/effective_filtering.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("spamhaus"),a("OutboundLink")],1),e._v(" instead\nof or in addition to RBL+?")])]),e._v(" "),a("p",[a("a",{attrs:{href:"category:services",title:"wikilink"}},[e._v("category:services")])]),e._v(" "),a("p",[a("a",{attrs:{href:"Category:OutOfDate",title:"wikilink"}},[e._v("Category:OutOfDate")])])])}),[],!1,null,null,null);t.default=s.exports}}]);