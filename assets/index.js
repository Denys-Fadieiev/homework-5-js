// Создать рекурсивную функцию вычисления факториала числа.Факториал - произведение всех натуральных чисел от 1 до x.
// 5! = 1 * 2 * 3 * 4 * 5 = 120

const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  
  if (num > 0) {
    return num * factorial(num - 1);
  } else{
    return NaN;
  }
};

console.log(factorial(5)); //120
console.log(factorial(0)); //1
console.log(factorial(-5)); //NaN
