
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

var field_obj = ZDK.Page.getField('Lead_Colour');
if (field_obj.getValue() === "Green") {
    field_obj.addStyle({ backgroundColor: '#ff0000', foregroundColor: '#ffffff' });    
} else if(field_obj.getValue() === "Yellow") {
    field_obj.addStyle({ backgroundColor: '#008000', foregroundColor: '#ffffff' });
}