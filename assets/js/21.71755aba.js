(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{394:function(e,t,a){"use strict";a.r(t);var n=a(46),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("This tutorial shows you how to use "),a("em",[e._v("Apache Directory Studio")]),e._v(" to browse\n"),a("a",{attrs:{href:"LDAP",title:"wikilink"}},[e._v("LDAP")]),e._v(". Only system administrators will have access to\nthe credentials required to get through a part of this tutorial. This\ntutorial also assumes you have SSH all set up.")]),e._v(" "),a("p",[a("strong",[e._v("TOC")])]),e._v(" "),a("h2",{attrs:{id:"getting-the-software"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-software"}},[e._v("#")]),e._v(" Getting the software")]),e._v(" "),a("p",[e._v("First, you'll need to grab "),a("em",[e._v("Apache Directory Studio")]),e._v(" from "),a("a",{attrs:{href:"https://directory.apache.org/studio/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache\nDirectory website"),a("OutboundLink")],1),e._v(".\nIt's available for Linux, Windows, and macOS, so don't worry. This\ntutorial uses macOS Sierra but it should be fairly straightforward for\nother platforms.")]),e._v(" "),a("p",[e._v("macOS tip, if you have Homebrew, just run this command:\n"),a("code",[e._v("brew install apache-directory-studio")])]),e._v(" "),a("p",[e._v("Once you've got that installed (if you're a macOS user, you may run\nacross "),a("a",{attrs:{href:"https://support.apple.com/kb/PH25088?locale=en_GB",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),a("OutboundLink")],1),e._v("),\nrun the software.")]),e._v(" "),a("h2",{attrs:{id:"finding-the-main-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finding-the-main-interface"}},[e._v("#")]),e._v(" Finding the main interface")]),e._v(" "),a("p",[e._v("Right now you should be presented with the below welcome screen.")]),e._v(" "),a("figure",[a("img",{attrs:{src:"LDAP_Welcome.png",title:"LDAP_Welcome.png",width:"500",alt:"LDAP_Welcome.png"}}),a("figcaption",{attrs:{"aria-hidden":"true"}},[e._v("LDAP_Welcome.png")])]),e._v(" "),a("p",[e._v("Hit the close button next to the "),a("strong",[e._v("Welcome")]),e._v(" tab (highlighted above) to\nget access to the main interface.")]),e._v(" "),a("figure",[a("img",{attrs:{src:"LDAP_Main_Interface.png",title:"LDAP_Main_Interface.png",width:"500",alt:"LDAP_Main_Interface.png"}}),a("figcaption",{attrs:{"aria-hidden":"true"}},[e._v("LDAP_Main_Interface.png")])]),e._v(" "),a("h2",{attrs:{id:"adding-a-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-connection"}},[e._v("#")]),e._v(" Adding a connection")]),e._v(" "),a("p",[e._v("Go to File -> New, and then navigate to the "),a("em",[e._v("LDAP Connection")]),e._v(" wizard. It\nshould be filed under "),a("em",[e._v("LDAP Browser")]),e._v(".")]),e._v(" "),a("figure",[a("img",{attrs:{src:"LDAP_Select_Wizard.png",title:"LDAP_Select_Wizard.png",width:"500",alt:"LDAP_Select_Wizard.png"}}),a("figcaption",{attrs:{"aria-hidden":"true"}},[e._v("LDAP_Select_Wizard.png")])]),e._v(" "),a("p",[e._v("Navigating to LDAP Connection will bring us to the below screen:")]),e._v(" "),a("figure",[a("img",{attrs:{src:"LDAP_New_Connection.png",title:"LDAP_New_Connection.png",width:"500",alt:"LDAP_New_Connection.png"}}),a("figcaption",{attrs:{"aria-hidden":"true"}},[e._v("LDAP_New_Connection.png")])]),e._v(" "),a("h3",{attrs:{id:"setting-the-network-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-network-parameters"}},[e._v("#")]),e._v(" Setting the Network Parameters")]),e._v(" "),a("p",[e._v("Set the name to "),a("em",[e._v("Tardis localhost:1389")]),e._v(". You may be wondering, why are\nwe writing "),a("em",[e._v("localhost")]),e._v("? Isn't the LDAP server on Tardis?")]),e._v(" "),a("p",[e._v("Yes, the LDAP server is on Tardis, but it is behind the firewall. We'll\nbe using SSH port forwarding to get a connection through to the LDAP VM\non the Tardis network. Run this command to start SSH port forwarding.")]),e._v(" "),a("p",[a("code",[e._v("ssh -NL 1389:")]),a("a",{attrs:{href:"ldap:389"}},[a("code",[e._v("ldap:389")])]),a("code",[e._v("ssh.tardis.ed.ac.uk")])]),e._v(" "),a("ul",[a("li",[a("em",[e._v("-N")]),e._v(": This means we do not want execute a remote command. This is\nuseful for just forwarding ports, since we don't want to also access\nthe machine using regular SSH.")]),e._v(" "),a("li",[a("em",[e._v("-L 1389:"),a("a",{attrs:{href:"ldap:389"}},[e._v("ldap:389")])]),e._v(": This means we want all traffic on the port\n"),a("em",[e._v("1389")]),e._v(" of localhost to go to the "),a("em",[a("a",{attrs:{href:"ldap:389"}},[e._v("ldap:389")])]),e._v(" address on the remote\nserver.")])]),e._v(" "),a("p",[e._v("The reason we use 1389 locally instead of 389, is that all ports under\n1024 require "),a("strong",[e._v("sudo")]),e._v(" to be used.")]),e._v(" "),a("p",[e._v("Once you run the command, depending on how you have things set up, you\nwill be prompted for a password. You'll then receive the welcome\nmessage, and then nothing will happen. This is good.")]),e._v(" "),a("p",[e._v("On the wizard, for the "),a("strong",[e._v("Hostname")]),e._v(", type in "),a("em",[e._v("localhost")]),e._v(". For the\n"),a("strong",[e._v("Port")]),e._v(", type in "),a("em",[e._v("1389")]),e._v(". This is what your screen should look like:")]),e._v(" "),a("figure",[a("img",{attrs:{src:"LDAP_New_Connection_Filled.png",title:"LDAP_New_Connection_Filled.png",width:"500",alt:"LDAP_New_Connection_Filled.png"}}),a("figcaption",{attrs:{"aria-hidden":"true"}},[e._v("LDAP_New_Connection_Filled.png")])]),e._v(" "),a("p",[e._v("Leave the other options as default, and press Next.")]),e._v(" "),a("h3",{attrs:{id:"get-the-ldap-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-ldap-password"}},[e._v("#")]),e._v(" Get the LDAP password")]),e._v(" "),a("p",[e._v("There are two ways to get the password and binddn.")]),e._v(" "),a("h4",{attrs:{id:"way-1-get-password-from-ldap-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#way-1-get-password-from-ldap-server"}},[e._v("#")]),e._v(" Way 1: Get Password From LDAP Server")]),e._v(" "),a("ol",[a("li",[e._v("SSH to the LDAP server: "),a("code",[e._v("ssh root@jellybaby")])]),e._v(" "),a("li",[e._v("Start reasding the LDAP config file: "),a("code",[e._v("less /etc/ldap/slapd.conf")])]),e._v(" "),a("li",[e._v("Scroll down to the bottom (use page down / arrow keys)")]),e._v(" "),a("li",[e._v("Find "),a("code",[e._v('rootpw "XXXXXXXXXXX"')]),e._v(" to get the password, and "),a("code",[e._v("rootdn")]),e._v(" for\nthe dn")])]),e._v(" "),a("h4",{attrs:{id:"way-2-get-password-from-shell-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#way-2-get-password-from-shell-server"}},[e._v("#")]),e._v(" Way 2: Get Password From Shell Server")]),e._v(" "),a("p",[e._v("This works if you already have root access on the shell server.")]),e._v(" "),a("p",[e._v("We'll be grabbing these details from the LDAP config file on Fez. Open\nup SSH, and read the "),a("code",[e._v("/etc/tardis/ldap.conf")]),e._v(" file. You will need root\nprivileges to do this, use "),a("code",[e._v("sudo cat")]),e._v(".")]),e._v(" "),a("p",[e._v("The file has the structure of key/value pairs, as well as categories. It\nshould look a little bit like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("[server]\n...\nbinddn=some=stuff,exists=here\nbindpw=and,the,secure,password,here\n...\n")])])]),a("ul",[a("li",[a("code",[e._v("[server]")]),e._v(" is the server category")]),e._v(" "),a("li",[a("code",[e._v("binddn")]),e._v(" has the value "),a("code",[e._v("some=stuff,exists=here")])]),e._v(" "),a("li",[a("code",[e._v("bindpw")]),e._v(" has the value "),a("code",[e._v("and,the,secure,password,here")])])]),e._v(" "),a("p",[e._v("The ellipsis just represents that there may be other key/value pairs in\nthe file.")]),e._v(" "),a("h3",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),a("p",[e._v("This screen requires us to provide the details for Simple\nAuthentication. On the wizard fill in "),a("strong",[e._v("Bind DN or user")]),e._v(" field with the\n"),a("code",[e._v("binddn")]),e._v(" value, and fill the password field with "),a("code",[e._v("bindpw")]),e._v(" value. Smack\n"),a("strong",[e._v("Check Authentication")]),e._v(" and make sure everything works fine.")]),e._v(" "),a("figure",[a("img",{attrs:{src:"LDAP_Authentication.png",title:"LDAP_Authentication.png",width:"500",alt:"LDAP_Authentication.png"}}),a("figcaption",{attrs:{"aria-hidden":"true"}},[e._v("LDAP_Authentication.png")])]),e._v(" "),a("p",[e._v("Press Finish, and you should be in!")]),e._v(" "),a("figure",[a("img",{attrs:{src:"LDAP_Browsing.png",title:"LDAP_Browsing.png",width:"800",alt:"LDAP_Browsing.png"}}),a("figcaption",{attrs:{"aria-hidden":"true"}},[e._v("LDAP_Browsing.png")])]),e._v(" "),a("h2",{attrs:{id:"connecting-again"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-again"}},[e._v("#")]),e._v(" Connecting again")]),e._v(" "),a("p",[e._v("All of that was just a one time setup. In the future, when you start\nApache Directory Studio, you just need to run\n"),a("code",[e._v("ssh -NL 1389:")]),a("a",{attrs:{href:"ldap:389"}},[a("code",[e._v("ldap:389")])]),a("code",[e._v("ssh.tardis.ed.ac.uk")]),e._v(", and then\nselect the connection in the bottom-left hand side of the main window.")]),e._v(" "),a("figure",[a("img",{attrs:{src:"LDAP_Connecting_Again.png",title:"LDAP_Connecting_Again.png",width:"250",alt:"LDAP_Connecting_Again.png"}}),a("figcaption",{attrs:{"aria-hidden":"true"}},[e._v("LDAP_Connecting_Again.png")])]),e._v(" "),a("h2",{attrs:{id:"tips-tricks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips-tricks"}},[e._v("#")]),e._v(" Tips & Tricks")]),e._v(" "),a("ul",[a("li",[e._v("Clear groups cache using "),a("em",[e._v("sudo nscd --invalidate=group")])])]),e._v(" "),a("p",[a("a",{attrs:{href:"Category:Tutorials",title:"wikilink"}},[e._v("Category:Tutorials")])])])}),[],!1,null,null,null);t.default=r.exports}}]);