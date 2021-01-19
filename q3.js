function run() {
  const inputArray = document.getElementById("inputArray").value;
  const inputElement = document.getElementById("inputElement").value;
  const output = document.getElementById("output");
  let out = "";

  let array = JSON.parse(inputArray);
  let element = Number(inputElement);
  if (element <= 0) {
      out = array;
  } else {
      out = array.slice(0, element);
  }
  
  output.innerText = out;
}