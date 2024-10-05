function calcular(tipo, valor) {
  if (tipo === "acao") {
    //limpar visor do campor 'Resultado'
    if (valor === "c") {
      document.getElementById("resultado").value = "";
    }
    //verifica, valor da ação 
    if (valor === "/" || valor === "*" || valor === "-" || valor === "+" || valor === ".") {
      document.getElementById("resultado").value += valor;
    }
    //faz ação resultado
    if (valor === "=") {
      //eval estou utilizando eval para faciliar a logica de presedencia do javascript
      var valor_campo = eval(document.getElementById("resultado").value);
      document.getElementById("resultado").value = valor_campo;
    }
  } else if (tipo === "valor") {
    // var valor_campo = document.getElementById('resultado').value
    document.getElementById("resultado").value += valor;
  }
}
