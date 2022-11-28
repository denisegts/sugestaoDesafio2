function tratarDataNascimento(data_nascimento) {
    let dia = new Date(data_nascimento)
    dia.setDate(dia.getDate() + 1)
    return dia.toLocaleDateString()
}


function converteFormatoData(dataNascimento){    
    let dia = dataNascimento.substring(8, 10)
    let mes = dataNascimento.substring(5, 7)
    let ano = dataNascimento.substring(0, 4)
    let dataConvertida = dia + "/" + mes + "/" + ano
    return dataConvertida
}


function calculaIdade(dataNascimento){
    //Convertando data de Hoje e data de Nascimento em milesegundos
    const hoje = new Date() // Data de hoje
    const nascimento = new Date(dataNascimento) // Outra data no passado

    // Cálculo de Idade em Anos utilizando MILISEGUNDOS
    const diferencaMilisegundos = Math.abs(hoje.getTime() - nascimento.getTime()) //Subtrai uma data pela outra    
    const idade = Math.ceil(diferencaMilisegundos / (1000 * 60 * 60 * 24 * 365)) // Divide o total pelo total de milisegundos correspondentes a 1 ano.

    //OU AINDA, cálculo de Idade utilizando meses e anos
    let diferencaMeses = ajustaMesAno(hoje) - ajustaMesAno(nascimento)
    let idadeEmAnos = Math.floor(diferencaMeses / 12)
    let idadeEmMeses = diferencaMeses % 12
    let idadeComAnoseMeses = `${idadeEmAnos} anos e ${idadeEmMeses} meses`

    return idadeComAnoseMeses
}


function ajustaMesAno(d) {
    return d.getFullYear() * 12 + d.getMonth() + 1
}

function ajustaRenda(renda){
    let rendaConvertida = parseFloat(renda).toLocaleString('pt-br',{style: 'decimal',minimumFractionDigits:2})
    return rendaConvertida
}



function somarAsRendas(){
    let clientes = document.querySelectorAll(".cliente")
    let somaFloat = 0
    // console.log('clientes:',clientes)
    // console.log('somaFloat:',somaFloat)

    for (var i = 0; i < clientes.length; i++) {
        let cliente = clientes[i]
        let tdRenda = cliente.querySelector(".info-renda")
        let rendaString = tdRenda.textContent
        let rendaFloat = parseFloat(rendaString.toString().replace(/\./g, '').replace(',','.'))
        somaFloat = somaFloat + rendaFloat
        // console.log('cliente:',cliente)
        // console.log('tdRenda:',tdRenda)
        // console.log('rendaString:',rendaString)
        // console.log('rendaFloat:',rendaFloat)
    }  
    
    let somatorioRendas = document.querySelector("#somatorioRendas")
    let somaString = somaFloat.toLocaleString('pt-br',{style: 'decimal',minimumFractionDigits:2})
    somatorioRendas.innerHTML = somaString

}

/*
Função Desativada devido utilização de APIs
function verificaRenda(renda) {
    let rendaFloat = parseFloat(renda)
    
    if (rendaFloat < salarioMinimo) {

        let justificativa = prompt("Valor informado da renda é inferior a um salário mínimo (R$ " + salarioMinimo.toLocaleString('pt-br',{style: 'decimal',minimumFractionDigits:2}) + "). Justifique:", "")
        if (justificativa != "") {
            alert("Obrigado por justificar!")
          }
        else {
            justificativa = "Faltou justificar!"
        }     

        return justificativa
                
    } else {
        return ""
    }   
}
*/

