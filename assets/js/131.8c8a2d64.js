(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{502:function(e,n,t){"use strict";t.r(n);var s=t(46),o=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"tutorial-4-using-screen-on-tardis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-4-using-screen-on-tardis"}},[e._v("#")]),e._v(" Tutorial 4: Using screen on tardis")]),e._v(" "),t("p",[e._v("Screen is a very useful and powerful program that lets you create and\nmanage multiple virtual sessions independently of how or where you're\nlogged into a machine. If you don't understand what i mean, don't worry")]),e._v(" "),t("ul",[t("li",[e._v("it's simplest to explain it by example. If you create a screen\nsession, it gives you a command prompt again - think of it as a shell\nwithin a program. That's pretty much all there is to it - you can run\nanything as normal in this new shell. The advantage is, you can\ndisconnect your current login and the shell will not terminate -\nwhatever was running in it will still be running, whereas normally if\nyou log out all your child processes are killed.")])]),e._v(" "),t("h2",{attrs:{id:"creating-a-screen-session-and-running-a-program-in-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-screen-session-and-running-a-program-in-it"}},[e._v("#")]),e._v(" Creating a screen session and running a program in it")]),e._v(" "),t("p",[e._v("Now we will create our screen session. Simply type "),t("strong",[e._v("screen")]),e._v(" and you\nwill get a splash screen at which you press space, then your terminal\nwill clear. While in screen your terminal will not beep as before, but\ninstead will flash visually when it receives a beep command from an\napplication. Try pressing backspace a few times on an empty prompt to\nsee this in action.")]),e._v(" "),t("p",[e._v("So now let's run our program - something with constant visual output.\nType "),t("strong",[e._v("top")]),e._v(" and you will get a nice list display of the top (!)\nprocessor intensive processes running on the machine you are logged in\non and various information about them, along with general system stats.\nThese are often interesting to watch 😃 Now simply close your putty\nwindow / kill your ssh connection without logging out. Then log back in,\nas described in tutorial 1. Now you want to get your screen session\nback. Just type "),t("strong",[e._v("screen -r")]),e._v(" to get it back (-r for retreive)...\ncouldn't be simpler! You now have your top window back. Press "),t("strong",[e._v("q")]),e._v(" to\nexit from top and type "),t("strong",[e._v("exit")]),e._v(" or "),t("strong",[e._v("logout")]),e._v(" to close the screen\nsession and return to your normal prompt.")]),e._v(" "),t("h2",{attrs:{id:"running-multiple-screen-sessions-and-different-ways-of-attaching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-multiple-screen-sessions-and-different-ways-of-attaching"}},[e._v("#")]),e._v(" Running multiple screen sessions and different ways of attaching")]),e._v(" "),t("p",[e._v("One useful feature is our ability to name a screen session to be able to\nidentify it later. Create a new screen session and run top in it again,\nbut this time we name it using -S (case is important): '''")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("screen -S mytopsesh\ntop\n")])])]),t("p",[t("strong",[e._v("Now we can detach the active screen session and leave it to run in the\nbackground by pressing")]),e._v("^a-d**(that means ctrl-a followed by d). To tell\nscreen you want to send it a command, rather than sending it to any\nprogram you have running, you press ^a to let it know you're talking to\nit, then follow it with one of the command codes it recognises. For more\ninformation read"),t("strong",[e._v("man screen")]),e._v(". So now you've detached your first screen\nsession, let's create a second one to run something different in - say\nan editor session you want to leave running.**")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("screen -S myothersesh\nnano\n")])])]),t("p",[t("strong",[e._v("Then detach it again with")]),e._v("^a-d"),t("strong",[e._v("as before. Now if you type")]),e._v("screen\n-r"),t("strong",[e._v("you will get a list of possible screen sessions to reattach, with\ntheir number and name - you can recall them by name using")]),e._v("screen -r\nmytopsesh"),t("strong",[e._v("or just by number, which you have to do if you didn't name\nthem when you created them. So now you have multiple interactive\nsessions running accessable from one terminal window, which you can\nclose without them terminating. Now open a second putty connection\nalongside the first, as described in tutorial 1 again. From here we can\nreattach any of the screen sessions we created on the other connection.\nType")]),e._v("screen -r myothersesh"),t("strong",[e._v("and you will see the editor again. Now\ntype")]),e._v("screen -rd myothersesh"),t("strong",[e._v("on your first login session and the editor\nscreen detaches from where you just attached it and comes back here\nagain (the")]),e._v("-d"),t("strong",[e._v("detaches if necessary). And to finish off here's\nsomething cool to try: Type")]),e._v("screen -rx myothersesh''' on the second\nlogin box (the one where screen isn't attached currently). This\nreattaches the screen session as usual, but WITHOUT detaching it in the\nfirst location. Now try typing someting in the editor in one of the\nputty sessions, and then the other. Isn't screen cool?")]),e._v(" "),t("p",[t("strong",[e._v("Next: "),t("a",{attrs:{href:"Tardis_Beginner_Tutorials/5",title:"wikilink"}},[e._v("irssi with screen for\nIRC")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);