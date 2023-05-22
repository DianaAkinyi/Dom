document.body.style.backgroundColor='silver'
document.getElementById('title').style.color='green';


let h3Tags = document.getElementsByTagName("h3");
for (var i = 0; i < h3Tags.length; i++) {
  h3Tags[i].style.textTransform = "uppercase";
}
 let img = document.createElement("img");
 img.src = "https://i.pinimg.com/236x/e4/91/b7/e491b7b88147b5d8b6db6b5df39da8af.jpg";

 img.style.border = "1px solid orange";
 img.style.borderRadius = "10px";

 document.body.appendChild(img);
 
let fruList = document.getElementById("fruList");
let newFruit = document.createElement("li");
newFruit.innerHTML = "Banana";
fruList.appendChild(newFruit);


let vegList = document.getElementById("vegList");
let newVegetable = document.createElement("li");
newVegetable.innerHTML = "Cherry";
vegList.appendChild(newVegetable);
