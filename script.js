/*console.log('hello');
a=8;
var a=8;
let g = 23;

    var a=20;
    
console.log(typeof(g));

var tr=true;
console.log(typeof(tr));

let person={
    name:'anna',
    age:15,
    location:'TVM'
}
console.log(person.name);
let arr=['Heera','ravi',54]
console.log(arr.length)
let arr_obj=[{age:23,location:'TVM'},{age:25,location:'kochi'}]
console.log(arr_obj[1].location)
// relative

function add(a,b)
{
    var sum=a+b;
    // console.log(sum)
    return a,b
}
let result=add (20,30)
console.log(result)
var a=1;
var b=++a;
console.log(a);
console.log(b);*/
//conditions
var a1=99;
var a2='99';
if(a1>a2)
{
    console.log('a1 is greater')
} else if(a1==a2)
{
    console.log('a1 is equal to a2 and the value is '+a1)
}
else
{
    console.log('a2 is greater')
}

var arr2=[29,39,49,59]
// for printing index numbers
// for (let  i= 0;  i< arr.length; i++) {
//    console.log(arr2[i])
//     }
//for printing elements
for(const i of  arr2)
{
    console.log(i)
}
