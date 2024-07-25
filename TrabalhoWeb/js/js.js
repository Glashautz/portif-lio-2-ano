var matriz = new Array();



var quantX = parseInt(prompt("Digite a quantidade de linhas"));
var quantY = parseInt(prompt("Digite a quantidade de colunas"));

//criando a matriz
var matriz = new Array();

for (var i = 0; i < quantX; i++) {
    var matrizTemp = new Array();
    for (var z = 0; z < quantY; z++) {


        matrizTemp.push([Math.ceil(Math.random() * 100)]);

    }
    matriz.push(matrizTemp);
}
//imprimindo matriz
document.write("<h2>Matriz 1</h2>");

document.write("<table border=1>");

for (var i = 0; i < matriz.length; i++) {

    var linha = '<tr>';

    for (var x = 0; x < matriz[i].length; x++) {

        linha = linha + "<td>" + matriz[i][x] + "</td>";

    }

    linha = linha + "</tr>";

    document.write(linha);

}
document.write("</table>");

//valores da matriz
var matriz2 = new Array();


//criando matriz 2
var quantX2 = parseInt(prompt("Digite a quantidade de linhas ad matriz 2"));
var quantY2 = parseInt(prompt("Digite a quantidade de colunas da matriz 2"));

document.write("<h2>Matriz 2</h2>");

for (var i = 0; i < quantX2; i++) {
    var matrizTemp2 = new Array();
    for (var z = 0; z < quantY2; z++) {


        matrizTemp2.push([Math.ceil(Math.random() * 100)]);

    }
    matriz2.push(matrizTemp2);
}


//imprimindo matriz
document.write("<table border=1>");

for (var i = 0; i < matriz2.length; i++) {

    var linha = '<tr>';

    for (var x = 0; x < matriz2[i].length; x++) {

        linha = linha + "<td>" + matriz2[i][x] + "</td>";

    }

    linha = linha + "</tr>";

    document.write(linha);

}
document.write("</table> </br> </br>");

//Soma
document.write("<h2>Soma</h2>");



document.write("<div class=ordem>");
//imprimindo as 2 matrizes
document.write("<table border=1>");

for (var i = 0; i < matriz.length; i++) {

    var linha = '<tr>';

    for (var x = 0; x < matriz[i].length; x++) {

        linha = linha + "<td>" + matriz[i][x] + "</td>";

    }

    linha = linha + "</tr>";

    document.write(linha);

}
document.write("</table>");

document.write("</br> <h1 class=espaco>+</h1>");

document.write("<table border=1>");

for (var i = 0; i < matriz2.length; i++) {

    var linha = '<tr>';

    for (var x = 0; x < matriz2[i].length; x++) {

        linha = linha + "<td>" + matriz2[i][x] + "</td>";

    }

    linha = linha + "</tr>";

    document.write(linha);
}
document.write("</table>");
//somar

var matrizSoma = new Array();
if (quantX == quantX2 && quantY == quantY2) {
    for (var i = 0; i < quantX2; i++) {
        var matrizTempSoma = new Array();
        for (var z = 0; z < quantY2; z++) {


            matrizTempSoma.push(parseInt(matriz[i][z]) + parseInt(matriz2[i][z]));

        }
        matrizSoma.push(matrizTempSoma);
    }
    document.write("<h1 class=espaco> = </h1>");


    document.write("<table border=1>");

    for (var i = 0; i < matrizSoma.length; i++) {

        var linha = '<tr>';

        for (var x = 0; x < matrizSoma[i].length; x++) {

            linha = linha + "<td>" + matrizSoma[i][x] + "</td>";

        }

        linha = linha + "</tr>";

        document.write(linha);
    }
    document.write("</table>");

} else {
    document.write("<h1 class=espaco> = </h1>");
    document.write("<br>");
    document.write("<h3>Não foi possivel realizar a soma dessas dessas matrizes</h3>");
}
document.write("</div> <br>");


