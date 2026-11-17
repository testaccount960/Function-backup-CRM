
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

try {
    // Get Lead Source value
    var leadSource = ZDK.Page.getField("Lead_Source").getValue();

    // Find Convert button
    var convertBtn = ZDK.Page.getButtons().find(btn => btn.getLabel() === "Convert");

    // Hide button when Lead Source = Twitter
    if (convertBtn) {
        if (leadSource === "Twitter") {
            convertBtn.disable(); // Disable button
        } else {
            convertBtn.enable(); // Enable button
        }
    }

} catch (e) {
    console.log("Error: " + e.message);
}