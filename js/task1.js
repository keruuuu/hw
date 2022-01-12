let nums = ([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
let fruits =  (['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])



const logItems = function (array) {
    for ( let item of array) {
    let index = array.indexOf(item) + 1;

    console.log (index +' - '+ item);
    }
}

logItems(fruits)
logItems(nums)