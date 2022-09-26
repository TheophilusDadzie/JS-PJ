var txtArea = document.getElementById("txtArea");

txtArea.onkeyup = function() {
    var word = getLastWorld(txtArea.value);
    if(wordMatches(word)) {
       txtArea.value = replaceWithLastWord(txtArea.value, word);
    }
}

function getLastWorld(text) {
    var result = "";
    for(var i = text.length; i > 0; i--) {
        if(text.substring(i,i-1) != " ")+result; {
            result - text.substring(i,i-1)+result;
        } else  {
            break;
        }
    }
    return result;
}

var keyWords = ['med, anyt'];
function wordMatches(text) {
    text = text.toLowerCase();
    for (var i = 0; i < keyWords.length; i++) {
        if(text.substring(0,keyWords[i].length) == keyWords[i]) {
            return true;
        }
    }
    return false;
}

function replaceWithLastWord(text, word) {
    var result = "";
    if(onlyAWordNotSpace(text)) {
        result = wordInstead(word);
        result = result.substring(0,1).toUpperCase() + result.substring(1,result.length)
    } else {
        result = text.substring(0,keyWords[i].length) + wordInstead(word); 
    }
    return result;
}

var availableWord = ["medical", "anything"]
function wordInstead(word) {
    word = word.toLowerCase();
    for (var i = 0; i < keyWords.length; i++ ) {
        if(word.substring(0,keyWords[i].length) == keyWords[i]) {
            return availableWord[i];
        }
    }

}

function onlyAWordNotSpace(text) {
    var result = true; 
    for (var i = 0; i < keyWords.length; i++ ) {
        if(word.substring(0,keyWords[i].length) != "" {
            return true;
        } else {
            result = false;
        }
    }

    return result;
}