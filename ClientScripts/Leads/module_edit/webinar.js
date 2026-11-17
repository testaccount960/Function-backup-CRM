
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

// const field = ZDK.Page.getField('Country').setVisibility(false);
// // field => { getApiName: ƒ }
// // field.getApiName();

// log(field)


// var field_obj = ZDK.Page.getField('First_Name');
// field_obj.setValue('Webinar');

var field_obj = ZDK.Page.getField('Email');
field_obj.mask({
	character: '*',
	length: 5,
	reverse: false
});