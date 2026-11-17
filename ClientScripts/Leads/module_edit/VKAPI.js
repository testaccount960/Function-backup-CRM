
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/


// var response = ZDK.Apps.CRM.Functions.execute("test_1_1");

// log(JSON.stringify(response));


// var leads = ZDK.Apps.CRM.Leads.searchByCriteria("((Last_Name:equals:test 768))");

// log(JSON.stringify(leads));

var users = ZDK.Apps.CRM.Users.fetch();
users[0].last_name;


log(JSON.stringify(users));
log(users);


