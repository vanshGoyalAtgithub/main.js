// console.log('hello vansh ')
// console.error('error')
// console.warn('error to')
// var age =30
// console.log(age)
/*
const ae =30
let name = 'vansh goyal'
const x =null
const g = undefined
const isCool = true
let z ;
console.log(typeof z)
*/
// string concatanation
//console.log('my name is ' + name + 'and my age is ' + age)
//
/*
console.log('my name is $ { name}')
console.log(name.length)
console.log(name.toUpperCase()+name.toLowerCase())
console.log(name.substring(0,5));
console.log(name.split(''));
*/
/*
const str = 'tech,game,love,health,money'
console.log(str.split(','));
*/
/*
const  array = new Array(1,2,3,4,5,5,'you can puyt different data types ');
console.log(array)
array[3] = 'grapes'
array.push('mangoes')
array.unshift('banana')
console.log(array)
const cv = ' js is not static type' 
console.log(cv)
console.log(Array.isArray(cv))
console.log(array.indexOf('mangoes'))
*/



/*
const person= {
    fname:'vansh goyal',
    lastname:'goyal',
    age:30,
    hobbies:['chess','coding','walking'],
     adress:{
        street:'kathaa street',
        city:'meerut city',
        state:'uttar pardesh'

     }
}
console.log(person)
console.log(person.hobbies[2])
const {fname,lastname,adress:{street}} = person;
console.log(fname)
console.log(street)
person.email='vansh.goel.0403@gmail.com'
console.log(person)
*/


/*

const todos =[
    {
        id:1,
        task :'take oput trash',
        isCompleted:true



    },

    {
        id:2,
        task :'meeting',
        isCompleted:false



    }
,
    {
        id:3,
        task :'dsa',
        isCompleted:false



    }
];
console.log(todos)
console.log(todos[1].id)
const jso = JSON.stringify(todos);
console.log(jso)




///for loop

for(let i=0;i<5;i++){
    console.log('for number ${i}');
}


// let i=0
// while(i<10){
//     console.log(i)
//     i++;
// }

// for(let i=0;i<todos.length;i++){
//     console.log(todos[i]);
// }

// for(let todo of todos){
//     console.log(todo.id)
// }
// todos.forEach(function(todos){
//    return todos.text//TODO output => not defined
// })

// todos.map(function(todos){
//     return todos.text//TODO output => not defined
//  })

// console.log(todos.text)

// const todoText = todos.map(function(todos){return todos.text})
// console.log(todoText)
// const todoCompleted = todos.map(function(todo){return todo.isCompleted==true}).map(function(todos){
//     return todos.text
// })

// // forEach loop
// todos.forEach(function (todo){
//     console.log(todos.text)
// })

 const todoText =todos.map(function (todo){
     return todo.task;
})
console.log(todoText)
const todoT =todos.filter(function (todo){
    return todo.isCompleted==true;
})
console.log(todoT)


const todoT2 =todos.filter(function (todo){
    return todo.isCompleted==true;
}).map(function todo(){return todo.task})
console.log(todoT2)
*/
const x=10
if(x===10) console.log("true")
const y='10'
if(x==y) console.log("test 1 passsed")
if(x===y) console.log('case 2 is passed ')



function addnums(num1,num2){
    console.log(num1+num2)

}
addnums(3,NaN)
function addnums1(num1=1,num2=1){// usiing defusalt values
   // console.log(num1+num2)
return num1+num2

}
//ddnums1()


// arro function
const add = (num1,num2)=>{
    return num1+num2
}
console.log(add(5,3))

//concise arro function
const cadd = (num1,num2) => num1+num2
console.log(cadd(2,4))
const increment = num1 => num1+5
console.log(increment(5))