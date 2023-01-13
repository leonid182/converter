let input = document.getElementById('input');
let select = document.getElementById('select');
let div = document.querySelector('.div');

let range = document.getElementById('input__second');
let div__second = document.querySelector('.div__second');



let task = {
    eur: 0.014,
    usd: 0.013
};




let exchenge = (rub, current)=>{
    if(rub<0){
        return null
    }

    return(rub*task[current]);
}

input.addEventListener('input', ()=>{
   let result =  exchenge(input.value, select.value);
    div.innerHTML = Math.floor(result * 100) / 100

});
select.addEventListener('change', ()=>{
    let result =  exchenge(input.value, select.value);
    div.innerHTML = Math.floor(result * 100) / 100

});

range.addEventListener('input', ()=>{
    div__second.innerHTML = range.value;
    if (div__second.innerHTML ==60) {
        alert('60')
    }
})



