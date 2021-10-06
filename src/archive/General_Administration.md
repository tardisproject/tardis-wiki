## Adding a new user account

    foo@fez:~$ sudo tardis adduser [username]

The tardis adduser script lives in git. The script prompts you to enter
the details straight off the application form, please note that
usernames should be no greater than 8 characters. (That said, we already
have some longer user names; at least try to ensure that the first 8
characters are unique.) Punctuation should be avoided --- for example,
the wiki has problems with underscores.

With the account added, sysmans will be informed, and the user will be
emailed their username and password and a link to a webpage on how to
login.

Don't worry about [allusers](allusers "wikilink").

## Removing a user

<strong>Beware:</strong> We have not removed many accounts before, so
take care and pay attention to what the script is doing. If you are at
all uncertain ask someone else to do it.

On gallifrey, use the `tardis-removeuser` script, as root.

I have no idea if this still works -joe

## Providing a user with web space

This now seems to be done by *tardis-adduser*. Thanks Bacam?

## Changing a user password

On any machine with a proper LDAP setup (currently gallifrey or mccoy)
use `passwd` normally.

## Reading the support inbox

       foo@mccoy:~$ sudo su - support
       support@mccoy:~$ mutt

You can also use `pine` instead of `mutt` if you prefer.

Once you have dealt with a piece of support mail, please move it to a
folder with the user's name so that others don't repeat your efforts,
but can still find the messages later. Similarly, put any mail you send
in a folder with the recipient's user name. If the person you are
dealing with is not a Tardis user, use a folder named after their email
address.

## Mailing list adminstration

[<http://www.tardis.ed.ac.uk/admin/mail/ecartis.html>](http://www.tardis.ed.ac.uk/admin/mail/ecartis.html)

## Adding or removing an administrator

Follow instructions for adding someone to a group in
[LDAP](LDAP "wikilink").

If the person is still logged in somewhere (eg. has screen sessions
running), it is advisable to run

    sudo nscd -i group

on the machine in question (thanks bacam!).

## Group Accounts

See [Managing Group Accounts](Managing_Group_Accounts "wikilink").

[category:Admin Documents](category:Admin_Documents "wikilink")

[Category:OutOfDate](Category:OutOfDate "wikilink")