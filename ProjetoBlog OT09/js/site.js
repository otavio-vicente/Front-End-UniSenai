function validaInscricao(){
    var cep = document.getElementById('txtcep').value;
    let cepRegex = /^\d{5}-\d{3}$/;
    if (cepRegex.test(cep)) {
        alert("CEP válido.");
    } else {
        alert("CEP inválido. Por favor, insira um CEP no formato XXXXX-XXX.");
    }
}