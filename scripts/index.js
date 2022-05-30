// Add the coffee to local storage with key "coffeefu
let url="https://masai-mock-api.herokuapp.com/coffee/menu"
let coffee=JSON.parse(localStorage.getItem("coffee"))||[];
async function getData(){
 try{
     let res =await fetch(url);
     let product=await res.json();
     appendData(product.menu.data)
     console.log(product.menu.data)
 }catch(err){
     console.log(err)
 }
}

getData()
function appendData(data){
    
    data.forEach(function(el){
        let div1=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.image;
        let price=document.createElement("h3")
        price.innerHTML="Price:"+" "+el.price;
        let p1=document.createElement("p")
        p1.innerHTML=el.ingredients[0]
        let p2=document.createElement("h2")
        p2.innerHTML=el.title;
        let addBtn=document.createElement("button")
        addBtn.innerHTML="Add to Bucket"
        addBtn.addEventListener("click",function(){
            addtoBucket(el)
            // console.log(addtoBucket(el))
        })

        
        div1.append(image,p2,p1,price,addBtn)
        let menu=document.getElementById("menu").append(div1)

    })
}
function addtoBucket(element){
  
        coffee.push(element)
        localStorage.setItem("coffee",JSON.stringify(coffee))
    
}
console.log(coffee)
