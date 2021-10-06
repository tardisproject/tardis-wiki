Ok, so apparently some people haven't used apt before. This here page is
a repository of tidbits of information that might be useful.

## Basics

To update the package repositories (for security purposes or whatnot):

`apt-get update`

To upgrade everything

`apt-get upgrade`

To install "foopackage", or upgrade it to the latest version:

`apt-get install foopackage`

## Other stuff

To prevent a package from being upgraded (for example we use this with
apache, as we need to maintain our own version):

`echo foopackage hold | dpkg --set-selections`
`apt-get upgrade # or whatever`

To see the changelogs for a package:

`aptitude changelog foopackage`

To check the current version of a package, and the version that apt
wants to install:

`apt-cache policy foopackage`

\[\[category:Admin Documents\]