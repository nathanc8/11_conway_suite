//Trying to do a script with TDD Method

function test(string) {
    let conwayTrad = "";
    let count = 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i + 1]) {
            if (string[i] == string[i + 1]) {
                count++;
            } else {
                conwayTrad += count + string[i];
                count = 1;
            }
        } else {
            conwayTrad += count + string[i];
        }
    }
    return conwayTrad;
}

module.exports = { test };
