
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

ZOHO.CRM.UI.Events.on("page view", function(data) {
    var phone = data["Phone"]; // Fetch Phone field value
    
    if(phone && phone.length !== 10) {
        alert("Phone number must be 10 digits!");
        return {"save": false}; // Prevents form submission
    }
    
    return {"save": true}; // Allows save
});