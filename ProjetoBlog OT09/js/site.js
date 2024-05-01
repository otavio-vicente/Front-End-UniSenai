function validaInscricao() {
    
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

}
    