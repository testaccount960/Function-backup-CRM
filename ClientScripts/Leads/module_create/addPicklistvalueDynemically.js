
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/
// var field = ZDK.Page.getField("Lead_Stage");

// log(field);

// field.setOptions([
//     "Delhi, India",
//     "New Delhi, India",
//     "Delhi Cantonment, India"
// ]);

// On Page Load
var field = ZDK.Page.getField("Company");
log(field);
field.setSuggestions(["Value1", "Value2", "Value3"]);