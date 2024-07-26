const converterButton = document.querySelector(".converter-button");
converterButton.addEventListener("click", (event) => {
  event.preventDefault();
  const binaryInput = document.querySelector("#binary-input").value;
  const result = document.querySelector(".result");
  result.innerHTML = convertBinaryToDecimal(binaryInput);
})

function convertBinaryToDecimal(binary = "10101") {
  let list = binary.split("");
  list.reverse();

  for (let position = 0; position < list.length; position++) {
    list[position] *= Math.pow(baseToConvert(selectConverter), position);
  }
  return list.reduce((acc, curr) => acc += curr, 0);
}

// function converDecimalToBinary(decimal = 5) {

// }

function baseToConvert(selectConverter) {
  const base = selectConverter();
  return base;
}

function selectConverter() {
  const bintodec = document.querySelector(".bin-to-dec");
  const dectobin = document.querySelector(".dec-to-bin");

  bintodec.classList.add("active");
  bintodec.addEventListener("click", (event) => {
    event.preventDefault();
    const navButtons = document.querySelectorAll("li button");
    const label = document.querySelector("label");
    navButtons.forEach((btn) => { btn.classList.remove("active") })
    bintodec.classList.add("active");
    label.textContent = "Binário:"
  })

  dectobin.addEventListener("click", (event) => {
    event.preventDefault();
    const navButtons = document.querySelectorAll("li button");
    const label = document.querySelector("label");
    navButtons.forEach((btn) => { btn.classList.remove("active") })
    dectobin.classList.add("active");
    label.textContent = "Decimal:"
  })

  return bintodec.classList.contains("active") ? 2 : 10;
}

selectConverter();