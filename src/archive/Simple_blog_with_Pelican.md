So you've got your new Tardis shell account, and you want to write a
simple blog! What good fortune! Pelican is (like Jekyll) a simple way to
generate static web pages, and it is written in Python. Some examples
are found here: <http://www.pelicanthemes.com/>. OK! Let's start.

Install using Pip: '''

    cd ~/. && pip install --user markdown pelican

**Now clone the Pelican Themes repository:**

    git clone https://github.com/getpelican/pelican-themes

'''

Add the following to your bashrc (or shell configuration file) if
necessary: '''

    for p in ~/.local/bin; do
            [[-d_$p|-d $p/.]] || continue
            [[:$PATH:_=_*:$p:*|:$PATH: = *:$p:*]] || PATH=$p:$PATH
    done

'''

(This is actually for mksh, but it should work for other shells.)

Make a folder for Pelican: '''

    mkdir ~/blog/ && cd ~/blog/

'''

Run the helper script: '''

    cd ~/blog/ && pelican-quickstart

The options are largely self-explanatory. For "Do you want to specify a
URL prefix?", write: **/\~<tardis username>**. Upon success, we see
several folders, including 'content' and 'output'.

Now, enter the 'blog' directory and write something using your favorite
text editor - here is our example: '''

    cd ~/blog/content/

'''

'''

    Title: A dire warning
    Date: 2050-05-19
    Category: Urgent

    Tardis is run by evil nefarious people who sacrifice a black cat at the pub every Monday.

'''

Now we generate pages: '''

    cd ~/blog/ && pelican

'''

Now copy / simlink the contents of the **output** folder to
**public_html**.

Now look on **<https://tardis.ed.ac.uk/>\~<tardis username>/** for the
blog homepage.

For custom themes, use the **-t** option to specify the directory, in
this case, at **\~/pelican-themes**.