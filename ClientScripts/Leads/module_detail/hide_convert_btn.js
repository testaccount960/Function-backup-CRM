
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
// **/
// let convertButton = ZDK.Page.getButtons().find(a => a.getLabel() === 's2');
// let leadStatus = ZDK.Page.getField('Lead_Status').getValue();
// if (leadStatus !== "Ready to Convert") {
//     convertButton.disable();
// }


var ct = ZDK.Page.getButtons().find(a => a.getLabel() === "Convert");
ct.disable();