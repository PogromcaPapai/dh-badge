// from https://stackoverflow.com/questions/831030/how-to-get-get-request-parameters-in-javascript
function get_arg(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
    return decodeURIComponent(name[1]);
}

const file = document.getElementsByTagName('svg')[0];
function create(tag, attribs) {
    var obj = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.keys(attribs).forEach(function(key) {
        obj.setAttribute(key, attribs[key]);
    })
    file.appendChild(obj);
}

var xmove = 0; var size;
if (get_arg('size')) {
    size = parseInt(get_arg('size'));
} else {
    size = 100;
}
dangers = get_arg("d").split(",")
dangers.forEach(danger => {
    create('image', {"width":size, "x":xmove,
    "href":`dangers/${danger}.png`});
    xmove+=size;
});