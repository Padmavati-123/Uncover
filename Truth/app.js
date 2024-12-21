document.getElementById("invisible-button").addEventListener("click", function() {
    console.log(`"L dp irxqg zkhuh pbvwhulhv xqirog,
L fdq jurz zkhq wkh wuxwk lv xqwrog.
L dp vlohqw, bhw L vshdn wr wkrvh zkr vhhn,
Wkurxjk revhuydwlrq, pb vhfuhwv brx’oo shhn.
Zkdw dp L?"

kwwsv://gulyh.jrrjoh.frp/iloh/g/11RwHtV-ZGNNdYvz0euEx4RQk0ox1iPFo/ylhz?xvs=gulyh_olqn`);
});

const buttons = document.querySelectorAll(".invisible-button1");

buttons.forEach(button => {
    if (button.id !== "button1") {
        button.addEventListener("click", function() {
            //displays nothing.
        });
    }
});
