var allElements = document.getElementsByTagName('*');

var elements = [];
for (element in allElements) {
    var innerElem = allElements[element];
    if (innerElem.tagName !== undefined) { 
        if (innerElem.tagName.toLowerCase() !== "script" && innerElem.tagName.toLowerCase() !== "style") {
            elements[elements.length] = innerElem;
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            var replacedText = buildWord(text);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

function buildWord(text) {
    var splitted = text.split(/\s+/);
    for (var i = 0; i < splitted.length; i++) {
        var word = splitted[i];
        if (/[aeiou]/gi.test(word)) {
            word = word.replace(/^hey$/i, 'hey hey heyyyyy');
            word = word.replace(/^wassup$/i, 'wassa wassa wassa wassuuup');
            word = word.replace(/^sup$/i, 'wassa wassa wassa wassuuup');
            word = word.replace(/^whats up$/i, 'wassa wassa wassa wassuuup');
            word = word.replace(/^what's up$/i, 'wassa wassa wassa wassuuup');
            word = word.replace(/connect/i, 'conneeeeect');
            word = word.replace(/^love$/i, 'looooove');
            word = word.replace(/^amazing$/i, 'ammmaaasing');
            word = word.replace(/^no$/i, 'mmm mmm nonono');
            word = word.replace(/^waves$/i, 'waaaaaves');
            word = word.replace(/^go$/i, 'gOoOoOo');
            word = word.replace(/^25610$/i, '140000');
            word = word.replace(/^independently$/i, 'independently financially independently');
            word = word.replace(/^woah$/i, 'woooaaah');
            word = word.replace(/^yea$/i, 'yeyeyeyeyea');
            word = word.replace(/^Vietnam$/i, 'Hey Hey Vietnam');
            word = word.replace(/^good$/i, 'goooood');
            word = word.replace(/^seed$/i, 'seeeeed');            
            word = word.replace(/^world$/i, 'wooooorld');
            word = word.replace(/^connect$/i, 'conneeeeect');
            word = word.replace(/^love$/i, 'looooove');
            word = word.replace(/\?$/, '? (What am I gonna do?)');
            splitted[i] = word;
        }
    }
    var combined = splitted.join(" ");
    return combined;
}