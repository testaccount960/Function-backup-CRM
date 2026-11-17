
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

let subformObj = ZDK.Page.getSubform("Test_Sub_Form");
let rows = subformObj.getValues();

rows.forEach(function(item) {

    let fromDate = item.Start_Date;   // Change API name if needed
    let toDate = item.End_Date;       // Change API name if needed

    if (fromDate && toDate) {

        let startDate = new Date(fromDate);
        let endDate = new Date(toDate);

        if (!isNaN(startDate) && !isNaN(endDate)) {

            // Remove time part (safe practice)
            startDate.setHours(0,0,0,0);
            endDate.setHours(0,0,0,0);

            let diffTime = endDate.getTime() - startDate.getTime();
            let dayDiff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            log("Days Difference: " + dayDiff);

            // Set subform field value (use correct API name)
            item.Days = dayDiff;
        }
    }

});
subformObj.setValues(rows);