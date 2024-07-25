
function add(num1:number,num2:number){
    // we can types on variable and parameter to make it clear which kind of value is accepted here ex : number type,string type,boolean type , object type  , array types
    return num1 + num2;
}
console.log(add(1,2))

const num1Element = document.getElementById('num1') as HTMLInputElement; //HERE I DEFINE THE TYPES 
const num2Element = document.getElementById('num2') as HTMLInputElement ;
const buttonElement = document.querySelector('button')!; //ignore the null case and take the other value 

buttonElement.addEventListener('click',()=>{
    const num1 = num1Element.value; //value always return number 
    const num2 = num2Element.value;
    const result = add(+num1,+num2);
    console.log(result)
    
    const stringResult = add(num1,num2);
console.log(stringResult)
console.log(add(true,false)) //what if i want to accepts strings and number than we can use the features called union types code more than one types num1: number | string , num1 either be number or string 
//u can use typeof  for manipulate the result

// object and array types 
// here HTMLInputElementis of object type because we have dom object here in js we can also define our own object type

const numResult = [];
const numArr : number[] = [] //numarr full of number


function printResult(resultObj:{val:number; timestamp:Date}){ //object type
    console.log(resultObj.val)
    numResult.push(val)
}
printResult({val:result,timestamp:33:48})

// type :this allow to use create own type 
type NumorString = number | string
// and u can use NumorString anywhere 
type Resuld = {val:number;tymestamp:Date}

// alternative  is interface
interface ResultObj {
    val :number;timestamp:Date
}
//the diff is interface is force class to implement some functionality
})

// understanding generic: simply  atype that interact with another types array is a great example that list of data and integrate with other types
// const arr :Array = [];
const arr :Array<number> = [];
// we can use promise in generic types
const  myPromise = new Promise<string> ((resolve,reject)=>{
    setTimeout(()=>{
        resolve('It worked')
    },1000);
});
myPromise.then((result)=>{
    console.log(result)
})

