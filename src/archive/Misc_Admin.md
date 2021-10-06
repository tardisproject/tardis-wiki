## Useful Stuff

This page is for keeping track of those little commands which you can
never remember

### Sun administration

Resetting security mode on the ultra's proms from debian:

    eeprom security-mode = none

### [LDAP](LDAP "wikilink")

List all users in [LDAP](LDAP "wikilink"):

    ldapsearch -x uid='*' | grep ^uid: | awk '{print $2}' > users.txt

### [RCS](RCS "wikilink")

Check out and lock a file for editing with [RCS](RCS "wikilink"), edit
it, and check it in again:

    co -l <file>
    editor <file>
    ci -w <your_user_name> -u <file>

[category:Admin Documents](category:Admin_Documents "wikilink")

### Programs ignore terminal resizing

When sshd is started, it uses the signal mask from the shell that starts
it. In particular, if the shell masks out window size changes (SIGWINCH)
then sshd, and everything started by an ssh session, ignores them.
Solution: restart sshd using `~bacam/unwinch /etc/init.d/sshd restart`.