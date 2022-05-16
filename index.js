let celInput = document.getElementById("celInput");
// console.log(celInput);
let ferInput  = document.getElementById("ferInput");
// console.log(ferInput);

let celToFer = (cel)=>{
    let fer = Math.floor((cel * 9/5)+32)
    return fer;   
}

let ferToCel = (fer)=>{
    let cel=Math.floor((fer-32)*(5/9))
    return cel;
}

let convert1=()=>{
   let celValue = celInput.value;
   let display = celToFer(celValue) ;
   ferInput.value = display; 
   document.getElementById("msg").innerHTML=`<b>Formula : </b>(${celValue}°C * 9/5) + 32 = ${display}°F`
}

let convert2=()=>{
    let ferValue = ferInput.value;
    let display = ferToCel(ferValue);
    celInput.value = display;
    document.getElementById("msg").innerHTML=`<b>Formula : </b>(${ferValue}°F - 32) * 5/9 = ${display}°C`
}

celInput.addEventListener("change",convert1);
ferInput.addEventListener("change",convert2);