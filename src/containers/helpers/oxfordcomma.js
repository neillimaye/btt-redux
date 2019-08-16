function oxfordcomma(arr){
    var outStr = "";
    if (arr.length === 0){
      return "nothing"
    }
    else if (arr.length === 1) {
        outStr = arr[0];
    } else if (arr.length === 2) {
        outStr = arr.join(' and ');
    } else if (arr.length > 2) {
        outStr = arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1);
    }
    return outStr;
}
export default oxfordcomma;
