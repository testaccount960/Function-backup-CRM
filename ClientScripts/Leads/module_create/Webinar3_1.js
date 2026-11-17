
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/



log(":: Test");

// ZDK.Page.getSubform('Test_Sub_Form').getRow(0).setValues({
// 	'Phone_2': 'Zylker',
//     'Email_2': '20',
// });

let testArray = [{ "Phone": "122" }, { "Phone": "34" }];
    log(testArray);

for (let index = 0; index < testArray.length; index++) {
    log(element);

    const element = array[index];

//   log(element);


ZDK.Page.getSubform('Test_Sub_Form').insertRows([

    {
	'Phone_2': element.Phone,
    'Email_2': '20',},
    ]);
    
}




