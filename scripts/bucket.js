// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffee=JSON.parse(localStorage.getItem("coffee"))||[];
function display(data){
    let bucket=document.getElementById("bucket")
    bucket.innerHTML=null
    let button=document.createElement("button")
    button.innerHTML="Checkout"
    button.addEventListener("click",function(){
        locationChange()
    })
    bucket.append(button)
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
        addBtn.innerHTML="Remove"
       
        addBtn.addEventListener("click",function (event){
            Delete(el.id)
            console.log(Delete)
            })
        div1.append(image,p2,p1,price,addBtn)
        bucket.append(div1)
    })
}
display(coffee)
function Delete(id){
    coffee=coffee.filter(function(element){
        return element.id != id;
    })
    display(coffee);
    localStorage.setItem("coffee",JSON.stringify(coffee))
 }
 function locationChange(){
     window.location.href="index.html"
 }