function popUp(text, title) {var ss = SpreadsheetApp.getActiveSpreadsheet();var doc = DocumentApp.getActiveDocument();if (ss != null && ss != undefined) {var ui = SpreadsheetApp.getUi();var code = '<!DOCTYPE html><html><head><base target="_top"><link rel="stylesheet" type="text/css" href="https://www.w3schools.com/w3css/4/w3.css" /><script>function closeForm() {google.script.host.close();}</script></head><body><div class="w3-container"><div class="w3-container w3-green"><h2>'+ title + '</h2></div><form class="w3-container w3-light-grey" style="padding-bottom: 20px; padding-top: 20px"><H3>' + text + '</H3><br><button class="w3-button w3-blue" onclick="closeForm()" style="width: 150px; height: 40px; padding-bottom: 20"/>Ok</form></div></body></html>';var InputF = HtmlService.createHtmlOutput(code).setWidth(800).setHeight(250);ui.showModalDialog(InputF, "‎");} else if (doc != null && doc != undefined) {var dui = DocumentApp.getUi();var code = '<!DOCTYPE html><html><head><base target="_top"><link rel="stylesheet" type="text/css" href="https://www.w3schools.com/w3css/4/w3.css" /><script>function closeForm() {google.script.host.close();}</script></head><body><div class="w3-container"><div class="w3-container w3-green"><h2>'+ title + '</h2></div><form class="w3-container w3-light-grey" style="padding-bottom: 20px; padding-top: 20px"><H3>' + text + '</H3><br><button class="w3-button w3-blue" onclick="closeForm()" style="width: 150px; height: 40px; padding-bottom: 20"/>Ok</form></div></body></html>';var InputF = HtmlService.createHtmlOutput(code).setWidth(800).setHeight(250);dui.showModalDialog(InputF, "‎");}}
