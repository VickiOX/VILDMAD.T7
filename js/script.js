/*Teknisk dokumentation, eksempelvis i form af:
○ En overordnet forklaring af opbygningen og flowet i jeres scripts, gerne i form af diagrammer samt valgte navne-konventioner o.lign.
○ Forklarende kommentarer i koden (funktioner, variabler og hvordan disse anvendes)
○ Hvilke tiltag i har gjort ift. at gøre sitet mere bæredygtigt
○ Dokumentation af hvordan Git og branches er blevet brugt
*/


fetch("https://jrbobbgkocqmvubehqtz.supabase.co/rest/v1/Vildmad_produkter?select=*",{//brug * det henter alt
    method:"GET",
    headers:{
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyYm9iYmdrb2NxbXZ1YmVocXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5OTk5MTUsImV4cCI6MjAwOTU3NTkxNX0.Icz35OBcSiV2DSuLi9aszBlD1Bz2SJIqiTcaYc-9rSY"
    }
})
.then((res) => res.json())
.then(showData);

function showData(items){
    console.table(items);
    items.forEach(item => {
      console.log(item.name)
    })
}

//fetch data og brug data som et array
const subcategories = ['Løvskov', 'Nåleskov']; //hard code

 //fange template
 const product_template = document.querySelector("#product_template").content;

 //breadcrumb is active, markere hvilken kategories der ses
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
document.querySelector("h1").textContent = category
document.querySelector("." + category).classList.add("active");


debugShowCategories()
function debugShowCategories(){




  //lave en kopi


  fetch("https://jrbobbgkocqmvubehqtz.supabase.co/rest/v1/Vildmad_produkter?select=*&" + category + "=eq.true",{//brug * det henter alt
  method:"GET",
  headers:{
      apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyYm9iYmdrb2NxbXZ1YmVocXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5OTk5MTUsImV4cCI6MjAwOTU3NTkxNX0.Icz35OBcSiV2DSuLi9aszBlD1Bz2SJIqiTcaYc-9rSY"
  }
})
.then((res) => res.json())
.then(products =>{
  products.forEach(product => {
    console.log(product);
    const product_template_copy = product_template.cloneNode(true);
    product_template_copy.querySelector(".text2").id = product.id; //indsættelse af id til article
    product_template_copy.querySelector("h3").textContent= product.name;
    product_template_copy.querySelector(".text1").textContent= product.bio;
    product_template_copy.querySelector(".text2").textContent= product.season;
    product_template_copy.querySelector(".product_img").src = product.image;


    // for at kunne ændre på text 2 via onclick skal vi have en identificator på click elementet (data-id)
    //
    product_template_copy.querySelector(".ikon1").setAttribute("data-id", product.id);
    product_template_copy.querySelector(".ikon1").setAttribute("data-id", product.id);
    product_template_copy.querySelector(".ikon2").setAttribute("data-id", product.id);
    product_template_copy.querySelector(".ikon3").setAttribute("data-id", product.id);
    product_template_copy.querySelector(".ikon4").setAttribute("data-id", product.id);

    //onclick er js event og ikon er det element man klikker på
    product_template_copy.querySelector(".ikon1").onclick = function(ikon){
      //ikon.currentTarget bruger vi fordi at ikon ikke har attributter

    //ikon.currentTarget bruger vi fordi at ikon ikke har attributter
      // getElementById bruger vi fordi qs ikke virker med id'er som er numre
    product_template_copy.querySelector(".ikon1").onclick = function(ikon){
      document.getElementById(ikon.currentTarget.getAttribute("data-id")).textContent = product.season;

    }

    product_template_copy.querySelector(".ikon2").onclick = function(ikon){
      document.getElementById(ikon.currentTarget.getAttribute("data-id")).textContent = product.sankested;
    }

    product_template_copy.querySelector(".ikon3").onclick = function(ikon){
      document.getElementById(ikon.currentTarget.getAttribute("data-id")).textContent = product.sankning;
    }

    product_template_copy.querySelector(".ikon4").onclick = function(ikon){
      document.getElementById(ikon.currentTarget.getAttribute("data-id")).textContent = product.håndtering;
    }

    //appende

    if(product.Løvskov == true){
      document.querySelector(".loev .grid").appendChild(product_template_copy)
    } else if(product.Nåleskov == true){
      document.querySelector(".naal .grid").appendChild(product_template_copy)
    }
  }});
});
}
