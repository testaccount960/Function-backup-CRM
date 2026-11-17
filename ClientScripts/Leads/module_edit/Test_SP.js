let tran = ZDK.Page.getField("Transaction").getValue();
log("transaction " + JSON.stringify(tran));
var transaction_id = tran.id;
    log("Transaction ID: " + transaction_id);

    // Fetch the full Account details using the Account ID
var transaction_info = ZDK.Apps.CRM.Transaction.fetchById(transaction_id);
console.log(transaction_info);
    // log("Transaction Info: " + JSON.stringify(transaction_info));
