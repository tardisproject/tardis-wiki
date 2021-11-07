(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{442:function(e,i,a){"use strict";a.r(i);var t=a(46),n=Object(t.a)({},(function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"news"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#news"}},[e._v("#")]),e._v(" News")]),e._v(" "),a("h3",{attrs:{id:"_2020-06-22-we-spun-down-ood"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020-06-22-we-spun-down-ood"}},[e._v("#")]),e._v(" 2020-06-22 we spun down ood")]),e._v(" "),a("p",[e._v("We spun down the service because apparently it's running a vulnerable\nversion of exim. I checked the 'public' lists (ai@, compsoc@,\nphilsoc-committee@, and more) and they all had no entries in the past\nfive years.")]),e._v(" "),a("p",[e._v("I also checked the logs ("),a("code",[e._v("/var/log/mailman/smtp")]),e._v(" and\n"),a("code",[e._v("gzcat /var/log/mailman/smtp.2.gz")]),e._v("0 and only these public lists had hits\nin the last week or so. The last week or so isn't a great a metric but\nI'm somewhat confident that nobody is using this service.")]),e._v(" "),a("p",[a("strong",[e._v("IF YOU ARE USING THIS SERVICE. COME ON IRC OR DISCORD AND SHOUT AT US,\nAND WE WILL PUT SOME WORK INTO BRINGING IT BACK UP.")]),e._v(" (See the homepage\nfor IRC/Discord links.)")]),e._v(" "),a("p",[e._v("--"),a("a",{attrs:{href:"User:Qaisjp",title:"wikilink"}},[e._v("Qaisjp")]),e._v(" ("),a("a",{attrs:{href:"User_talk:Qaisjp",title:"wikilink"}},[e._v("talk")]),e._v(")\n10:41, 22 June 2020 (BST)")]),e._v(" "),a("p",[a("strong",[e._v("TOC")])]),e._v(" "),a("h2",{attrs:{id:"mailman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mailman"}},[e._v("#")]),e._v(" Mailman")]),e._v(" "),a("p",[e._v("This runs on ood. The setup is very debian and boring and default. The\nlists file should probably be backed up.")]),e._v(" "),a("ul",[a("li",[e._v("Admin is by email and by web, for example:\n"),a("a",{attrs:{href:"http://lists.tardis.ed.ac.uk/cgi-bin/mailman/admin/ilovekfc",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://lists.tardis.ed.ac.uk/cgi-bin/mailman/admin/ilovekfc"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("It's not got any spam filtering on it... yet.")]),e._v(" "),a("li",[e._v("To make a new list:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('ood:/etc/mailman# newlist ilovekfc\nEnter the email of the person running the list: bung@tardis.ed.ac.uk\nInitial ilovekfc password:\nTo finish creating your mailing list, you must edit your /etc/aliases (or\nequivalent) file by adding the following lines, and possibly running the\n`newaliases\' program:\n\n## ilovekfc mailing list\nilovekfc:              "|/var/lib/mailman/mail/mailman post ilovekfc"\nilovekfc-admin:        "|/var/lib/mailman/mail/mailman admin ilovekfc"\nilovekfc-bounces:      "|/var/lib/mailman/mail/mailman bounces ilovekfc"\nilovekfc-confirm:      "|/var/lib/mailman/mail/mailman confirm ilovekfc"\nilovekfc-join:         "|/var/lib/mailman/mail/mailman join ilovekfc"\nilovekfc-leave:        "|/var/lib/mailman/mail/mailman leave ilovekfc"\nilovekfc-owner:        "|/var/lib/mailman/mail/mailman owner ilovekfc"\nilovekfc-request:      "|/var/lib/mailman/mail/mailman request ilovekfc"\nilovekfc-subscribe:    "|/var/lib/mailman/mail/mailman subscribe ilovekfc"\nilovekfc-unsubscribe:  "|/var/lib/mailman/mail/mailman unsubscribe ilovekfc"\n\nHit enter to notify ilovekfc owner...\nood:/etc/mailman# vim /etc/aliases # like it says\nood:/etc/mailman# newaliases\n')])])]),a("h2",{attrs:{id:"ecartis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecartis"}},[e._v("#")]),e._v(" Ecartis")]),e._v(" "),a("p",[e._v("This runs on mccoy, and enjoys the same setup as mccoy (blacklisting,\nwhitelisting, yellowlisting, redlisting, addyourminorityherelisting).")]),e._v(" "),a("ul",[a("li",[e._v("It's crap. Things break. It should be avoided.")]),e._v(" "),a("li",[e._v("All admin is done by email (subscription, user adding, etc etc)\n(unless you're root on tardis)")])]),e._v(" "),a("h2",{attrs:{id:"moving-lists-from-ecartis-to-mailman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#moving-lists-from-ecartis-to-mailman"}},[e._v("#")]),e._v(" Moving lists from ecartis to mailman")]),e._v(" "),a("ul",[a("li",[e._v("Make the new list on ood, as above. The following assumes you're the\nlist admin (if you're not you probably should make yourself, and\nswitch things over when things are stable). Maybe everything could\nbe done with files. Or maybe something in the 'listadmin' package\nwill do this all for you.")]),e._v(" "),a("li",[e._v("On mccoy you can find the subscribers by:")])]),e._v(" "),a("p",[a("code",[e._v("root@mccoy:/var/lib/ecartis/lists/listname# cat users | awk '{print $1}'")])]),e._v(" "),a("ul",[a("li",[e._v("Spam these users into\n"),a("a",{attrs:{href:"http://lists.tardis.ed.ac.uk/cgi-bin/mailman/admin/listname/members/add",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://lists.tardis.ed.ac.uk/cgi-bin/mailman/admin/listname/members/add"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Forward listname@tardis to listname@lists.tardis by changing the\nentries in mccoy:/etc/postfix/listar.aliases")])]),e._v(" "),a("p",[a("code",[e._v("# Aliases for 'listname' mailing list.")]),e._v(" "),a("code",[e._v("listname: listname@lists.tardis.ed.ac.uk")]),e._v(" "),a("code",[e._v("listname-owner: listowner@tardis.ed.ac.uk")])]),e._v(" "),a("ul",[a("li",[e._v("newaliases on mccoy")]),e._v(" "),a("li",[e._v("All should be done! Tell the list admins the new preferred ways to\nsubscribe to the list (i.e. web interface and whatnot, find the\nlinks in the web interface).")]),e._v(" "),a("li",[e._v("At some point, postgrey died when I was doing this. My fault? Who\nknows. Make sure it's running on mccoy or things will die.")]),e._v(" "),a("li",[e._v("The default behaviour of ecartis is to have the reply going to the\nlist, in mailman it goes to the sender by default. Change this in:\n"),a("a",{attrs:{href:"http://lists.tardis.ed.ac.uk/cgi-bin/mailman/admin/listname/?VARHELP=general/reply_goes_to_list",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://lists.tardis.ed.ac.uk/cgi-bin/mailman/admin/listname/?VARHELP=general/reply_goes_to_list"),a("OutboundLink")],1),e._v("\nif you care.")]),e._v(" "),a("li",[e._v("If the list is redirected externally, you may find things are\nmoderated that you're not expecting. See\n"),a("a",{attrs:{href:"http://www.washington.edu/computing/mailman/faqs/mailman.moderate.why.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"archives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#archives"}},[e._v("#")]),e._v(" Archives")]),e._v(" "),a("ul",[a("li",[e._v("By default, mailman archives lists, and publishes without\nrestrictions. Fortunately, the software also allows you to publish\nthem privately (mailman gives all list members a password). Of\ncourse, admins have the choice of disabling archiving completely.")])]),e._v(" "),a("h2",{attrs:{id:"policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#policy"}},[e._v("#")]),e._v(" Policy")]),e._v(" "),a("p",[e._v("There seem to be a plethora of mailing lists. Current policy seems to be\nthat the list admin must have a Tardis account, but group accounts\naren't required.")]),e._v(" "),a("h2",{attrs:{id:"spam"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spam"}},[e._v("#")]),e._v(" Spam")]),e._v(" "),a("p",[e._v("Spamassassin is disabled as I thought it did (for at least one list)\nmore harm than good. Spam that should have been discarded was pending\nmoderation. --"),a("a",{attrs:{href:"User:Bung",title:"wikilink"}},[e._v("Bung")]),e._v(" 17:08, 22 June 2007 (BST)")]),e._v(" "),a("p",[e._v("Logging is done to "),a("code",[e._v("ood:/var/log/mailman/vette")])]),e._v(" "),a("p",[a("a",{attrs:{href:"category:services",title:"wikilink"}},[e._v("category:services")])])])}),[],!1,null,null,null);i.default=n.exports}}]);