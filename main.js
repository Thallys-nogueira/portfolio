// Função para mostrar e esconder os projetos
function toggleParagraph(paragraphId) {
    var paragraph = document.getElementById(paragraphId);
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}