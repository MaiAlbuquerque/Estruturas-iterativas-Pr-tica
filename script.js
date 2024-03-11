
let letrasConcatenadas = '';

function obterLetras() {
    while (true) {
        let letraInput = document.getElementById('letraInput').value;

        if (letraInput === '') {
            alert("Letra inserida com sucesso.");
            return; // Retorna sem fazer nada se a caixa de texto estiver vazia
        } else if (/^[a-zA-Z]$/.test(letraInput)) {
            letrasConcatenadas += letraInput + ', ' ; // Adiciona um espaço após cada letra
            document.getElementById('letraInput').value = ''; // Limpa a caixa de texto após cada inserção
        } else {
            alert("Apenas letras podem ser introduzidas!");
            return; // Retorna sem fazer nada se a entrada não for uma letra
        }
    }
}

function cancelar() {
    alert("Letras digitadas: " + letrasConcatenadas);
    letrasConcatenadas = ''; // Limpa as letras digitadas
    document.getElementById('letraInput').value = ''; // Limpa a caixa de texto

    
}