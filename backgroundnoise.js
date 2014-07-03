var winonload = window.onload;

function createCanvas(id, width, height) {
    var c = document.createElement("canvas");
    
    c.id = id;
    c.setAttribute("width", "" + width);
    c.setAttribute("height", "" + height);
    
    return c;
}

function createDiv(id, width, height) {
    var d = document.createElement("div");
    
    d.id = id;
    d.style.width = "" + width + "px";
    d.style.height = "" + height + "px";
    
    return d;
}

function setColor(canvas, i, j, color) {
    if(canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var randomGray = 100 + Math.floor(Math.random()*156);
        ctx.fillStyle = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
        ctx.fillRect(i, j, 5, 5);
    }
}

function fillCanvas(canvas, divSize, patternSize, nofpoints) {
    for (var k = 0; k < nofpoints; k++) {
        var i = Math.floor(Math.random()*divSize) % (patternSize - 5);
        var j = Math.floor(Math.random()*divSize) % (patternSize - 5);
        
        var color = {};
        color.r = Math.floor(Math.random()*256);
        color.g = Math.floor(Math.random()*256);
        color.b = Math.floor(Math.random()*256);
        
        setColor(canvas, i, j, color);
    } 
}


function createPatternDiv(divSize, patternSize) {
    "Create a square div of size divSize with random repeating square pattern of size patternSize as background"
    
    // id will be div2 if patternSize is 2
    var div = createDiv("div" + patternSize, divSize, divSize);
    
    var canvas = createCanvas("canvas" + patternSize, patternSize, patternSize);
    fillCanvas(canvas, divSize, patternSize, 200);
    div.style.backgroundImage = "url('" + canvas.toDataURL() + "')";
    div.style.marginBottom = "10px";
    div.innerHTML = "Pattern size: " + patternSize + "x" + patternSize;
    return div;
}

window.onload = function() {
    if(winonload) {
        winonload();
    }

    document.body.appendChild(createPatternDiv(800, 200));
};
