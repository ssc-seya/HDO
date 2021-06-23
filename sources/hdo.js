/** init */
window.HDO = {
    "code": "HDO",
    "name": "HTML Data Object",
    "format": {
        "t": "tag",
        "tag": "tag",
        "tagName": "tag",
        "e": "tag",
        "element": "tag",
        "a": "attributes",
        "attr": "attributes",
        "attributes": "attributes",
        "b": "children",
        "body": "children",
        "c": "children",
        "children": "children"
    }
};

/** */
HDO.NodeObject = function(data) {
    
    /* Create HTMLElement */
    let element = HDO.HTML("div");

    /* */
    return element;

};

/** */
HDO.NodeArray = function(data) {
    
    /* */
    let list = [];

    /* */
    return list;

};

/** */
HDO.NodeEncode = function(node) {

    /* Expected input to be HTMLElement (object) */
    if(!node instanceof HTMLElement) {
        return false;
    }

};

/** */
HDO.HTML = function(tag, attributes = {}, children = []) {

    /* */
    let element = document.createElement(tag);

    /* */
    return element;

};

/** */
HDO.Text = function(text) {
    return document.createTextNode(text);
};