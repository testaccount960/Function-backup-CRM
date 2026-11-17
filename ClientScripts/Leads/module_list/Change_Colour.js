
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

ZDK.Page.getList().style({
    record: {
        backgroundColor: '#008000'
    },
    field: {
    }
},
    "(Lead_Colour:equals:Green)");

ZDK.Page.getList().style({
    record: {
        backgroundColor: '#FFFF00'
    },
    field: {
    }
},
    "(Lead_Colour:equals:Yellow)");

ZDK.Page.getList().style({
    record: {
        backgroundColor: '#FFA500'
    },
    field: {
    }
},
    "(Lead_Colour:equals:Orange)");

ZDK.Page.getList().style({
    record: {
        backgroundColor: '#0000FF'
    },
    field: {
    }
},
    "(Lead_Colour:equals:Blue)");

ZDK.Page.getList().style({
    record: {
        backgroundColor: '#FF0000'
    },
    field: {
    }
},
    "(Lead_Colour:equals:Red)");
