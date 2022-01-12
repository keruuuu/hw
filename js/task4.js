const formatString = function(string) {
    let res = (string.length > 40 ) ? (string.slice(0,39) + '...') : string
    return(res);
  }
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка