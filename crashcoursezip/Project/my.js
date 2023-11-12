
/*// console.log(document.getElementById("my-form"));
// const form = document.getElementById("my-form");
// query = document.querySelector('.container')
// console.log(query)
// console.log(document.querySelector('h1'))
// console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))
*/
// const items=document.querySelectorAll('.item')
// items.forEach((item)=>console.log(item))
//TODO lets manipulate the data 
// const ul = document.querySelector('.items');
// //ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent= 'hello vansh '
// ul.children[1].innerText = 'hello javascript'
// ul.lastElementChild.innerHTML='<h4>hello<h4>'
// const btn = document.querySelector('.btn')
// btn.style.background='red';
//events 

// const btn = document.querySelector('.btn')
// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//     document.querySelector("#my-form").style.background='#ccc';
//     console.log(e.target.className)
//   //  document.querySelector('body').classList.add('bg-dark')
//   document.querySelector('.items').lastElementChild.innerHTML='<h1> hello happy man</h1>'
// })
//lets get the little form script

const myform =document.querySelector('#my-form')
const name1 =document.querySelector('#name')
const email =document.querySelector('#email')
const msg =document.querySelector('.msg')
const userlist =document.querySelector('#users')
myform.addEventListener('submit',onsubmit)
 function onsubmit (e) {
    e.preventDefualt();
    console.log(name1.value);


 }