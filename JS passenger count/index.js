let countEl= document.getElementById("count-el")
let saveEl =document.getElementById("save-el")
console.log(countEl)

let count=0
function increment(){
    count= count+1
    countEl.innerText=count
}
 function save(){
    console.log(count)
 }
 save()