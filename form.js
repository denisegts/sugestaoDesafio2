var incluirCliente = document.querySelector("#incluirCliente")
incluirCliente.addEventListener("click", function(event) {
    event.preventDefault()

    apagaMensagensDeErro();

    let clienteDadosBrutos = obtemDadosBrutosDoCliente(form); 

    var erros = validaDadosDoCliente(clienteDadosBrutos);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros)
    
    } else { //Somente se o preehchimento do formulário não apresentar erros é que serão acionadas as APIs         
      
        /* No caso de inserir o cliente do formulário diretamente na Tabela (Desafio1) */ 
        // let clienteDadosTratados = trataDadosClientes(clienteDadosBrutos)
        // adicionaClienteNaTabela(clienteDadosTratados)

        // Ao invés de inserir na tabela diretamente
        inserirClienteBD(clienteDadosBrutos, matricula)
    }

    adicionaClienteNaTabela(listaClientes);

    listarClientesDoBD(matricula);

    form.reset();

})


function obtemDadosBrutosDoCliente(form) {
    let clienteDadosBrutos = {
        cpf: form.cpf.value,
        nomeCliente: form.nome.value,
        dataNascimento: form.dataNascimento.value,     
        renda: form.renda.value         
    }

    return clienteDadosBrutos
}


function trataDadosClientes(clienteDadosBrutos) {   
    const idadeCalculada = calculaIdade(clienteDadosBrutos.dataNascimento)
    const justificativa = verificaRenda(clienteDadosBrutos.renda) 

    let clienteDadosTratados = {
        cpf: clienteDadosBrutos.cpf,
        nomeCliente: clienteDadosBrutos.nomeCliente,
        dataNascimento: clienteDadosBrutos.dataNascimento,
        idade: idadeCalculada,
        renda: clienteDadosBrutos.renda,  
        justificativa: justificativa 
    }

    return clienteDadosTratados
}

function adicionaClienteNaTabela(listaClientes) {
    apagaTabela()
    listaClientes.forEach(cliente => {
        let clienteTr = montaTr(cliente)
        let tabela = document.querySelector("#tabela-clientes")
        tabela.appendChild(clienteTr)
    });
}


function montaTr(cliente) {
    console.log('cliente:', cliente)
    let clienteTr = document.createElement("tr")
    clienteTr.classList.add("cliente")
    clienteTr.classList.add('cdCli_' + cliente.codigo)

    let rendaFloat = parseFloat(cliente.renda)    
    if (rendaFloat < salarioMinimo) {
        clienteTr.classList.add("cliente-invalido")
    }

    clienteTr.appendChild(montaTd(cliente.cpf, "info-cpf"))
    clienteTr.appendChild(montaTd(cliente.nomeCliente, "info-nomeCliente"))
    //clienteTr.appendChild(montaTd(converteFormatoData(cliente.dataNascimento), "info-dataNascimento"))
    clienteTr.appendChild(montaTd(cliente.dataNascimento, "info-dataNascimento"))
    clienteTr.appendChild(montaTd(cliente.idade, "info-idade"))
    clienteTr.appendChild(montaTd(ajustaRenda(cliente.renda), "info-renda"))
    clienteTr.appendChild(montaTdJustificativa(cliente.justificativa, "info-justificativa"));

    return clienteTr
}


function montaTd(dado, classe) {
    let td = document.createElement("td")
    td.classList.add(classe)
    td.textContent = dado

    return td
}

function montaTdJustificativa(cliente, classe) {
    let td = document.createElement("td")
    td.classList.add(classe)   

    if (cliente.trabEscravo) {          
        td.innerHTML = justificar_input   
    } 

    return td
}


function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = ""

    erros.forEach(function(erro) {
        let li = document.createElement("li")
        li.textContent = erro
        li.classList.add('mensagem-erro')
        ul.appendChild(li)
    })
}


function apagaMensagensDeErro() {
    let mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = ""
}


function apagaTabela() {
    let tabelaClientes = document.querySelector("#tabela-clientes")
    tabelaClientes.innerHTML = ""
}








