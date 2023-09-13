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



