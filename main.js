// Função para mostrar e esconder os projetos
function toggleParagraph(paragraphId) {
    var paragraph = document.getElementById(paragraphId + "_paragraph");
    var iframe = document.getElementById(paragraphId + "_iframe");
    var icon = document.getElementById("icon_" + paragraphId);

    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
        iframe.style.display = "block";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        paragraph.style.display = "none";
        iframe.style.display = "none";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

// Função para calcular minha idade de forma automática
function calcularIdade() {
    var dataNascimento = "1995-02-22";
    var hoje = new Date();
    var dataNasc = new Date(dataNascimento);
    var idade = hoje.getFullYear() - dataNasc.getFullYear();
    var mes = hoje.getMonth() - dataNasc.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }

    document.getElementById("resultado_idade").textContent = "Olá, eu sou Thallys Nogueira, tenho " + idade + " anos e dou as boas-vindas à sua visita ao meu portfólio. Aqui, compartilho um pouco da minha trajetória, uma jornada repleta de aprendizado e desafios que moldaram tanto meu percurso acadêmico quanto profissional. Desde já, agradeço por explorar este espaço onde busco destacar minhas experiências e conquistas.";
}

// Chama a função assim que a página for carregada
document.addEventListener("DOMContentLoaded", calcularIdade);