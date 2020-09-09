let qtde = document.getElementById('us-inputTxt')
let url = `http://economia.awesomeapi.com.br/json/all/USD-BRL,USDT-BRL,CAD-BRL,AUD-BRL,EUR-BRL,BTC-BRL,ARS-BRL`
 function limpa() {
    document.querySelector('.main').innerHTML = ''
 }

async function getContent() {
    
    limpa()
    
    try {
        const response = await fetch(url)
        const data = await response.json()
        const result = Object.values(data)

        //O método map percorre o array e executa uma ação para cada item

        result.map(moeda => { 
            // Adicionando os elementos na tag ul
            let venda = qtde.value * moeda.ask
            let compra = qtde.value * moeda.bid
            document.querySelector('.main')
            .innerHTML += `<li>${moeda.name}</li>` + `<li>Valor de venda: R$ ${venda.toFixed(2)}</li>` + `<li>Valor de compra: R$ ${compra.toFixed(2)}</li>` + `<br>`
        })

        // O método toFixed fixa duas casas decimais após a vírgula no valor

    } catch (error) {
        console.log(error)
    }

}


