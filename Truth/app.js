document.getElementById("invisible-button").addEventListener("click", function() {
    console.log(`"Hidden within lies a secret, encoded as in the days of Caesar; shift each letter thrice to uncover the truth."
        
    "L dp irxqg zkhuh pbvwhulhv xqirog,
     L fdq jurz zkhq wkh wuxwk lv xqwrog.
     L dp vlohqw, bhw L vshdn wr wkrvh zkr vhhn,
     Wkurxjk revhuydwlrq, pb vhfuhwv brx’oo shhn.
     Zkdw dp L?"

     kwwsv://gulyh.jrrjoh.frp/iloh/g/1y9dvW8vxetsZyL3cKtCnpOTCU1SyJO0w/ylhz?xvs=gulyh_olqn`);
});

const buttons = document.querySelectorAll(".invisible-button1");

buttons.forEach(button => {
    if (button.id !== "button1") {
        button.addEventListener("click", function() {
            //displays nothing.
        });
    }
});
