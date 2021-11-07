(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{505:function(e,t,o){"use strict";o.r(t);var n=o(46),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"tutorial-6-using-nano-to-edit-text-and-configuration-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-6-using-nano-to-edit-text-and-configuration-files"}},[e._v("#")]),e._v(" Tutorial 6: Using nano to edit text and configuration files")]),e._v(" "),o("p",[e._v("There are many text editors available for linux, the most often used\nones being "),o("strong",[e._v("emacs")]),e._v(", "),o("strong",[e._v("vi")]),e._v(" or "),o("strong",[e._v("vim")]),e._v(", and "),o("strong",[e._v("nano")]),e._v(". Of these, nano is\nby far the simplest to learn, with functionality not greatly exceeding\nthat of windows notepad - this makes it ideal as your first editor. If\nyou are already well versed in the use of emacs, vi, or anything else\nmore complicated, feel free to use that instead. Using nano is\nexceedingly simple - all controls are performed by ctrl-key\ncombinations, listed at the bottom of the page. So for instance to exit\nyou press "),o("strong",[e._v("^X")]),e._v(" (which means control and x). Whenever you want to find\nout how to do something that isn't listed at the bottom of the page (for\ninstance select text), press "),o("strong",[e._v("^G")]),e._v(" to get a helpful listing of\ncommands.")]),e._v(" "),o("p",[e._v('Now you are going to modify your ".profile". This is a file in your\nhomedir that gets executed when you log in, and is used for setting\nthings like environment variables, paths and the way the prompt looks.\nFirst, type '),o("strong",[e._v("ls ~/.profile")]),e._v('. If it says "no such file or directory",\nyou will need to copy the default one - do '),o("strong",[e._v("cp /etc/profile\n~/.profile")]),e._v(". Now open it with "),o("strong",[e._v("nano ~/.profile")]),e._v(". To begin with,\nlet's add some aliases to make using some common commands easier, and\nimprove the look of things. An alias is simply a string the shell will\nrecognise on the commandline and replace with another preprogrammed\nstring - usually used to shorten long commonly used commands. You can\ncreate them yourself on the commandline with "),o("strong",[e._v("alias")]),e._v(" - check out the\nman page. For now we'll add some to the .profile, so they'll be executed\nevery time you log in. Scroll to the bottom of the file using your arrow\nkeys or page down and add the following lines: '''")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("alias rm='rm -iv'\nalias cp='cp -iv'\nalias mv='mv -iv'\n")])])]),o("p",[o("strong",[e._v("The above replace the usual remove, copy and move commands with\naliases to them plus some additional flags: -"),o("strong",[e._v("i")]),e._v("makes it ask\nyou")]),e._v("i"),o("strong",[e._v("nteractively if you want to overwrite files (whereas if files\nwere going to be overwritten, it would happen automatically by default),\nand")]),e._v("-v"),o("strong",[e._v("makes the output more")]),e._v("v"),o("strong",[e._v("erbose, so you can see what it's\nactually doing. Now let's add some aliases to make ls easier to use, and\nthe output more attractive. Add the following lines to the file:")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("alias ls='ls -a --color'\nalias ll='ls -alh --color'\n")])])]),o("p",[o("strong",[e._v("The first tells ls to output in colour, and to show")]),e._v("a"),o("strong",[e._v('ll files\n(including hidden ones beginning with "."). The second creates a new\nalias, that you can now use as a command, to make it easier to do')]),e._v("ls\n-l"),o("strong",[e._v("like we did in tutorial 2 to see file sizes and their permissions.\nThe")]),e._v("-h"),o("strong",[e._v("flag makes the output")]),e._v("h'''uman readable - i.e. the file sizes\nare shown in megabytes and kilobytes rather than just a long number of\nbytes. You'll notice it's possible to string together multiple\ncommandline flags prefixed by a single dash - another timesaving feature\nof bash.")]),e._v(" "),o("p",[e._v("Now let's save our file by pressing "),o("strong",[e._v("^O")]),e._v(" (which means ctrl and O, as\nyou should know by now). It will ask you what filename to write to -\njust press enter to accept the default one. If for some reason the\nfilename is not .profile, type that. Then press ^X to exit. If you\nforgot to save, you would be prompted to save when you pressed ^X\nanyway. Congratulations, you just successfully edited your first file\nunder linux! Now simply log out (using "),o("strong",[e._v("logout")]),e._v(" or "),o("strong",[e._v("exit")]),e._v(")and log\nback in as described in tutorial 1. Now try typing "),o("strong",[e._v("ls")]),e._v(" and "),o("strong",[e._v("ll")]),e._v(' and\nsee the pretty colours, and notice that hidden files are now shown!\nUnder linux you can make a file hidden by changing its name to start\nwith ".", such as ".profile". Such files are not shown by default, but\nare with the '),o("strong",[e._v("-a")]),e._v(" flag - but now you will always see them.")]),e._v(" "),o("p",[o("strong",[e._v("Next: "),o("a",{attrs:{href:"Tardis_Beginner_Tutorials/7",title:"wikilink"}},[e._v("Filesystem Tutorial")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);