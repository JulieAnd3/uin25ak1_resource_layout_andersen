
let key = "HTML" //En variabel som forandrer seg utifra hvilken side brukeren er på

//Variabler for de forskjellige knappene 
const btnHTML = document.getElementById("htmlSite")
const btnCSS = document.getElementById("cssSite")
const btnJS = document.getElementById("javaSite")
const btnReact = document.getElementById("reactSite")
const btnCMS = document.getElementById("sanityCmsSite")

//Event listner for knappene
btnHTML.addEventListener("click", () =>{
    key = "HTML"
    resoursesFunc()
})
btnCSS.addEventListener("click", () =>{
    key = "CSS"
    resoursesFunc()
})
btnJS.addEventListener("click", () =>{
    key = "JavaScript"
    resoursesFunc()
})
btnReact.addEventListener("click", () =>{
    key = "React"
    resoursesFunc()
})
btnCMS.addEventListener("click", () =>{
    key = "Sanity and headless CMS"
    resoursesFunc()
})

function resoursesFunc(){
    let resourcesPrint = ""
    let sourcesPrint = "" //Det funker. Ikke rør. Gir ikke helt mening. Det går bra
    
    resources.filter((res) => res.category === key).map(resource => resourcesPrint += `       
        <article>
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul>
            ${resource.sources.map(source => sourcesPrint = ` 
                <li><a href="${source.url}">${source.title}</a></li>
            `)} 
            </ul>
        </article>`) 
        //Det funket faktisk og gir litt mening. Wow.

        //Printe ut resultatet 
        document.getElementById("mainPrint").innerHTML = resourcesPrint
}


//Kan hele printe greien være en funskjon? Så når du trykker på knappen starter du funksjonen og den bare skriver ut den siden man skal ha?
//Ikke helt vi forandrer hvilken nøkkel filteret ser etter også skriver den ut etter rikitg nøkkel


resoursesFunc()