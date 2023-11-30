<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Visitantes</title>

<body>
    <h1>Bem-vindo ao Meu Site</h1>
    <p>Total de visitantes: <span id="contador">0</span></p>

    <script>
        // Simulação de um contador simples usando o armazenamento local
        // Em um ambiente real, você precisaria de um back-end para uma solução mais robusta

        // Verifica se o contador já está armazenado no armazenamento local
        let visitantes = localStorage.getItem('visitantes');

        // Se não houver contador, inicializa com 0
        if (!visitantes) {
            visitantes = 0;
        }

        // Converte a string para um número inteiro
        visitantes = parseInt(visitantes);

        // Atualiza o contador na página
        document.getElementById('contador').innerText = visitantes;

        // Incrementa o contador a cada visita
        visitantes++;

        // Atualiza o armazenamento local com o novo valor do contador
        localStorage.setItem('visitantes', visitantes);
    </script>
</body>
</html>
