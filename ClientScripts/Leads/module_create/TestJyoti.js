
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

var redBorder = ZDK.Page.getField('First_Name')
if (redBorder.getValue() != null && redBorder.getValue() != '') {
    redBorder.addStyle({ borderColor: '#ff6666'});
}