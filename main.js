document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("button1").addEventListener("click", function () {

        let num1 = parseFloat (document.getElementById("textbox1").value);
        let num2 = parseFloat (document.getElementById("textbox2").value);
        let num3 = parseFloat (document.getElementById("textbox3").value);
        let answer = (num1 + num2 + num3)/3
        console.log(answer);
        document.getElementById("output").innerHTML = answer;


    });
});

