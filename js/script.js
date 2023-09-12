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

function showProduct(product){
     //console.log(product);

//fange template
const template = document.querySelector("#smallProductTemplate").content;

//lave en kopi
const copy = template.cloneNode(true);

//ændre indholdet
copy.querySelector("h3").textContent = product.productdisplayname;
copy.querySelector("p.price").textContent = product.price;
copy.querySelector("p.articletype").textContent = product.articletype;

//fra jonas video
copy.querySelector(".read-more").setAttribute("href",`produkt.html?id=${product.id}`);


if (product.soldout){
//produkt udsolgt
copy.querySelector("div").classList.add("soldOut")
}
if (product.discount) {
    copy.querySelector("div.product").classList.add("onSale");
    copy.querySelector("p.discount").textContent=product.discount + "%";
  }


//img
copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

//appende
document.querySelector("main").appendChild(copy);
}







/* {
  "id": 1533,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "basecolour": "Red",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Cat Red T-shirt",
  "parsed": 1,
  "soldout": 0,
  "relid": 1533,
  "price": 899,
  "discount": null,
  "variantname": "Cat",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
  "agegroup": "Adults-Men",
  "colour1": "",
  "colour2": "",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "styledesc": null
} */

//mobil format først
