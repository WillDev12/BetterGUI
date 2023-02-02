# BetterGUI
BetterGUI is a Google Script library with the soul purpose of making Google Sheets &amp; Docs better.

# How to install

Installation is easy, follow the steps below and it will be fully installed.

1. Create a new Google Sheet or Document.

2. Go to extensions/apps script

3. Select and make a new project

4. On the left, and click the plus button above "library."

5. Paste the following ID in the box and press look up.

```
1LcDmG8gFKv8HQ3VwovO0ifyHS7TWjBMup6kfPhKBTOkJ1pBNE3eDgiKm
```

6. Select the version of your choice and add it.

7. Success! BetterGUI is fully installed.

- - -

# What BetterGUI offers

  [BetterGUI is still in progress]

  * New GUI look for alerts
  * Easier alert code
    
# How to use

Since BetterGUI offers UI content, there are a few things that you can do with it.

Lets start off with the simple.

You can launch the UI by writing the code below:

```
BetterGUI.popUp("Title goes here", "Text goes here");
```

Upon running the function, you will get a message similar to this:
![alt text](https://github.com/WillDev12/BetterGUI/blob/2ca56518af71920e8b7cbcabb286863bb5c8f738/images/Screenshot%202023-02-02%201.13.59%20PM.png)

You can also use BetterGUI to display input, such as the following:

```
function getText() {
  var input = SpreadsheetApp.getActiveSheet().getRange('A1').value;
  var title = 'Title';
  showText(input, title);
}

function showText(input, title) {
  BetterGUI.popUp(input, title);
}
```

# Open source

BetterGUI has been made open source under NO licensing (it's absolutely free to use and edit) so that others can fit their parts into it to make it a better program.

You can access the open source code [here](https://github.com/WillDev12/BetterGUI/blob/main/src/library.gs)
