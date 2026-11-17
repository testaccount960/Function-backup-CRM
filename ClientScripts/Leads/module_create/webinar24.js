
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

const first = ZDK.Page.getField("Last_Name").getValue();
log(first);




// ZDK.Client.showLoader({
// 	type: 'page',
// 	template: 'vertical-bar',
// 	message: 'Loading ...'
// });
