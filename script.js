function confirmarExclusao(nomeAula) {
            let resposta = confirm(`Tem certeza que deseja excluir sua inscrição na aula de ${nomeAula}?`);
            
            if (resposta) {
                alert(`Inscrição na aula de ${nomeAula} foi excluída com sucesso!`);
            } else {
                alert("Exclusão cancelada.");
            }
        }

function toggleMenu() {
        const menu = document.getElementById("menu");
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    }


function excluir(botao) {
    if (confirm("Tem certeza que deseja excluir esta inscrição?")) {
        botao.parentElement.remove();
        alert("Inscrição excluída com sucesso!");
    } else {
        alert("Exclusão cancelada.");
    }
}