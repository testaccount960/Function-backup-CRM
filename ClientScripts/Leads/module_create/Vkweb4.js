
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

log("test");

const lastName = ZDK.Page.getField("Last_Name").setValue("Vk");
const leadSaurce = ZDK.Page.getField("Lead_Source").setValue("Cold Call");