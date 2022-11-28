var tabelaClientes = document.querySelector("#tabela-clientes")


tabelaClientes.addEventListener("dblclick", function(event) {
    /* Como era removido antes do consumo das APIs */
    // event.target.parentNode.classList.add("fadeOut")
    // setTimeout(function() {
    //     event.target.parentNode.remove()
    // }, 700)  


    //Utilizando APIs
    const string_de_classes = event.target.parentNode.className  
    console.log('string_de_classes:', string_de_classes)

    const array_de_classes = string_de_classes.split(" ") 
    console.log('array_de_classes:', array_de_classes)

    let cdCli = array_de_classes[1]
    console.log('cdCli:', cdCli)

    let codCliente = cdCli.substring(6, cdCli.length)
    console.log('codCliente:', codCliente)

    deletarClienteBD(codCliente)
})







