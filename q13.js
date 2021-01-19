let out = "";
let i = 0;
function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");

    let newArr = [];
    newArr.push(input);
    out = out + `Element ${i} = ${input}\n`;
    i++;

    output.innerText = out;
}