let value = document.getElementById("cart-value")
let buttons = document.getElementsByClassName("button")
let cart = document.getElementById("cart")
cart.addEventListener("click" , showTotal)
for(let i=0 ; i<buttons.length;i++){
    buttons[i].addEventListener("click" , ()=>{
        Add(event)
    } )
}


let sum = 0 ; let obj={} ; let count = 0
function Add(event){
//   sum += 
let paragraphText = event.currentTarget.parentElement.querySelector("p").textContent;
let Name = event.currentTarget.parentElement.previousElementSibling.querySelector("h3").textContent

if(obj[Name]==undefined){
    obj[Name]= 1
}else{
    obj[Name]++
}
count++
value.innerText = count
console.log(typeof(+paragraphText.slice(1)))
sum+= +paragraphText.slice(1)
}

// show Total

function showTotal(){

    for (let keys in obj){
        console.log(`Item Name:${keys}-Quantity:${obj[keys]}`)
    }

    console.log(`The Total Amount is ${Math.floor(sum)}$ and ${Math.floor(100*(sum-Math.floor(sum)))}cents`)

}