const number1 = 4;
const arr1 = [545, 343, 'dsdsdsd', 34,];
let number2 = 4;
number2 = 9;
console.log(arr1)
arr1[1] = 55
console.log(arr1)

function cl(params) {
    console.log(params)
}


const x = document.querySelector('#x');
console.log(x);
const y = document.querySelector('#y');
console.log(y);
const box = document.querySelector('.box_content');
const col = document.querySelector('#color');
const btn = document.querySelector('#btn');
const ia = document.querySelectorAll('#ia');
cl(ia)
const tn = document.querySelector('#tn')
x.addEventListener('click', (e) => {
    box.style.width = e.target.value + 'px';
    cl(e.target.value)
})
y.addEventListener('click', (e) => {
    box.style.height = e.target.value + 'px';
    cl(e.target.value)
})
col.addEventListener('input', (e) => {
    box.style.background = e.target.value;
    cl(e.target.value)
})
btn.addEventListener('click', () => {
    ia.forEach(element => {
        cl(element.classList)
        element.classList.toggle("pol")
     });
})
tn.addEventListener('input', (e) => {
    box.style.boxShadow = `black 0 0 ${e.target.value}px`;
    cl(e.target.value)
})



