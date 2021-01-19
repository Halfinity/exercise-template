function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";

var a = [NaN, 0, 15, false, -22, '',undefined, 47, null];
a.forEach(function(entry) {
    out = (entry);
});

output.innerText = out;
}