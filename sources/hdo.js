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

/** Convert Object to HTMLElement */
HDO.NodeObject = function(data) {
    
    /* Create HTMLElement */
    let element = HDO.HTML("div");

    /* */
    return element;

};

/** Convert Array of Objects to Array of Node's */
HDO.NodeArray = function(data) {
    
    /* */
    let list = [];

    /* */
    return list;

};

/** Convert HTMLElement to Object */
HDO.NodeEncode = function(node) {

    /* Expected input to be HTMLElement (object) */
    if(!node instanceof HTMLElement) {
        return false;
    }

};

/** Create HTMLElement */
HDO.HTML = function(tag, attributes = {}, children = []) {

    /* */
    let element = document.createElement(tag);

    /* */
    return element;

};

/** Create TextNode */
HDO.Text = function(text) {
    return document.createTextNode(text);
};