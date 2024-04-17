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