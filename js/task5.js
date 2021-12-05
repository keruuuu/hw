const COUNTRY_DELIVERY = {
    "Китай": 150,
    "Чили": 250,
    "Австралия": 165,
    "Индия": 90,
    "Ямайка": 130
};

let messageForUser;
let userAnswer = prompt("Укажите страну доставки", '');
if (userAnswer==null||userAnswer=='') {
    messageForUser = "Отменено пользователем";
} else {
    let countryVerification = userAnswer[0].toUpperCase() + userAnswer.toLowerCase().slice(1);
    let exit = false;
    for (let key in COUNTRY_DELIVERY) {
        if (exit) {
            break;
        }
        switch (countryVerification) {
            case key:
                exit = true;
                alert(`Доставка в ${countryVerification} будет стоить ${COUNTRY_DELIVERY[key]} кредитов`);
                break;
            case key:
                exit = true;
                alert ( `Доставка в ${countryVerification} будет стоить ${COUNTRY_DELIVERY[key]} кредитов`);
                break;
            case key:
                exit = true;
                alert(`Доставка в ${countryVerification} будет стоить ${COUNTRY_DELIVERY[key]} кредитов`);
                break;
            case key:
                exit = true;
                alert(`Доставка в ${countryVerification} будет стоить ${COUNTRY_DELIVERY[key]} кредитов`);
                break;
            case key:
                exit = true;
                alert(`Доставка в ${countryVerification} будет стоить ${COUNTRY_DELIVERY[key]} кредитов`);
                break;
        }
    }

    if (exit == false) {
        alert('В вашей стране доставка не доступна');
    }
}
