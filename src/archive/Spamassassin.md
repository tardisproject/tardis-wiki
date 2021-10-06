# Using Spamassassin on Tardis

## Setting up your mail account to use spamassassin with procmail

Create a mail folder for spam, use a '.' to make this folder
IMAP-viewable.

    maildirmake ~/Maildir/.SPAM

Before beginning to modify your .procmailrc, first back it up, and use
the copy to make changes, as mail with a broken .procmailrc can get
lost.

      cp ~/.procmailrc ~/.procmailrc.new
      vi ~/.procmailrc.new

You may also want to log everything that procmail does with your mail
while you are testing SpamAssassin. To do this, add the following line
to your .procmailrc file:

      LOGFILE=$HOME/procmail.log

(Don't forget to remove this line when you are finished, unless you want
to use a tool such as mailstat for checking whats been going on with
your mail)

You will need to add the following rule to your .procmailrc file at the
beginning:

      :0fw:
      | /usr/bin/spamc

This will call spamassassin to be run against any new message that
arrive.

You then need to create a rule that pushes any spam into a separate mail
folder:

      :0:
      * ^X-Spam-Status: Yes
      $MAILDIR/.SPAM/new

Spam will now begin to be pushed automatically into the .SPAM mail
folder instead of arriving in your Inbox. You should check this folder
regularly to ensure that it is not catching real messages by mistake,
and delete any spam that has been caught. (See below for tweaking
SpamAssassin's settings).

You should now ensure that you are using procmail for your email by
adding the following line to your \~/.forward file:

      "|IFS=' ' && exec /usr/bin/procmail -f- || exit 75 #LOGIN"

(Where LOGIN is replaced with your username).

## Setting up your mail account to use spamassassin with maildrop

First, create the spam directory as above:

      maildirmake ~/Maildir/.SPAM

Next, back up your .mailfilter as above:

      cp ~/.mailfilter ~/.mailfilter.new
      vi ~/.mailfilter.new

Now to set up your mailfilter. At the top of the file, shove this in:

    #call spamassassin
      exception {
                  xfilter "/usr/bin/spamassassin -x"
                }
    # identified as spam?
      if (/^X-Spam-Flag: *YES/)
      {
        # save the spam mail to the users special spam folder
            to Maildir/.SPAM/
            exit
      }
    # seems, the mail isn't suspect, save it to the users inbox
    to Maildir

finally make sure you're actually using maildrop by putting this in
\~/.forward:

      "|IFS=' ' && exec /usr/bin/maildrop || exit 75 #LOGIN"

replacing LOGIN with your own username, and thats it (much nicer than
procmail :)). Read on for information on configuring spamassassin.

## Configuring spamassassin

SpamAssassin can be configured on a per-user basis, to best suit you. In
orde to do this, you will need to create a folder called '.spamassassin'
in your home directory:

      mkdir ~/.spamassassin

You should then create a file inside that directory called 'user_prefs'
which will contain the settings you wish SpamAssassin to use when
examining your mail.

      vi ~/.spamassassin/user_prefs

There are several basic settings you will wish to add to this file:

    This is the default setting for SpamAssassin.
    When an email is examined, SpamAssassin gives the message points according to tests that define how 'spam-like' it is.
    The number set in the 'required_hits' option defines the cut-off point above which messages are considered spam
    You should adjust this number based on whether you receive too many false-positives (non-spam in your SPAM folder)
    or false-negatives (spam in your inbox).

      required_hits 8.0

    This setting lets you specifiy addresses that are definitely NOT spam. You can use the * and ? wildcards here.
    This should be used if certain emails from individuals repeatedly end up in your SPAM box.

      whitelist_from *@tardis.ed.ac.uk joe@notspam.com

    (NOTE: By default, messages sent from IP addresses within ed.ac.uk are considered non-spam.)

    This setting lets you specify addresses that definitely ARE spam.
    However, in most cases, Bayesian filtering is a better option here. (See below).

      blacklist_from spam@spammer.com

Note: You can view all the available options open to you by looking at
the SpamAssasin man pages:

      man Mail::SpamAssassin::Conf

The default tests that are run against emails can be seen at
<http://www.spamassassin.org/tests.html> You can change the number of
points a test will score as follows:

      score NAME_OF_TEST 3.0

You can also disable a test by setting its score value to be 0.

Bayesian filtering is used within SpamAssassin as an alternative way of
filtering spam. This method can be used to 'teach' SpamAssassin about
what messages you receive are and aren't spam, so that it can better
examine messages in the future. In order to use Bayesian filtering
effectively, you must first have completed all of the above steps, since
the rules are stored in your .spamassassin folder.

You do not have to teach SpamAssassin about spam it has already caught,
as these are automatically added to its ruleset. However, you may want
to teach it that some messages it missed are actually spam, or some
messages it caught are actually non-spam (known as ham).

Any messages that are spam that get through SpamAssassin's filtering
should be saved to a separate mail folder (e.g MISSED-SPAM). Once you
have collected a few messages, you should run the following command:

      sa-learn --spam --showdots --dir ~/Maildir/.MISSED-SPAM/*

This will process these messages and add them to its ruleset.

To teach SpamAssassin about non-spam (ham) messages, select a mail
folder that you know contains no spam. In this example, say you have a
folder called WORK, you would run the command:

      sa-learn --ham --showdots --dir ~/Maildir/.WORK/*

This process can be run repeatedly on the same folders over time, since
SpamAssassin will only process each message once when building up its
ruleset, and will ignore any it has already seen. Equally, this process
should be used to re-score any messages that were filtered into your
.SPAM folder that were actaually ham, by saving them into a folder and
repeating the above steps on that folder.

Updating your spamassassin rules:

      sa-learn --import

## Testing spamassassin

Assuming all your configuration is right, there's only one more step: to
test it. And it just so happens that somebody has invented the GTUBE,
i.e. the "Generic Test for Unsolicited Bulk Email". Merely put this line
into an e-mail:

      XJS*C4JDBQADN1.NSBN3*2IDNEN*GTUBE-STANDARD-ANTI-UBE-TEST-EMAIL*C.34X

and send it to yourself. If you check your Maildir/.SPAM directory, for
example, using

      mutt -f ~/Maildir/.SPAM

you should see the mail with the following headers (or something very
similar):

      X-Spam-Flag: YES
      X-Spam-Checker-Version: SpamAssassin 2.64 (2004-01-11) on
              mccoy.tardis.ed.ac.uk
      X-Spam-Level: **************************************************
      X-Spam-Status: Yes, hits=900.0 required=8.0 tests=GTUBE,USER_IN_WHITELIST
              autolearn=no version=2.64
      X-Spam-Report:
              * 1000 GTUBE BODY: Generic Test for Unsolicited Bulk Email
              * -100 USER_IN_WHITELIST From: address is in the user's white-list

If so, then congratulations! Spamassassin is now working.

[Category:OutOfDate](Category:OutOfDate "wikilink")