//Subtração
document.write("<h2>Subtração</h2>");



document.write("<div class=ordem>");

//imprimindo as 2 matrizes

document.write("<table border=1>");

for (var i = 0; i < matriz.length; i++) {

    var linha = '<tr>';

    for (var x = 0; x < matriz[i].length; x++) {

        linha = linha + "<td>" + matriz[i][x] + "</td>";

    }

    linha = linha + "</tr>";

    document.write(linha);

}
document.write("</table>");

document.write("</br> <h1 class=espaco>+</h1>");

document.write("<table border=1>");

for (var i = 0; i < matriz2.length; i++) {

    var linha = '<tr>';

    for (var x = 0; x < matriz2[i].length; x++) {

        linha = linha + "<td>" + matriz2[i][x] + "</td>";

    }

    linha = linha + "</tr>";

    document.write(linha);
}
document.write("</table>");
//Subtração

var matrizSub = new Array();
if (quantX == quantX2 && quantY == quantY2) {
    for (var i = 0; i < quantX2; i++) {
        var matrizTempSub = new Array();
        for (var z = 0; z < quantY2; z++) {


            matrizTempSub.push(parseInt(matriz[i][z]) - parseInt(matriz2[i][z]));

        }
        matrizSub.push(matrizTempSub);
    }
    document.write("<h1 class=espaco> = </h1>");


    document.write("<table border=1>");

    for (var i = 0; i < matrizSub.length; i++) {

        var linha = '<tr>';

        for (var x = 0; x < matrizSub[i].length; x++) {

            linha = linha + "<td>" + matrizSub[i][x] + "</td>";

        }

        linha = linha + "</tr>";

        document.write(linha);
    }
    document.write("</table>");

} else {
    document.write("<h1 class=espaco> = </h1>");
    document.write("<br>");
    document.write("<h3>Não foi possivel realizar a subtração dessas matrizes</h3>");
}
document.write("</table>");

document.write("</div>");




//Determinante de matriz 2x2

document.write("<h2>Determinante raiz 2x2</h2>");




//imprimindo as 2 matrizes

document.write("<h3>Matriz 1</h3>");
document.write("<div class=ordem>")


document.write("<table border=1>");

for (var i = 0; i < matriz.length; i++) {

    var linha = '<tr>';

    for (var x = 0; x < matriz[i].length; x++) {

        linha = linha + "<td>" + matriz[i][x] + "</td>";

    }

    linha = linha + "</tr>";

    document.write(linha);

}
document.write("</table>");

if (quantX == 2 && quantY == 2) {
    var determinante;

    determinante = (parseInt(matriz[0][0]) * parseInt(matriz[1][1]) - (parseInt(matriz[1][0]) * parseInt(matriz[0][1])))

    document.write("<h3 class=espaco>= " + determinante + "</h3>")
} else {
    document.write("<h3 class=espaco>= " + "Não é uma matriz 2x2" + "</h3>")

}
document.write("</div>")



document.write("<br> <br>");

document.write("<h3>Matriz 2</h3>");
document.write("<div class=ordem>")
document.write("<table border=1>");

for (var i = 0; i < matriz.length; i++) {

    var linha = '<tr>';

    for (var x = 0; x < matriz2[i].length; x++) {

        linha = linha + "<td>" + matriz2[i][x] + "</td>";

    }

    linha = linha + "</tr>";

    document.write(linha);

}
document.write("</table>");

if (quantX2 == 2 && quantY2 == 2) {
    var determinante2;

    determinante2 = (parseInt(matriz2[0][0]) * parseInt(matriz2[1][1]) - (parseInt(matriz2[1][0]) * parseInt(matriz2[0][1])))

    document.write("<h3 class=espaco>= " + determinante2 + "</h3>")
} else {
    document.write("<h3 class=espaco>= " + "Não é uma matriz 2x2" + "</h3>")

}
document.write("</div>")



document.write("<br> <br>");



