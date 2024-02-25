// calculator

function main() {
  let num1 = Number(prompt("Enter the first number:"));
  let num2 = Number(prompt("Enter the second number:"));
  let symbol = prompt("Enter the symbol (+, -, *, /, %, ^):");

  //მათემატიკური მოქმედებები
  function calculate(num1, num2, symbol) {
    switch (symbol) {
      case "+":
        return num1 + num2;

      case "-":
        return num1 - num2;

      case "*":
        return num1 * num2;

      case "/":
        return num1 / num2;

      case "^":
        return Math.pow(num1, num2);

      case "%":
        return (num1 / 100) * num2;

      default:
        return "Invalid symbol. Please choose from these symbols (+, -, *, /, %, ^)";
    }
  }
  //ვალიდაციის შემოწმება
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input. Please enter valid numbers.");
    return;
  }
  //კონსოლში პასუხის გამოტანა
  let result = calculate(num1, num2, symbol);
  console.log(num1, symbol, num2, "=", result);
}
main();
