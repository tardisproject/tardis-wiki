This tutorial shows you how to use *Apache Directory Studio* to browse
[LDAP](LDAP "wikilink"). Only system administrators will have access to
the credentials required to get through a part of this tutorial. This
tutorial also assumes you have SSH all set up.

__TOC__

## Getting the software

First, you'll need to grab *Apache Directory Studio* from [Apache
Directory website](https://directory.apache.org/studio/downloads.html).
It's available for Linux, Windows, and macOS, so don't worry. This
tutorial uses macOS Sierra but it should be fairly straightforward for
other platforms.

macOS tip, if you have Homebrew, just run this command:
`brew install apache-directory-studio`

Once you've got that installed (if you're a macOS user, you may run
across [this issue](https://support.apple.com/kb/PH25088?locale=en_GB)),
run the software.

## Finding the main interface

Right now you should be presented with the below welcome screen.

<figure>
<img src="LDAP_Welcome.png" title="LDAP_Welcome.png" width="500" alt="LDAP_Welcome.png" /><figcaption aria-hidden="true">LDAP_Welcome.png</figcaption>
</figure>

Hit the close button next to the **Welcome** tab (highlighted above) to
get access to the main interface.

<figure>
<img src="LDAP_Main_Interface.png" title="LDAP_Main_Interface.png" width="500" alt="LDAP_Main_Interface.png" /><figcaption aria-hidden="true">LDAP_Main_Interface.png</figcaption>
</figure>

## Adding a connection

Go to File -> New, and then navigate to the *LDAP Connection* wizard. It
should be filed under *LDAP Browser*.

<figure>
<img src="LDAP_Select_Wizard.png" title="LDAP_Select_Wizard.png" width="500" alt="LDAP_Select_Wizard.png" /><figcaption aria-hidden="true">LDAP_Select_Wizard.png</figcaption>
</figure>

Navigating to LDAP Connection will bring us to the below screen:

<figure>
<img src="LDAP_New_Connection.png" title="LDAP_New_Connection.png" width="500" alt="LDAP_New_Connection.png" /><figcaption aria-hidden="true">LDAP_New_Connection.png</figcaption>
</figure>

### Setting the Network Parameters

Set the name to *Tardis localhost:1389*. You may be wondering, why are
we writing *localhost*? Isn't the LDAP server on Tardis?

Yes, the LDAP server is on Tardis, but it is behind the firewall. We'll
be using SSH port forwarding to get a connection through to the LDAP VM
on the Tardis network. Run this command to start SSH port forwarding.

`ssh -NL 1389:`[`ldap:389`](ldap:389)` ssh.tardis.ed.ac.uk`

-   *-N*: This means we do not want execute a remote command. This is
    useful for just forwarding ports, since we don't want to also access
    the machine using regular SSH.
-   *-L 1389:<ldap:389>*: This means we want all traffic on the port
    *1389* of localhost to go to the *<ldap:389>* address on the remote
    server.

The reason we use 1389 locally instead of 389, is that all ports under
1024 require **sudo** to be used.

Once you run the command, depending on how you have things set up, you
will be prompted for a password. You'll then receive the welcome
message, and then nothing will happen. This is good.

On the wizard, for the **Hostname**, type in *localhost*. For the
**Port**, type in *1389*. This is what your screen should look like:

<figure>
<img src="LDAP_New_Connection_Filled.png" title="LDAP_New_Connection_Filled.png" width="500" alt="LDAP_New_Connection_Filled.png" /><figcaption aria-hidden="true">LDAP_New_Connection_Filled.png</figcaption>
</figure>

Leave the other options as default, and press Next.

### Get the LDAP password

There are two ways to get the password and binddn.

#### Way 1: Get Password From LDAP Server

1.  SSH to the LDAP server: `ssh root@jellybaby`
2.  Start reasding the LDAP config file: `less /etc/ldap/slapd.conf`
3.  Scroll down to the bottom (use page down / arrow keys)
4.  Find `rootpw "XXXXXXXXXXX"` to get the password, and `rootdn` for
    the dn

#### Way 2: Get Password From Shell Server

This works if you already have root access on the shell server.

We'll be grabbing these details from the LDAP config file on Fez. Open
up SSH, and read the `/etc/tardis/ldap.conf` file. You will need root
privileges to do this, use `sudo cat`.

The file has the structure of key/value pairs, as well as categories. It
should look a little bit like this:

    [server]
    ...
    binddn=some=stuff,exists=here
    bindpw=and,the,secure,password,here
    ...

-   `[server]` is the server category
-   `binddn` has the value `some=stuff,exists=here`
-   `bindpw` has the value `and,the,secure,password,here`

The ellipsis just represents that there may be other key/value pairs in
the file.

### Authentication

This screen requires us to provide the details for Simple
Authentication. On the wizard fill in **Bind DN or user** field with the
`binddn` value, and fill the password field with `bindpw` value. Smack
**Check Authentication** and make sure everything works fine.

<figure>
<img src="LDAP_Authentication.png" title="LDAP_Authentication.png" width="500" alt="LDAP_Authentication.png" /><figcaption aria-hidden="true">LDAP_Authentication.png</figcaption>
</figure>

Press Finish, and you should be in!

<figure>
<img src="LDAP_Browsing.png" title="LDAP_Browsing.png" width="800" alt="LDAP_Browsing.png" /><figcaption aria-hidden="true">LDAP_Browsing.png</figcaption>
</figure>

## Connecting again

All of that was just a one time setup. In the future, when you start
Apache Directory Studio, you just need to run
`ssh -NL 1389:`[`ldap:389`](ldap:389)` ssh.tardis.ed.ac.uk`, and then
select the connection in the bottom-left hand side of the main window.

<figure>
<img src="LDAP_Connecting_Again.png" title="LDAP_Connecting_Again.png" width="250" alt="LDAP_Connecting_Again.png" /><figcaption aria-hidden="true">LDAP_Connecting_Again.png</figcaption>
</figure>

## Tips & Tricks

-   Clear groups cache using *sudo nscd --invalidate=group*

[Category:Tutorials](Category:Tutorials "wikilink")