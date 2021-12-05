
let credits = 35500;
let pricePerDrod = 3000;
let totalPrice;
   let quant = prompt("количество");
   if(quant == null){
       alert('Отменено пользователем!')
   }
   else{
       totalPrice = pricePerDrod * quant
   }
   if(totalPrice <= credits){
       alert(`Вы купили ${quant} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)    
   }
   else{
       alert('Недостаточно средств на счету!')
   }  