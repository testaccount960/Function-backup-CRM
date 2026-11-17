
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/
var lead = ZDK.Apps.CRM.Leads.fetchById("577983000023402003");
lead.Last_Name;

log(lead);