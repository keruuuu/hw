let res = 0;
let num;
 do{
     num = prompt('введите число');
     if (isNaN(num)){
         alert('было введено не чимло');
     }
     else{
         res = res + Number(num);
     }
 } while (num !== null)
 alert(`Общая сумма чисел равна ${res}`);  