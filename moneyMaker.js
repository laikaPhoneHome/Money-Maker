

/* 
Welcome to the money maker, please input your note value and amount of each at the same index then pick your currency.
Sadly Ive run out of change. Enjoy.
*/


function moneyMaker(kind, amount, currency){
let moneyOut = 0;

 for (let m=0; m<kind.length; m++){
    if (kind[m] === 1 && currency.split(" ")[0] === "dollars"){
        for (let i=0; i<amount[m]; i++){
            moneyOut += amount[m];

        }
    }else if(kind[m] === 5){
        for (let i=0; i<amount[m]; i++){
            moneyOut += amount[m] * 5;

        }
    }else if(kind[m] === 10){
        for (let i=0; i<amount[m]; i++){
            moneyOut += amount[m] * 10;

        }
    }else if(kind[m] === 20){
        for (let i=0; i<amount[m]; i++){
            moneyOut += amount[m] * 20;

        }
    }else if(kind[m] === 50){
        for (let i=0; i<amount[m]; i++){
            moneyOut += amount[m] * 50;

        }
    }else if(kind[m] > 50 || kind[m] % 10 !== 0 || kind[m]< 10){
        return "I only do notes, sorry";
    }

if (currency === "pounds please"){
    let moneyMaker = (`KA-CHING! Heres £${moneyOut}, youre welcome.`)
    return moneyMaker;
}else if (currency === "dollars please"){
    let moneyMaker = (`BEEP BEEP! Heres $${moneyOut}, Take it.`)
    return moneyMaker;
}else if (currency === "euros please"){
    let moneyMaker = (`BURRRR! Heres €${moneyOut}, Dont spend it all at one place.`)
    return moneyMaker;
}else if(currency.split(" ")[1] !== "please"){
    return "say please";
}else if(!currency){
    return "what currency?";
}else
    return "I dont do that one";
 }
}

console.log(moneyMaker(20,20,'pounds please'));