
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

var cell_obj = ZDK.Page.getSubform('Test_Sub_Form').getRow(0).getCell('Job_Title');
cell_obj.showError('List Price cannot be zero');

// const users = await zrc.get('/crm/v8/users');
// log(users);

ZDK.Client.navigateTo('tab', {
	module: 'Leads'
},
'_blank');