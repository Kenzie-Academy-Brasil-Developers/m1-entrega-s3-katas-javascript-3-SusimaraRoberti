const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472,
];

function showResults(resultado) {
  console.log(resultado);
}

function kata1() {
  let crescente = [];
  for (let i = 1; i < 26; i++) {
    crescente.push(i);
  }
  showResults(crescente);
  return crescente;
}
kata1();

function kata2() {
  let inverso = [];
  for (let i = 25; i > 0; i--) {
    inverso.push(i);
  }
  showResults(inverso);
  return inverso;
}
kata2();

function kata3() {
  let negativos = [];
  for (let i = -1; i > -26; i--) {
    negativos.push(i);
  }
  showResults(negativos);
  return negativos;
}
kata3();

function kata4() {
  let negInverso = [];
  for (let i = -25; i <= -1; i++) {
    negInverso.push(i);
  }
  showResults(negInverso);
  return negInverso;
}
kata4();

function kata5() {
  let impares = [];
  for (let i = 25; i > -26; i--) {
    if (i % 2 !== 0) {
      impares.push(i);
    }
  }
  showResults(impares);
  return impares;
}
kata5();

function kata6() {
  let divisores = [];
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0) {
      divisores.push(i);
    }
  }
  showResults(divisores);
  return divisores;
}
kata6();

function kata7() {
  let divisor7 = [];
  for (let i = 1; i < 100; i++) {
    if (i % 7 === 0) {
      divisor7.push(i);
    }
  }
  showResults(divisor7);
  return divisor7;
}
kata7();

function kata8() {
  let divReverso = [];
  for (let i = 100; i > 0; i--) {
    if (i % 3 === 0 || i % 7 === 0) {
      divReverso.push(i);
    }
  }
  showResults(divReverso);
  return divReverso;
}
kata8();

function kata9() {
  let div5 = [];
  for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0 && i % 5 === 0) {
      div5.push(i);
    }
  }
  showResults(div5);
  return div5;
}
kata9();

function kata10() {
  let exibirArray = [];
  for (let i = 0; i < sampleArray.length; i++) {
    exibirArray.push(sampleArray[i]);
  }
  showResults(exibirArray);
  return exibirArray;
}
kata10();

function kata11() {
  let paresArray = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 === 0) {
      paresArray.push(sampleArray[i]);
    }
  }
  showResults(paresArray);
  return paresArray;
}
kata11();

function kata12() {
  let imparArray = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 !== 0) {
      imparArray.push(sampleArray[i]);
    }
  }
  showResults(imparArray);
  return imparArray;
}
kata12();

function kata13() {
  let div8 = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 8 === 0) {
      div8.push(sampleArray[i]);
    }
  }
  showResults(div8);
  return div8;
}
kata13();

function kata14() {
  let quadrado = [];
  for (let i = 0; i < sampleArray.length; i++) {
    quadrado.push(sampleArray[i] * sampleArray[i]);
  }
  showResults(quadrado);
  return quadrado;
}
kata14();

function kata15() {
  let soma = 1;
  for (let i = 2; i < 21; i++) {
    soma = soma + i;
  }
  showResults(soma);
  return soma;
}
kata15();

function kata16() {
  let somaArray = sampleArray[0];
  for (let i = 0; i < sampleArray.length; i++) {
    somaArray += sampleArray[i];
  }
  showResults(somaArray);
  return somaArray;
}
kata16();

function kata17() {
  let menor = sampleArray[0];
  for (let i = 1; i < sampleArray.length; i++) {
    if (sampleArray[i] < menor) {
      menor = sampleArray[i];
    }
  }
  showResults(menor);
  return menor;
}
kata17();

function kata18() {
  let maior = sampleArray[0];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] > maior) {
      maior = sampleArray[i];
    }
  }
  showResults(maior);
  return maior;
}
kata18();

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function showBonus() {
  kataBonus1();
  kataBonus2();
  kataBonus3();
  kataBonus4();
  kataBonus5();
}

function bonus(kata, resultado) {
  const alocar = document.getElementById(kata);
  alocar.appendChild(resultado);
}

function kataBonus1() {
  for (let i = 0; i < 20; i++) {
    const retangulos = document.createElement("div");
    retangulos.style.height = "20px";
    retangulos.style.width = "100px";
    retangulos.style.backgroundColor = "grey";
    retangulos.style.marginTop = "5px";
    bonus("b1", retangulos);
  }
}

function kataBonus2() {
  contador = 0;
  for (let i = 0; i < 20; i++) {
    contador += 5;
    const retangulos = document.createElement("div");
    retangulos.style.height = "20px";
    retangulos.style.width = 100 + contador + "px";
    retangulos.style.backgroundColor = "grey";
    retangulos.style.marginTop = "5px";
    bonus("b2", retangulos);
  }
}

function kataBonus3() {
  for (let i = 0; i < sampleArray.length; i++) {
    const retangulos = document.createElement("div");
    retangulos.style.height = "20px";
    retangulos.style.width = sampleArray[i] + "px";
    retangulos.style.backgroundColor = "grey";
    retangulos.style.marginTop = "5px";
    bonus("b3", retangulos);
  }
}

function kataBonus4() {
  for (let i = 0; i < sampleArray.length; i++) {
    let cor = "grey";
    if (i % 2 === 0) {
      cor = "red";
    }
    const retangulos = document.createElement("div");
    retangulos.style.height = "20px";
    retangulos.style.width = sampleArray[i] + "px";
    retangulos.style.backgroundColor = cor;
    retangulos.style.marginTop = "5px";
    bonus("b4", retangulos);
  }
}

function kataBonus5() {
  let incrementa = 0;
  for (let i = 0; i < sampleArray.length; i++) {
    let cor = "grey";
    incrementa = sampleArray[i];
    if (incrementa % 2 === 0) {
      cor = "red";
    }
    const retangulos = document.createElement("div");
    retangulos.style.height = "20px";
    retangulos.style.width = incrementa + "px";
    retangulos.style.backgroundColor = cor;
    retangulos.style.marginTop = "5px";
    bonus("b5", retangulos);
  }
}

document.getElementById("Botão").addEventListener("click", showBonus);
