let input = document.getElementById('input');
let select = document.getElementById('select');

let div = document.querySelector('.div');

let task = {
    eur: 0.014,
    usd: 0.013
};




let exchenge = (rub, current)=>{
    return(rub*task[current]);
}

input.addEventListener('input', ()=>{
   let result =  exchenge(input.value, select.value);
    div.innerHTML = Math.floor(result * 100) / 100

})
select.addEventListener('change', ()=>{
    let result =  exchenge(input.value, select.value);
    div.innerHTML = Math.floor(result * 100) / 100

})


