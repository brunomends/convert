console.log('AQUI!!!!!')    
let url = "http://economia.awesomeapi.com.br/json/USD-BRL"
// fetch(url).
// then(response => response.json())
// .then(jsonBody => {})
//document.querySelector("#app").innerHTML = jsonBody

async function getContent(){
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        show(data)  
    } catch (error) {
        console.log(error)
    }
}

getContent()

function show (moeda) {
    let output = ''

    for ( let m of moeda) {
        output += `<li>${m.name}</li>`
    }

    document.querySelector('main').innerHTML = output
}

