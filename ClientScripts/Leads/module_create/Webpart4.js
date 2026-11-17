
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/



log("Test");

const contact = ZDK.Page.getField("Contact_Lookup1").getValue();

log("contact "+JSON.stringify(contact));

const id = contact.id;
const name = contact.name;

//  {"id":"577983000025144190","name":"Customer X"}

// ZDK.Page.getSubform('Test_Sub_Form').insertRows([{
//     'Contact': {
//         "id": id,
//         "name": name }
//  }
//  ], index);

// ZDK.Client.showAlert('You can [click here](https://www.zylker.com) to visit the page.', 'Notice', 'Got it!');