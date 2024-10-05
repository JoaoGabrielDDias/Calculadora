Calculadora Simples
Este é um projeto simples de calculadora desenvolvido para entender lógicas básicas utilizando JavaScript, HTML, e Bootstrap. O objetivo principal é aplicar conceitos de desenvolvimento front-end e lógica de operações matemáticas.

Tecnologias Utilizadas
HTML5: Estrutura da página.
CSS3 (com Bootstrap): Estilização e responsividade.
JavaScript: Lógica para manipulação das operações da calculadora.
Funcionalidades
Realiza operações matemáticas básicas: adição, subtração, multiplicação e divisão.
Permite limpar o campo de resultado.
Suporte para operações com decimais.
Exibe o resultado ao clicar no botão "=".
Uso do eval()
Para facilitar a implementação da lógica de precedência de operadores, a função eval() foi utilizada para avaliar as expressões matemáticas. Embora o uso de eval() possa trazer riscos em projetos maiores, neste contexto de aprendizado, ela foi escolhida por simplificar a execução das operações.

Como Usar
Clone este repositório ou baixe os arquivos.
Abra o arquivo index.html em seu navegador.
Use os botões da calculadora para realizar os cálculos.
Estrutura do Código
A função principal do projeto é a função calcular(), que verifica se o input é um valor ou uma ação (como =, c, ou operadores) e utiliza eval() para realizar o cálculo quando necessário.

javascript
Copiar código
function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (valor === "c") {
      document.getElementById("resultado").value = "";
    } else if (valor === "/" || valor === "*" || valor === "-" || valor === "+" || valor === ".") {
      document.getElementById("resultado").value += valor;
    } else if (valor === "=") {
      var valor_campo = eval(document.getElementById("resultado").value);
      document.getElementById("resultado").value = valor_campo;
    }
  } else if (tipo === "valor") {
    document.getElementById("resultado").value += valor;
  }
}
Observações
Este projeto foi desenvolvido para fins de aprendizado e experimentação com a linguagem JavaScript. Não é recomendado o uso de eval() em projetos reais ou com entradas de usuários, pois pode ser inseguro.

Contribuições
Este é um projeto simples e contribuições são bem-vindas. Sugestões para melhorias ou para substituir o uso de eval() são especialmente encorajadas.
