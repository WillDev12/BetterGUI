<h1 align="center">BetterGUI</h1>
<h3 align="center">BetterGUI is a Google Script library with the soul purpose of making Google Sheets &amp; Docs UI better.</h3>
<p align="center">
  <a href="https://github.com/WillDev12">
    <img src="https://img.shields.io/github/followers/WillDev12?color=success&label=Follow%20my%20github&logo=github&style=for-the-badge">
  <a href="https://github.com/WillDev12/BetterGUI/network/members">
    <img src="https://img.shields.io/github/forks/WillDev12/BetterGUI?logo=git&style=for-the-badge">
  <a href="https://github.com/WillDev12/BetterGUI/stargazers">
    <img src="https://img.shields.io/github/stars/WillDev12/BetterGUI?logo=git&color=yellow&style=for-the-badge">
  <img src="https://img.shields.io/github/watchers/WillDev12/BetterGUI?logo=git&style=for-the-badge">
</p><br><br>

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
  * Run HTML in UI easier
    
# How to use

Since BetterGUI offers UI content, there are a few things that you can do with it.

Lets start off with the simple.

You can launch the UI by writing the code below:

``` javascript
BetterGUI.popUp("Title goes here", "Text goes here");
```

Upon running the function, you will get a message similar to this:
![alt text](https://github.com/WillDev12/BetterGUI/blob/2ca56518af71920e8b7cbcabb286863bb5c8f738/images/Screenshot%202023-02-02%201.13.59%20PM.png)

You can also use BetterGUI to display input, such as the following:

``` javascript
function getText() {
  var input = SpreadsheetApp.getActiveSheet().getRange('A1').value; //Retrieves text from cell A1
  var title = SpreadsheetApp.getActiveSheet().getRange('A2').value; //Makes the title the value of A2
  BetterGUI.popUp(input, title);
}
```
# HTML in UI

BetterUI has simplified the HTML process.<br>
Here is an example of how to use:
``` javascript
function showDialog() {
  var html = ''; //You can add html here
  BetterGUI.showDialogFromHtml(html, 'title'); //Removes a whole lot of steps
}

//You can do the same with sidebars:
function showSidebar() {
  var html = ''; //Yet again add html
  BetterGUI.showSidebarFromHtml(html, 'title'); //Works the same way as dialog but with sidebar
}
```

# Open source

BetterGUI has been made open source under NO licensing (it's absolutely free to use and edit) so that others can fit their parts into it to make it a better program.

You can access the open source code [here](https://github.com/WillDev12/BetterGUI/blob/main/src/library.gs)
