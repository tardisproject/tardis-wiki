(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{528:function(e,t,r){"use strict";r.r(t);var a=r(46),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[r("em",[r("a",{attrs:{href:"Web_Service/Admin",title:"wikilink"}},[e._v("Admin Information")])])]),e._v(" "),r("h2",{attrs:{id:"usage-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage-information"}},[e._v("#")]),e._v(" Usage Information")]),e._v(" "),r("p",[e._v("The web service currently runs on "),r("a",{attrs:{href:"Toclafane",title:"wikilink"}},[e._v("Toclafane")]),e._v(",\nwhich also hosts the disks with the web content. You can find your\nwebspace at: "),r("code",[e._v("/var/autofs/www/USERNAME/")]),e._v(", from Fez. If this directory\ndoes not exist, please "),r("a",{attrs:{href:"Contact",title:"wikilink"}},[e._v("contact an Admin")]),e._v(".")]),e._v(" "),r("p",[e._v("This will contain the following directories: "),r("code",[e._v("pages/")]),e._v(" and "),r("code",[e._v("cgi-bin/")]),e._v("\n(though cgi-bin is now on-request). The pages/ directory may be used to\nserve static content, and PHP. Most common libraries are already\ninstalled, but if you require a particular library please speak to an\nAdmin.")]),e._v(" "),r("p",[e._v("Pages can be externally accessed via\n"),r("a",{attrs:{href:"http://www.tardis.ed.ac.uk/~USERNAME/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.tardis.ed.ac.uk/~USERNAME/"),r("OutboundLink")],1),e._v(". CGI scripts can be found\n"),r("a",{attrs:{href:"http://www.tardis.ed.ac.uk/~USERNAME/cgi-bin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.tardis.ed.ac.uk/~USERNAME/cgi-bin/"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("If you are just interested in hosting static web pages, there is a\ndirectory public_html in your home directory in Fez. Putting regular\nHTML files here will make them show up in\n"),r("a",{attrs:{href:"http://www.tardis.ed.ac.uk/~USERNAME/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.tardis.ed.ac.uk/~USERNAME/"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"note-on-installing-web-applications"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#note-on-installing-web-applications"}},[e._v("#")]),e._v(" Note on installing web applications")]),e._v(" "),r("p",[e._v("Tardis is frequently crawled by web-indexing services and hence sites\nhosted on Tardis are very visible to the outside world, often\nunexpectedly. Unmaintained forums, galleries, blogs, etc. are frequent\ntargets for spammers.")]),e._v(" "),r("p",[e._v("If you install a web-facing applicaions (eg. Gallery, etc), you\n"),r("strong",[e._v("MUST")]),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("Keep all web-facing applications on Tardis updated with the latest\nsecurity patches. Subscribe to the relevant security mailing lists.")]),e._v(" "),r("li",[e._v("Disable anonymous user input or use effective CAPTCHAs (A good\noption is "),r("a",{attrs:{href:"http://recaptcha.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("reCAPTCHA"),r("OutboundLink")],1),e._v(").")])]),e._v(" "),r("p",[e._v("While we will disable insecure applications if we find them, we cannot\nguarantee to. Security of Tardis services is the responsibility of\n"),r("strong",[e._v("all")]),e._v(" of the project members, and the existence of insecure\napplications may jeopardise the project's continued existence.")]),e._v(" "),r("h2",{attrs:{id:"supported-software"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-software"}},[e._v("#")]),e._v(" Supported Software")]),e._v(" "),r("h3",{attrs:{id:"php"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[e._v("#")]),e._v(" PHP")]),e._v(" "),r("p",[e._v("Tardis runs PHP7.3, and we can install extensions if you require them.")]),e._v(" "),r("h3",{attrs:{id:"python"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[e._v("#")]),e._v(" Python")]),e._v(" "),r("p",[e._v("There are two options for running Python scripts, "),r("strong",[e._v("mod_python")]),e._v(" and\n"),r("strong",[e._v("mod_wsgi")]),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"mod-python"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mod-python"}},[e._v("#")]),e._v(" mod_python")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.modpython.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mod_python"),r("OutboundLink")],1),e._v(" is the original python script\nhosting option. It supports both a simple "),r("a",{attrs:{href:"http://www.modpython.org/live/current/doc-html/hand-pub.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Publisher\nhandler"),r("OutboundLink")],1),e._v(",\na "),r("a",{attrs:{href:"http://www.modpython.org/live/current/doc-html/hand-psp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("PSP\nhandler"),r("OutboundLink")],1),e._v("\n(like PHP or ASP), "),r("a",{attrs:{href:"http://www.modpython.org/live/current/doc-html/hand-cgi.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CGI compatibility\nhandler"),r("OutboundLink")],1),e._v("\nas well as being able to write your own handlers.")]),e._v(" "),r("p",[e._v("To enable the Publisher hander add the following to a "),r("code",[e._v(".htaccess")]),e._v(" file:")]),e._v(" "),r("p",[r("code",[e._v("AddHandler mod_python .py")]),e._v(" "),r("code",[e._v("PythonHandler mod_python.publisher")])]),e._v(" "),r("p",[e._v("To enable\n"),r("a",{attrs:{href:"http://www.modpython.org/live/current/doc-html/pyapi-psp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("PSP"),r("OutboundLink")],1),e._v("\ninterpreting of files add the following to a "),r("code",[e._v(".htaccess")]),e._v(" file:")]),e._v(" "),r("p",[r("code",[e._v("AddHandler mod_python .psp")]),e._v(" "),r("code",[e._v("PythonHandler mod_python.psp")])]),e._v(" "),r("h4",{attrs:{id:"mod-wsgi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mod-wsgi"}},[e._v("#")]),e._v(" mod_wsgi")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://code.google.com/p/modwsgi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mod_wsgi"),r("OutboundLink")],1),e._v(" is designed to be a\ngeneric interface for running python based web applications such as\n"),r("a",{attrs:{href:"http://webpy.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpy"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"http://www.djangoproject.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("django"),r("OutboundLink")],1),e._v(" or\neven hand written applictions. To enable interpreting of wsgi files add\nthe following to a "),r("code",[e._v(".htaccess")]),e._v(" file")]),e._v(" "),r("p",[r("code",[e._v("Options +ExecCGI")]),e._v(" "),r("code",[e._v("AddHandler wsgi-script .wsgi")])]),e._v(" "),r("h3",{attrs:{id:"ruby"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ruby"}},[e._v("#")]),e._v(" Ruby")]),e._v(" "),r("p",[e._v("Ruby scripts can be run using "),r("strong",[e._v("mod_ruby")]),e._v(". To enable interpreting of\nfiles add the following to a "),r("code",[e._v(".htaccess")]),e._v(" file:")]),e._v(" "),r("p",[r("code",[e._v("Options +ExecCGI")]),e._v(" "),r("code",[e._v("RubyRequire apache/ruby-run")]),e._v(" "),r("code",[e._v("AddHandler ruby-object rbx")]),e._v(" "),r("code",[e._v("RubyHandler Apache::RubyRun.instance")])]),e._v(" "),r("p",[e._v("All files that end with .rbx will now be interpreted with Ruby. "),r("strong",[e._v("NB:")]),e._v("\nThe .rbx file must have the Execute bit set or else a 403 Forbidden\nerror will occur.")]),e._v(" "),r("h3",{attrs:{id:"databases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#databases"}},[e._v("#")]),e._v(" Databases")]),e._v(" "),r("p",[e._v("MySQL and PostgreSQL are available. See: "),r("a",{attrs:{href:"Database_Service",title:"wikilink"}},[e._v("Database\nService")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"web-applications"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#web-applications"}},[e._v("#")]),e._v(" Web Applications")]),e._v(" "),r("p",[e._v("Currently there are some packages which are installed site-wide on the\nwebserver which you should be able to make use of. For these, see their\nindividual pages for details. Any other popular Webapps should probably\nbe manage globally if at all possible.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"Wiki_Service",title:"wikilink"}},[e._v("Wiki Service")])])]),e._v(" "),r("h2",{attrs:{id:"useful-tricks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#useful-tricks"}},[e._v("#")]),e._v(" Useful Tricks")]),e._v(" "),r("p",[e._v("If you're lazy and don't like case sensitivity you can add this to your\n"),r("code",[e._v(".htaccess")]),e._v(" file:")]),e._v(" "),r("p",[r("code",[e._v("# Be lenient about case")]),e._v(" "),r("code",[e._v("CheckSpelling On")]),e._v(" "),r("code",[e._v("CheckCaseOnly On")])]),e._v(" "),r("p",[e._v("Redirecting a URL to a new location:")]),e._v(" "),r("p",[r("code",[e._v("Redirect /~")]),r("var",[r("code",[e._v("username")])]),r("code",[e._v("/oldurl")]),r("a",{attrs:{href:"http://www.tardis.ed.ac.uk/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("http://www.tardis.ed.ac.uk/")]),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"category:Services",title:"wikilink"}},[e._v("category:Services")]),e._v(" "),r("a",{attrs:{href:"category:ExternalServices",title:"wikilink"}},[e._v("category:ExternalServices")])]),e._v(" "),r("p",[r("a",{attrs:{href:"Category:OutOfDate",title:"wikilink"}},[e._v("Category:OutOfDate")])])])}),[],!1,null,null,null);t.default=n.exports}}]);