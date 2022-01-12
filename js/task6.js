const numbers = [];
let total = 0;
for (let i = 0; true; i++) {
  let input = prompt("Enter any number: ");
  if (input) {
    numbers.push(input);
  } else {
    if (numbers.length) {
      for (let num of numbers) {
        total += Number(num);
      }
    }
    break;
  }
}
console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);