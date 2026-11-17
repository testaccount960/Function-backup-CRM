
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

// Get the value of "Name_of_Disease" field
var name_of_Disease = ZDK.Page.getField("Name_of_Disease").getValue();
log("Selected Disease: " + name_of_Disease);

// Check if the value is "Cancer"
if (name_of_Disease == "cancer") {
    // Show the "Cancer_Type" field
    // ZDK.Page.getField("Cancer_Type");
var field_obj = ZDK.Page.getField("Cancer_Type");
    field_obj.setVisibility(true);
log("its visible");

}