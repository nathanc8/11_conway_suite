//Créer une fonction decoupeChaine qui prend en paramètre une string et renvoie la même string dans laquelle les caractères successifs non identiques sont séparés par un espace.
function cutChaine(stringToCut) {
    var stringArray = stringToCut.split("");
    for (var i = 0; i < stringArray.length - 1; i++) {
        if (stringArray[i] !== stringArray[i + 1]) {
            stringArray.splice(i + 1, 0, " ");
            i++;
        }
    }
    stringToCut = stringArray.join("");
    return stringToCut;
}
// console.log(cutChaine("aabbca"));
// Créer une fonction decritChaine, inspirée de decoupeChaine, qui prend en paramètre une string et renvoie une string qui décrit, tel qu'expliqué ci-dessus, les caractères qui constituent la chaîne en paramètre.
function describeChaine(stringTodescribe) {
    // let stringArray: Array<string> = stringTodescribe.split("");
    var describingString = "";
    var count = 1;
    for (var i = 0; i < stringTodescribe.length; i++) {
        if (stringTodescribe[i] == stringTodescribe[i + 1]) {
            count++;
        }
        else {
            describingString += "".concat(count) + stringTodescribe[i];
            count = 1;
        }
    }
    return describingString;
}
// console.log(describeChaine("aabbca"));
// Créer une fonction suiteConway qui donne les n premiers termes de la suite qui commence par le caractère carac. n et carac sont passés en paramètres de la fonction.
function conwaySuite(char, n) {
    for (var i = 0; i < n; i++) {
        var describingString = "";
        var count = 1;
        for (var j = 0; j < char.length; j++) {
            if (char[j] == char[j + 1]) {
                count++;
            }
            else {
                describingString += "".concat(count) + char[j];
                count = 1;
            }
        }
        char = describingString;
        var body = document.querySelector("body");
        body.style.display = "flex";
        body.style.flexDirection = "column";
        body.style.flexWrap = "wrap";
        body.style.alignContent = "center";
        body.style.justifyContent = "center";
        var iterationToDisplay = document.createElement("p");
        iterationToDisplay.innerText = describingString;
        iterationToDisplay.style.textAlign = "center";
        body.appendChild(iterationToDisplay);
    }
    return;
}
conwaySuite("a", 3);
