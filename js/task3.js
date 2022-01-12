const findLongestWord = function(string) {
    let words = string.split(' ')
    let etalon = '';
    for(let item of words){
    etalon = (etalon.length<item.length) ? item : etalon;
    }
    return(etalon);
    
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'