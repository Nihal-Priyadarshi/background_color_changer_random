function color() {
    let btn = document.getElementById("submit");
    btn.onclick = function () {
        let hex_value = document.getElementById("hex_value");

        var code = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
        var random_code_A = code[Math.floor(Math.random() * code.length)];
        var random_code_B = code[Math.floor(Math.random() * code.length)];
        var random_code_C = code[Math.floor(Math.random() * code.length)];
        var random_code_D = code[Math.floor(Math.random() * code.length)];
        var random_code_E = code[Math.floor(Math.random() * code.length)];
        var random_code_F = code[Math.floor(Math.random() * code.length)];

        let display = document.getElementById("display");
        display.style.backgroundColor = `#${random_code_A}${random_code_B}${random_code_C}${random_code_D}${random_code_E}${random_code_F}`;

        document.getElementById('hex_value').innerText = `${random_code_A}${random_code_B}${random_code_C}${random_code_D}${random_code_E}${random_code_F}`;

        var colors = ['#000000', '#ffffff'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById("heading").style.color = random_color;
        document.getElementById("para").style.color = random_color;
        // document.getElementById("hex_code").style.color = random_color;
    };
}
color();