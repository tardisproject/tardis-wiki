(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{445:function(e,t,a){"use strict";a.r(t);var s=a(46),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Group accounts are necessary when a number of users need access to the\nsame set of files, for example, a society webpage. All of the users who\nwish to edit these files "),a("strong",[e._v("MUST")]),e._v(" be tardis account holders.")]),e._v(" "),a("p",[e._v("Two things need set up, the group (or role) account, and the the unix\ngroup. Both will have the same name.")]),e._v(" "),a("h2",{attrs:{id:"creating-the-group-role-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-group-role-account"}},[e._v("#")]),e._v(" Creating the group/role account")]),e._v(" "),a("h3",{attrs:{id:"add-normal-user-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-normal-user-account"}},[e._v("#")]),e._v(" Add normal user account")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("tardis adduser")]),a("username",[e._v(" add an account.")])],1),e._v(" "),a("h3",{attrs:{id:"removing-the-account-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removing-the-account-password"}},[e._v("#")]),e._v(" Removing the account password")]),e._v(" "),a("p",[e._v("Create a file called "),a("code",[e._v("removepw.ldif")]),e._v(" (or use the one on\n"),a("code",[e._v("vortis:/root/")]),e._v(").")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("# extended LDIF\n#\n# LDAPv3\n# base <ou=Group,dc=tardis,dc=ed,dc=ac,dc=uk> with scope sub\n# filter: cn=admin\n# requesting: ALL\n#\n#\n# Use ldapmodify, bound as root or as the user\n\ndn: uid=GROUPNAME,ou=People,dc=tardis,dc=ed,dc=ac,dc=uk\nchangetype: modify\nreplace: userPassword\nuserPassword:\n")])])]),a("p",[e._v("Then do:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ldapmodify -x -D cn=admin,dc=tardis,dc=ed,dc=ac,dc=uk -W -f removepw.ldif\n")])])]),a("h2",{attrs:{id:"creating-the-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-group"}},[e._v("#")]),e._v(" Creating the group")]),e._v(" "),a("h3",{attrs:{id:"get-a-group-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-a-group-id"}},[e._v("#")]),e._v(" Get a group ID")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ldapsearch -x -b 'ou=Group,dc=tardis,dc=ed,dc=ac,dc=uk' objectClass=posixGroup\n")])])]),a("p",[e._v("Pick a new one that's one higher than the previous highest one, etc.")]),e._v(" "),a("h3",{attrs:{id:"create-the-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-the-group"}},[e._v("#")]),e._v(" Create the group")]),e._v(" "),a("p",[e._v("Create a file (or use the one in "),a("code",[e._v("vortis:/root/")]),e._v("), substituting the\ncapitalised bits with the appropriate information:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("# GROUPNAME, Group, tardis.ed.ac.uk\ndn: cn=GROUPNAME,ou=Group,dc=tardis,dc=ed,dc=ac,dc=uk\nobjectClass: posixGroup\nobjectClass: top\ncn: GROUPNAME\ngidNumber: GROUPNUMBER\nmemberUid: SOMEUSER\n")])])]),a("p",[a("em",[e._v("Does the memberUid entry need to be there when creating? Probably not,\nbut you'll know at least one user to put in the group when you make the\naccount, and it saves you messing with ldapvi later")])]),e._v(" "),a("p",[e._v("Save it as "),a("code",[e._v("addgroup.ldif")]),e._v(", then do:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ldapadd -x -D cn=admin,dc=tardis,dc=ed,dc=ac,dc=uk -W -f addgroup.ldif\n")])])]),a("p",[e._v("This needs the LDAP admin password.")]),e._v(" "),a("h2",{attrs:{id:"adding-users-to-the-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-users-to-the-group"}},[e._v("#")]),e._v(" Adding users to the group")]),e._v(" "),a("p",[e._v("Using ldapvi:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("ldapvi -h ldap.tardis.ed.ac.uk -D 'cn=admin,dc=tardis,dc=ed,dc=ac,dc=uk' -b 'ou=Group,dc=tardis,dc=ed,dc=ac,dc=uk' '(cn=GROUPNAME)'\n")])])]),a("p",[a("em",[e._v("(substituting the relevant group name for GROUPNAME")]),e._v(") You will be\npresented with vim, looking a bit like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("# ldapvi(1)\n\n0 cn=gliding,ou=Group,dc=tardis,dc=ed,dc=ac,dc=uk\nobjectClass: posixGroup\nobjectClass: top\ncn: GROUPNAME\nuserPassword: {crypt}*\ngidNumber: GROUPNUMBER\nmemberUid: SOMEMEMBER\n")])])]),a("p",[e._v("Add memberUid entries at the bottom for each for each user required.\nSave the file and quit vim, and the groups will be updated.")]),e._v(" "),a("h2",{attrs:{id:"allowing-sudo-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allowing-sudo-access"}},[e._v("#")]),e._v(" Allowing sudo access")]),e._v(" "),a("p",[e._v("To allow a user to run "),a("code",[e._v("sudo")]),e._v(" commands, add them to the "),a("code",[e._v("assistant")]),e._v(" LDAP\ngroup (see "),a("a",{attrs:{href:"Browse_LDAP",title:"wikilink"}},[e._v("Browse LDAP")]),e._v(" for how)")]),e._v(" "),a("h2",{attrs:{id:"creating-group-webspace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-group-webspace"}},[e._v("#")]),e._v(" Creating group webspace")]),e._v(" "),a("p",[a("em",[e._v("Same as user webspace, with obvious changes")]),e._v(".")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"General_Administration#Providing_a_user_with_web_space",title:"wikilink"}},[e._v("General\nAdministration")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"adding-a-vhost"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-vhost"}},[e._v("#")]),e._v(" Adding a vhost")]),e._v(" "),a("p",[e._v("There are two ways to add vhosts. One for fussy people and one for lazy\npeople.")]),e._v(" "),a("p",[e._v("The lazy option is to simply add the appropriate CNAME for www in DNS.\nThen requests aimed at "),a("a",{attrs:{href:"http://www.foo.tardis.ed.ac.uk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.foo.tardis.ed.ac.uk/"),a("OutboundLink")],1),e._v(" are proxied to\n"),a("a",{attrs:{href:"http://www.tardis.ed.ac.uk/~foo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.tardis.ed.ac.uk/~foo/"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Fussy people (with scripts that care that the user's seeing the same url\nthe script thinks they're seeing) need the above done, as well as:")]),e._v(" "),a("ul",[a("li",[e._v("An entry in davros:/etc/apache/vhosts/foo . Have a poke around at\nothers in there to look for one that's close to what you want, the\netv one looks fairly minimal. Oh, and remember to use\n"),a("a",{attrs:{href:"RCS",title:"wikilink"}},[e._v("RCS")]),e._v("!")]),e._v(" "),a("li",[e._v("Directories and things in /tardis/www/vhosts/foo/ . Use the same\nstructure here as for single users.")])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v('Advise your group account users to then use "sudo -u '),a("groupaccountname",[e._v('\n-s -H" to use the account.')])],1),e._v(" "),a("p",[a("a",{attrs:{href:"Category:OutOfDate",title:"wikilink"}},[e._v("Category:OutOfDate")]),e._v(" "),a("a",{attrs:{href:"Category:Admin_Documents",title:"wikilink"}},[e._v("Category:Admin\nDocuments")])])])}),[],!1,null,null,null);t.default=r.exports}}]);