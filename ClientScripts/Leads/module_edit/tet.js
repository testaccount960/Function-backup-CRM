const statusField = ZDK.Page.getField('Stage');
const statusValue = statusField.getValue();
console.log(statusValue);

const fileUploadField = ZDK.Page.getField('File_Upload');

if (statusValue === "Attempt to Contact") {
    fileUploadField.setMandatory(true);
} else {
    fileUploadField.setMandatory(false);
}