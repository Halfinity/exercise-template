function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

    let arrInput = JSON.parse(input);
    let newArr = [];
    let temp = 0;
    for (let i = 0; i < arrInput.length; i++) {
        temp = arrInput[i];

    for (let j = 0; j < arrInput.length; j++) {
        if (arrInput[j] === temp && j !== i && !newArr.includes(arrInput[j])){
        newArr.push(arrInput[j]);
        }
    }
}
    out = newArr;

    output.innerText = out;
}