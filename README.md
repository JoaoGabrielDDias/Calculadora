 <h1>📱 Calculadora Simples</h1>
    <p>Este é um projeto simples de <strong>calculadora</strong> desenvolvido para entender lógicas básicas utilizando <strong>JavaScript</strong>, <strong>HTML</strong> e <strong>Bootstrap</strong>. O objetivo principal é aplicar conceitos de desenvolvimento front-end e lógica de operações matemáticas.</p>

    <h2>🚀 Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>HTML5</strong>: Estrutura da página.</li>
        <li><strong>CSS3</strong> (com <strong>Bootstrap</strong>): Estilização e responsividade.</li>
        <li><strong>JavaScript</strong>: Lógica para manipulação das operações da calculadora.</li>
    </ul>

    <h2>⚙️ Funcionalidades</h2>
    <ul>
        <li>Realiza operações matemáticas básicas: adição, subtração, multiplicação e divisão.</li>
        <li>Permite limpar o campo de resultado.</li>
        <li>Suporte para operações com decimais.</li>
        <li>Exibe o resultado ao clicar no botão <code>=</code>.</li>
    </ul>

    <h2>🛠️ Uso do <code>eval()</code></h2>
    <p>Para facilitar a implementação da lógica de precedência de operadores, a função <code>eval()</code> foi utilizada para avaliar as expressões matemáticas. Embora o uso de <code>eval()</code> possa trazer riscos em projetos maiores, neste contexto de aprendizado, ela foi escolhida por simplificar a execução das operações.</p>

    <h2>📖 Como Usar</h2>
    <ol>
        <li>Clone este repositório ou baixe os arquivos.
            <pre><code>git clone https://github.com/seu-usuario/calculadora-simples.git</code></pre>
        </li>
        <li>Abra o arquivo <code>index.html</code> em seu navegador.</li>
        <li>Utilize os botões da calculadora para realizar os cálculos.</li>
    </ol>

    <h2>📝 Estrutura do Código</h2>
    <p>A função principal do projeto é a função <code>calcular()</code>, que verifica se o input é um valor ou uma ação (como <code>=</code>, <code>c</code>, ou operadores) e utiliza <code>eval()</code> para realizar o cálculo quando necessário.</p>

    <pre><code>function calcular(tipo, valor) {
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
}</code></pre>

    <h2>⚠️ Observações</h2>
    <p>Este projeto foi desenvolvido para fins de aprendizado e experimentação com a linguagem JavaScript. <strong>Não é recomendado</strong> o uso de <code>eval()</code> em projetos reais ou com entradas de usuários, pois pode ser inseguro.</p>

    <h2>🛠️ Instalação</h2>
    <ol>
        <li>Clone o repositório:
            <pre><code>git clone https://github.com/seu-usuario/calculadora-simples.git</code></pre>
        </li>
        <li>Navegue até o diretório do projeto:
            <pre><code>cd calculadora-simples</code></pre>
        </li>
        <li>Abra o arquivo <code>index.html</code> em qualquer navegador.</li>
    </ol>

    <h2>💡 Contribuições</h2>
    <p>Este é um projeto simples e contribuições são bem-vindas. Sugestões para melhorias ou para substituir o uso de <code>eval()</code> são especialmente encorajadas.</p>

    <h2>🏷️ Tags</h2>
    <div class="tags">#javascript</div>
    <div class="tags">#html</div>
    <div class="tags">#bootstrap</div>
    <div class="tags">#frontend</div>
    <div class="tags">#calculadora</div>
    <div class="tags">#eval</div>
    <div class="tags">#aprendizado</div>
    <div class="tags">#projeto-simples</div>
