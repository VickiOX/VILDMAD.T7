/*Teknisk dokumentation, eksempelvis i form af:
○ En overordnet forklaring af opbygningen og flowet i jeres scripts, gerne i form af diagrammer samt valgte navne-konventioner o.lign.
○ Forklarende kommentarer i koden (funktioner, variabler og hvordan disse anvendes)
○ Hvilke tiltag i har gjort ift. at gøre sitet mere bæredygtigt
○ Dokumentation af hvordan Git og branches er blevet brugt
*/

const url = ""

fetch(url)
.then( res => res.json())
.then(Show);

function Show(){
    console.log();
}


fetch("https://jrbobbgkocqmvubehqtz.supabase.co/rest/v1/skovdata?select=id",{
    method:"GET",
    headers:{
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyYm9iYmdrb2NxbXZ1YmVocXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5OTk5MTUsImV4cCI6MjAwOTU3NTkxNX0.Icz35OBcSiV2DSuLi9aszBlD1Bz2SJIqiTcaYc-9rSY"
    }
})
.then((res) => res.json())
.then(showData);

function showData(items){
    console.log(items);
}


function Show(){
    console.log();
}
//fetch data og brug data som et array
const subcategories = ['Løvskov', 'Nåleskov']; //erstat med fetch

 //fange template
 const subcategory_template = document.querySelector("#subcategory_template").content;
 const product_template = document.querySelector("#product_template").content;


const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
document.querySelector("h1").textContent = category
document.querySelector("." + category).classList.add("active");

// fetch
fetch("https://kea-alt-del.dk/t7/api/products?limit=50&start=10&category=" + category)
.then(res=>res.json())
.then(showProducts);

function showProducts(){
    //looper og kalder showProuct ental
   // products.forEach(showProduct);


    //template debugging
    console.table(subcategories);
    subcategories.forEach(debugShowCategories);
}

function debugShowCategories(subcategory){
  console.log(subcategory);



  //lave en kopi
  const subcategory_template_copy = subcategory_template.cloneNode(true);
  subcategory_template_copy.querySelector("h2").textContent = subcategory;

  const products = ['Kantarel','Bøg', 'Karl Johan', 'Skov jordbær', 'Skovfyr']; //erstat med fetch
  products.forEach(product => {
    console.log(product);
    const product_template_copy = product_template.cloneNode(true);
    product_template_copy.querySelector("h3").textContent= product;
    subcategory_template_copy.querySelector(".grid").appendChild(product_template_copy);
  });
  //appende
  document.querySelector("main").appendChild(subcategory_template_copy);
}
