
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

log(":: Test");


// Insert row

// ZDK.Page.getSubform('Test_Sub_Form').insertRows([

//     {
// 	'Phone_2': 'Zylker',
//         'Email_2': '20',
//     }], 1);


// add tooltip //Mandatory
    // ZDK.Page.getSubform('Test_Sub_Form').setMandatory(true);


// setValues

// ZDK.Page.getSubform('Test_Sub_Form').getRow(0).setValues({
// 	'Phone_2': 'Zylker',
//     'Email_2': '20',
// });


ZDK.Page.getSubform("Test_Sub_Form").getRow(0).setReadOnly(true);







    