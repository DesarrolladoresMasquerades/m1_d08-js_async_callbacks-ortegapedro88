console.log("JS Loaded")

const h1Tag = document.getElementsByTagName("h1")[0] 
/*

setTimeout(
    ()=>{
        console.log("I am a pizza")
        h1Tag.innerText += "  I like pizza"
    },
    (5 * 1000) // this is real-time in milliseconds
)

setTimeout(
    ()=>{
        console.log("I am polpetta al ragu")
        h1Tag.innerText += " and I also like polpette"
    },
    (2 * 1000) // this is real-time in milliseconds
)

setTimeout(
    ()=>{
        console.log("I like steak")
        h1Tag.innerText += " and I also like steak"
    },
    (3 * 1000) // this is real-time in milliseconds
)
*/
const randomStr = ["i like piza", "with pinneaple","with cheese", "with ham"]

function onButton1Click(){
    console.log("Button 2 clicked")
    setTimeout(
    ()=>{h1Tag.innerText += " and I also like steak"},
    Math.random() * 5 * 1000)
}

function onButton2Click(){
    console.log("I am polpetta al ragu")
    h1Tag.innerText += " and I also like polpette"
}

function onButton3Click(){
    console.log("I am a pizza")
    h1Tag.innerText += "I like pizza"
}

//--------timer-------------

const counter = document.getElementById("counter")

const myInterval = setInterval(
    ()=> {counter.innerText = parseInt(counter.innerText) + 1
    
        if(counter.innerText === "5")stopCounter()},    
    1 * 1000
)
//setTimeout(()=>{stopCounter()},5*1000 )
//-----------stop the clock with button

const stopCounter = ()=> clearInterval(myInterval)
