let input = document.getElementById('input');
let select = document.getElementById('select');
let div = document.querySelector('.div');

let range = document.getElementById('input__second');
let div__second = document.querySelector('.div__second');

let input__third = document.getElementById('input__third');
let select__third = document.getElementById('select__third');
let div__third = document.querySelector('.div__third');

let task = {
    eur: 0.014,
    usd: 0.013
};
let far = {
    mile: 0.0006,
    foot: 3.28
};




let exchenge = (rub, current)=>{
    if(rub<0){
        return null
    }

    return(rub*task[current]);
}

let convert = (metr, current) => {
    if(metr<0){
        return null
    }

    return(metr*far[current]);
}

input.addEventListener('input', ()=>{
   let result =  exchenge(input.value, select.value);
    div.innerHTML = Math.floor(result * 100) / 100

});
select.addEventListener('change', ()=>{
    let result =  exchenge(input.value, select.value);
    div.innerHTML = Math.floor(result * 100) / 100

});
input__third.addEventListener('input', ()=>{
   let result =  convert(input__third.value, select__third.value);
    div__third.innerHTML = Math.floor(result * 100) / 100

});
select__third.addEventListener('change', ()=>{
    let result =  convert(input__third.value, select__third.value);
    div__third.innerHTML = Math.floor(result * 100) / 100

});

range.addEventListener('input', ()=>{
    div__second.innerHTML = range.value;
    if (div__second.innerHTML ==60) {
        alert('60')
    }
})



