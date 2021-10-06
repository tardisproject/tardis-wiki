*[Admin Information](Web_Service/Admin "wikilink")*

## Usage Information

The web service currently runs on [Toclafane](Toclafane "wikilink"),
which also hosts the disks with the web content. You can find your
webspace at: `/var/autofs/www/USERNAME/`, from Fez. If this directory
does not exist, please [contact an Admin](Contact "wikilink").

This will contain the following directories: `pages/` and `cgi-bin/`
(though cgi-bin is now on-request). The pages/ directory may be used to
serve static content, and PHP. Most common libraries are already
installed, but if you require a particular library please speak to an
Admin.

Pages can be externally accessed via
<http://www.tardis.ed.ac.uk/~USERNAME/>. CGI scripts can be found
<http://www.tardis.ed.ac.uk/~USERNAME/cgi-bin/>.

If you are just interested in hosting static web pages, there is a
directory public_html in your home directory in Fez. Putting regular
HTML files here will make them show up in
<http://www.tardis.ed.ac.uk/~USERNAME/>.

### Note on installing web applications

Tardis is frequently crawled by web-indexing services and hence sites
hosted on Tardis are very visible to the outside world, often
unexpectedly. Unmaintained forums, galleries, blogs, etc. are frequent
targets for spammers.

If you install a web-facing applicaions (eg. Gallery, etc), you
**MUST**:

-   Keep all web-facing applications on Tardis updated with the latest
    security patches. Subscribe to the relevant security mailing lists.
-   Disable anonymous user input or use effective CAPTCHAs (A good
    option is [reCAPTCHA](http://recaptcha.net/)).

While we will disable insecure applications if we find them, we cannot
guarantee to. Security of Tardis services is the responsibility of
**all** of the project members, and the existence of insecure
applications may jeopardise the project's continued existence.

## Supported Software

### PHP

Tardis runs PHP7.3, and we can install extensions if you require them.

### Python

There are two options for running Python scripts, **mod_python** and
**mod_wsgi**.

#### mod_python

[mod_python](http://www.modpython.org/) is the original python script
hosting option. It supports both a simple [Publisher
handler](http://www.modpython.org/live/current/doc-html/hand-pub.html),
a [PSP
handler](http://www.modpython.org/live/current/doc-html/hand-psp.html)
(like PHP or ASP), [CGI compatibility
handler](http://www.modpython.org/live/current/doc-html/hand-cgi.html)
as well as being able to write your own handlers.

To enable the Publisher hander add the following to a `.htaccess` file:

`AddHandler mod_python .py`
`PythonHandler mod_python.publisher`

To enable
[PSP](http://www.modpython.org/live/current/doc-html/pyapi-psp.html)
interpreting of files add the following to a `.htaccess` file:

`AddHandler mod_python .psp`
`PythonHandler mod_python.psp`

#### mod_wsgi

[mod_wsgi](http://code.google.com/p/modwsgi/) is designed to be a
generic interface for running python based web applications such as
[webpy](http://webpy.org/), [django](http://www.djangoproject.com/) or
even hand written applictions. To enable interpreting of wsgi files add
the following to a `.htaccess` file

`Options +ExecCGI`
`AddHandler wsgi-script .wsgi`

### Ruby

Ruby scripts can be run using **mod_ruby**. To enable interpreting of
files add the following to a `.htaccess` file:

`Options +ExecCGI`
`RubyRequire apache/ruby-run`
`AddHandler ruby-object rbx`
`RubyHandler Apache::RubyRun.instance`

All files that end with .rbx will now be interpreted with Ruby. **NB:**
The .rbx file must have the Execute bit set or else a 403 Forbidden
error will occur.

### Databases

MySQL and PostgreSQL are available. See: [Database
Service](Database_Service "wikilink").

### Web Applications

Currently there are some packages which are installed site-wide on the
webserver which you should be able to make use of. For these, see their
individual pages for details. Any other popular Webapps should probably
be manage globally if at all possible.

-   [Wiki Service](Wiki_Service "wikilink")

## Useful Tricks

If you're lazy and don't like case sensitivity you can add this to your
`.htaccess` file:

`# Be lenient about case`
`CheckSpelling On`
`CheckCaseOnly On`

Redirecting a URL to a new location:

`Redirect /~`<var>`username`</var>`/oldurl `[`http://www.tardis.ed.ac.uk/`](http://www.tardis.ed.ac.uk/)

[category:Services](category:Services "wikilink")
[category:ExternalServices](category:ExternalServices "wikilink")

[Category:OutOfDate](Category:OutOfDate "wikilink")