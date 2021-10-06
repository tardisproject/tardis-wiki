I found
[this](http://www.debian-administration.org/articles/585#NSS_configuration)
guide to be very useful as it lists answers to the debconf questions.
The only difference between the recommended configuration and tardis' is
that "Local crypt to use when changing passwords." should be 'exop'.

## Getting user information from [LDAP](LDAP "wikilink")

The `libnss-ldap` package handles fetching account information from
LDAP. Also make sure that `nscd` is installed, otherwise [bad
things](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=190072) may
happen.

To tell `libnss-ldap` where to look, you need to edit the
`/etc/libnss-ldap.conf`. At the very least, you'll need to give the host
and base (`dc=tardis,dc=ed,dc=ac,dc=uk`).

To tell libc to use `libnss-ldap`, you need to amend the appropriate
lines in `/etc/nsswitch.conf`:

    passwd:         files ldap
    group:          files ldap
    shadow:         files ldap

The other databases are best left alone; we don't bother putting host
information or such like in LDAP because we don't see much benefit.

The `getent` program is useful for testing.

## Authenticating with [LDAP](LDAP "wikilink")

The `libpam-ldap` package is used for authentication against LDAP. You
need to configure `/etc/pam_ldap.conf` along the same lines as
`/etc/libnss_ldap.conf`. A typical example is:

    host piper
    base dc=tardis,dc=ed,dc=ac,dc=uk
    rootbinddn cn=admin,dc=tardis,dc=ed,dc=ac,dc=uk
    ldap_version 3

    # NSS lookups need to be restricted to the appropriate parts of the tree.
    # If other lookups are added to /etc/nsswitch.conf, they need to be put
    # here too.
    nss_base_passwd ou=People,dc=tardis,dc=ed,dc=ac,dc=uk
    nss_base_group   ou=Group,dc=tardis,dc=ed,dc=ac,dc=uk
    nss_base_shadow ou=People,dc=tardis,dc=ed,dc=ac,dc=uk

    # Use funky generic LDAP password changing.
    pam_password exop

PAM needs to be told to use `libpam-ldap`, as well as the normal
authentication for `root`. Canonical `/etc/pam.d/common-auth`:

    # ** Use trick from /usr/share/doc/libpam-ldap/README.Debian
    #
    auth    [success=1 default=ignore]      pam_unix.so nullok_secure
    auth    required                        pam_ldap.so use_first_pass
    auth    required                        pam_permit.so

Note the `use_first_pass` option. Without it logins will ask for a
password for pam_unix, then one for pam_ldap, and so on, causing every
other attempt to enter your password to fail even when you get it right.
You need to set up `/etc/pam.d/common-account` in the same way.

## For Red Hat-based Distros

This guide was tested with Fedora Server 21 (on
[Valiant](Valiant "wikilink")).

-   Run \`authconfig-tui\` (if not installed, \`yum install -y
    authconfig\`
-   Check 'Use LDAP' and 'Use LDAP Authentication'. Make sure 'Local
    authorization is sufficient' is also checked.
-   Leave \`Use TLS\` unchecked.
-   Set server to \`ldap://ldap/\`
-   Set Base DN to \`dc=tardis,dc=ed,dc=ac,dc=uk\`

Easy!

[Category:OutOfDate](Category:OutOfDate "wikilink")
[Category:Admin_Documents](Category:Admin_Documents "wikilink")