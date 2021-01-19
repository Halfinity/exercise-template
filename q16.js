function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    let arrInput = JSON.parse(input);
    let newArr = [];
    for (let i = arrInput[0]; i <= arrInput[1]; i++) {
        if (i % 4 === 0 && i % 100 === 0 && i % 400 === 0) {
            newArr.push(i);
        } else if (i % 4 === 0 && i % 100 === 0) {
            continue;
        } else if (i % 4 === 0) {
            newArr.push(i);
        }
    }
    out = newArr;

    output.innerText = out;
}