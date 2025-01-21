let resourcesPrint = ""
let sourcesPrint = ""

resources.map((resource, index) => resourcesPrint += `       
        <article>
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul>
            ${resource.sources.map(source => sourcesPrint = `
                <li><a href="${source.url}">${source.title}</a></li>
            `)}
            </ul>
        </article>`) 

    console.log(resourcesPrint)

document.getElementById("mainPrint").innerHTML = resourcesPrint