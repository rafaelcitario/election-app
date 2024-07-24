const body = document.querySelector("body");

createElementOnDOM("h1", "Conversor Binário Decimal");
createElementOnDOM("label", "Número binário:");
createElementOnDOM("input").classList.add("binary-input");
createElementOnDOM("button", "Converter").addEventListener("click", () => {
  const decimal = conversorBinarioDiecimal();
  if (document.querySelector(".decimal-output"))
    document.querySelector(".decimal-output").remove();
  createElementOnDOM(
    "p",
    `${
      document.querySelector(".binary-input").value
    } na base 2 é igual à ${decimal} na base 10`
  ).classList.add("decimal-output");
});

function createElementOnDOM(element, string = "") {
  const newElement = document.createElement(element);
  if (string != "") newElement.innerHTML = string;
  body.appendChild(newElement);
  return newElement;
}

function conversorBinarioDiecimal() {
  const binary = parseInt(document.querySelector(".binary-input").value);
  const arrNumbers = binary.toString().split("").reverse();
  const codification = [];
  for (let position = 0; position < arrNumbers.length; position++) {
    codification.push(arrNumbers[position] * Math.pow(2, position));
  }
  return codification.reduce((a, b) => a + b);
}
