  module.exports = function check(str, bracketsConfig) {
    let j = 0;
    let len = bracketsConfig.length;
    let temp = "";
    let brackets = "";
    while (j != len) {
        j = 0;
        let i = 0;
        while (i < len) {
            brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
            temp = str.replace(brackets, "");
            if (str === temp) {
                j++;
            }
            str = temp;
            i++;
        }
    }
    return str.length === 0;
}

// первым параметром передается строка, 
// вторым - массив массивов из скобок, которые встречаются в строке.
// заменяет в строке str все подстроки brackets на пустую строку
