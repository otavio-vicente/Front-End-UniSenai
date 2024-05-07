function validaInscricao() {
    
    if(document.frminscricao.txtnome.value == ""){
        alert("Preencha o campo Nome.");
        document.frminscricao.txtnome.focus();
        return false;
    }
    
    var fone = document.getElementById('fone').value;
    var foneRegex = /^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$/; // Expressão regular corrigida

    if(foneRegex.test(fone)){
        alert("Telefone valido")
    } else {
        alert("Preencha o campo Telefone corretamente.");
    }

    var cep = document.getElementById('txtcep').value;
    var cepRegex = /^[0-9]{5}-[0-9]{3}$/; // Expressão regular corrigida
    if (cepRegex.test(cep)) {
        alert("CEP válido.");
    } else {
        alert("CEP inválido. Por favor, insira um CEP no formato XXXXX-XXX.");
    }

    if (!document.querySelector('input[name="radiosexo"]:checked')) {
        alert("Por favor, selecione uma opção.");
        return false;
    }

    var email = document.getElementById('email').value;

    // Expressão regular para validar o formato do email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o email corresponde à expressão regular
    if (!emailRegex.test(email)) {
    alert("Por favor, insira um email válido.");
    return false;
    }

    if (!document.getElementById('checkbox').checked) {
        alert("Por favor, selecione a opção.");
        return false;
    }

}

$(document).ready(function(){
    //Carrega cabeçalho, menu e rodapé aos respectivos
    $("header").load("/ProjetoBlogOT10/pages/general/cabecalho.html");
    $("nav").load("/ProjetoBlogOT10/pages/general/menu.html");
    $("footer").load("/ProjetoBlogOT10/pages/general/rodape.html");
});
    