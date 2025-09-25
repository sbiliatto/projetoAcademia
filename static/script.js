function confirmarExclusao(nomeAula) {
            let resposta = confirm(`Tem certeza que deseja excluir sua inscrição na aula de ${nomeAula}?`);
            
            if (resposta) {
                alert(`Inscrição na aula de ${nomeAula} foi excluída com sucesso!`);
            } else {
                alert("Exclusão cancelada.");
            }
        }