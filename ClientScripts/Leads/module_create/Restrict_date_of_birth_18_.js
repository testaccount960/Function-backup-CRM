
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

console.clear(); 
const bdaydate = ZDK.Page.getField('Date_Of_Birth').getValue();
console.log("bdaydate: ", bdaydate);

// Check if bdaydate is not null or empty
if (bdaydate !== null && bdaydate !== '') {
    // Split the date string into day, month, and year parts
    const parts = bdaydate.split('/');
    if (parts.length === 3) {
        // Create a Date object from the parts (note the month is zero-indexed)
        var birt_date = new Date(parts[2], parts[1] - 1, parts[0]);
        console.log("birt_date: ", birt_date);

        if (isNaN(birt_date.getTime())) {
            console.error("Invalid date format.");
        } else {
            var current_date = new Date();
            console.log("current_date: ", current_date);

            var diff = current_date.getTime() - birt_date.getTime();
            var daydiff = (diff / 31536000000).toFixed(0);
            console.log("daydiff: ", daydiff);

            if (daydiff < 18) {
                console.log("Into condition");
                ZDK.Client.showMessage('This is an important warning.', { type: 'warning' });
            }
        }
    } else {
        console.error("Invalid date format.");
    }
} else {
    console.error("Date of birth is null or empty.");
}
