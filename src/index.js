module.exports = function check(str, bracketsConfig) {
    let result='';
    let n = 0 ;
    while (n < bracketsConfig.length) {
      n = 0;
      for (let i = 0; i < bracketsConfig.length; i++) {
        let br = bracketsConfig[i][0] + bracketsConfig[i][1];
        result = str.replace(br, "");
        if (str == result) {
          n++;
        }
        str = result;
      }
    }
    return str.length == 0;
}
