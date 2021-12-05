const admPas = "admin";
       let usrPas = prompt("enter password");
       if(usrPas == null){
           alert('Отменено пользователем!')
       }
       else if(usrPas==admPas){
           alert('Добро пожаловать!')
       }
       else{
           alert('Доступ запрещен, неверный пароль!')   
       }
       alert(admPas)