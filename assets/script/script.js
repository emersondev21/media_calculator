document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const mediaResultado = document.getElementById("mediaResultado");
    const resultadoFinal = document.getElementById("resultadoFinal");

    calcularButton.addEventListener("click", function () {
        const nota1 = parseFloat(document.getElementById("nota1").value);
        const nota2 = parseFloat(document.getElementById("nota2").value);
        const nota3 = parseFloat(document.getElementById("nota3").value);

        if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
            const notas = [nota1, nota2, nota3];
            const maioresNotas = notas.sort((a, b) => b - a).slice(0, 2); // Obtém os dois maiores valores
            const media = (maioresNotas[0] + maioresNotas[1]) / 2;

            const notaFinal = (10.00 - media);

            mediaResultado.textContent = media.toFixed(2); // Limita a 2 casas decimais
            resultadoFinal.textContent = notaFinal.toFixed(2); // Limita a 2 casas decimais

        } else {
            mediaResultado.textContent = "Preencha todas as notas corretamente.";
        }
    });
});