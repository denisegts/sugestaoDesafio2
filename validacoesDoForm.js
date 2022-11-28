function validaDadosDoCliente(cliente) {
    let  erros = []

    if (!validaCPF(cliente.cpf)) {
        erros.push('Por gentileza, verifique se foram informados os 11 números do CPF corretamente.')
    }

    if (!validaNomeCliente(cliente.nomeCliente)) {
        erros.push('Por gentileza, informe o nome')
    }

    if (!validaDataNascimento(cliente.dataNascimento)) {
        erros.push('Por gentileza, informe a data de nascimento válida.')
    }

    if (!validaRenda(cliente.renda)) {
        erros.push('Por gentileza, informe o valor da renda do cliente.')
    }

    return erros
}


function validaCPF(cpf) {   
    return cpf.length === qtdCharCPF
}


function validaNomeCliente(nomeCliente) {
    return nomeCliente.length !== 0
}


function validaDataNascimento(dataNascimento) {
    const converteData = Date.parse(dataNascimento)
    const dataValida = !isNaN(converteData)
    return dataValida
}


function validaRenda(renda) {
    const rendaValida = parseFloat(renda) > 0
    return rendaValida
}

