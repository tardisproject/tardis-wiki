Have the root password but `sudo` doesn't work? Try this.

1.  Follow [Browse LDAP](Browse_LDAP "wikilink")
2.  Find the `assistants` group
3.  Add your username there
4.  LDAP groups are cached, so run `sudo nscd --invalidate=group` on fez
5.  `sudo` should now work

[Category:Tutorials](Category:Tutorials "wikilink")