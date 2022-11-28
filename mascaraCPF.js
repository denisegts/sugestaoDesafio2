
 /*
    Sugestão de máscara do CPF disponível em:
        https://pt.stackoverflow.com/questions/290505/máscara-de-entrada-para-cpf-no-formulário-html-sem-plugin
*/

 function mascaraDoCPF(i){
    //Ex.: <input oninput="mascaraDoCPF(this)" type="text">

    let v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length-1);
        return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
}