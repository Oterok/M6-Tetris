


var Peca = function (posX, posY, forma, color) //Quito la variable color porque ya esta en forma.
{
    this.posX = posX;
    this.posY = posY;
    this.forma = forma;
    this.posicio = 0; //El 0 indica la posicio inicial, servira per fer les rotacions.
    this.color = color;
};
Peca.prototype.movimentEsquerre = function () {
    if (this.posX > 0) {
        this.posX--;
    }
};
Peca.prototype.movimentDreta = function () {
    if (this.posX < tetris.tablero.length - 1) {
        this.posX++;
    }
};
Peca.prototype.movimentDown = function () {
    if (this.posY > 0) {
        this.posY--;
        return true;
    } else {
        return false;
    }
};
Peca.prototype.girarDreta = function () {
    if (this.posicio < 4) {
        this.posicio++;
    } else {
        this.posicio = 0;
    }
};
Peca.prototype.girarEsquerre = function () {
    if (this.posicio > 0) {
        this.posicio--;
    } else {
        this.posicio = 3;
    }
    Peca.actualizarForma();
};
Peca.prototype.actualizarForma = function () {
    //Si es cuadrado 'groc', no ara falta que rote.
    if (this.color == "blau") {
        switch (this.posicio) {
            case 0:
            case 2:
                this.forma = [
                    [0, "l", 0, 0],
                    [0, "l", 0, 0],
                    [0, "l", 0, 0],
                    [0, "l", 0, 0]];
                break;
            case 1:
            case 3:
                this.forma = [
                    [0, 0, 0, 0],
                    ["l", "l", "l", "l"],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]];
                break;
        }
    } else if (this.color == "verd") {
        switch (this.posicio) {
            case 0:
            case 2:
                this.forma = [
                    [0, 0, 0, 0],
                    [0, "s", "s", 0],
                    ["s", "s", 0, 0],
                    [0, 0, 0, 0]];
                break;
            case 1:
            case 3:
                this.forma = [
                    [0, "s", 0, 0],
                    [0, "s", "s", 0],
                    [0, 0, "s", 0],
                    [0, 0, 0, 0]];
                break;
        }
    } else if (this.color == "roig") {
        switch (this.posicio) {
            case 0:
            case 2:
                this.forma = [
                    [0, 0, 0, 0],
                    [0, "z", "z", 0],
                    [0, 0, "z", "z"],
                    [0, 0, 0, 0]];
                break;
            case 1:
            case 3:
                this.forma = [
                    [0, 0, "z", 0],
                    [0, "z", "z", 0],
                    [0, "z", 0, 0],
                    [0, 0, 0, 0]];
                break;
        }
    } else if (this.color == "taronga") {
        switch (this.posicio) {
            case 0:
                this.forma = [
                    [0, "t", 0, 0],
                    [0, "t", 0, 0],
                    [0, "t", "t", 0],
                    [0, 0, 0, 0]];
                break;
            case 1:
                this.forma = [
                    [0, 0, 0, 0],
                    [0, 0, "t", 0],
                    ["t", "t", "t", 0],
                    [0, 0, 0, 0]];
                break;
            case 2:
                this.forma = [
                    [0, 0, 0, 0],
                    [0, "t", "t", 0],
                    [0, 0, "t", 0],
                    [0, 0, "t", 0]];
                break;
            case 3:
                this.forma = [
                    [0, 0, 0, 0],
                    ["t", "t", "t", 0],
                    ["t", 0, 0, 0],
                    [0, 0, 0, 0]];
                break;
        }
    } else if (this.color == "lila") {
        switch (this.posicio) {
            case 0:
                this.forma = [
                    [0, 0, "j", 0],
                    [0, 0, "j", 0],
                    [0, "j", "j", 0],
                    [0, 0, 0, 0]];
                break;
            case 1:
                this.forma = [
                    [0, 0, 0, 0],
                    ["j", 0, 0, 0],
                    ["j", "j", "j", 0],
                    [0, 0, 0, 0]];
                break;
            case 2:
                this.forma = [
                    [0, "j", "j", 0],
                    [0, "j", 0, 0],
                    [0, "j", 0, 0],
                    [0, 0, 0, 0]];
                break;
            case 3:
                this.forma = [
                    [0, 0, 0, 0],
                    ["j", "j", "j", 0],
                    [0, 0, "j", 0],
                    [0, 0, 0, 0]];
                break;
        }
    } else if (this.color == "morat") {
        switch (this.posicio) {
            case 0:
                this.forma = [
                    [0, 0, 0, 0],
                    ["i", "i", "i", 0],
                    [0, "i", 0, 0],
                    [0, 0, 0, 0]];
                break;
            case 1:
                this.forma = [
                    [0, "i", 0, 0],
                    ["i", "i", 0, 0],
                    [0, "i", 0, 0],
                    [0, 0, 0, 0]];
                break;
            case 2:
                this.forma = [
                    [0, "i", 0, 0],
                    ["i", "i", "i", 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]];
                break;
            case 3:
                this.forma = [
                    [0, "i", 0, 0],
                    [0, "i", "i", 0],
                    [0, "i", 0, 0],
                    [0, 0, 0, 0]];
                break;
        }
    }
};


//-----------------------------------------------------------------------------------------------------------------------------
var Tetris = function ()
{
    this.tablero = [
//       0, 1, 2 ,3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //0
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //1
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //2
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //3
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //4
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //5
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //6
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //7
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //8
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //9
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //10
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //11
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //12
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //13
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //14
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //15
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //16
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //17
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //18
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //19
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //20
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //21
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //22
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //23
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //24
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  //25
    ];

    this.puntuacio = 0;
    this.puntuacioMax = 0;
    this.pecaActual;
    this.pecaSeguent;
    this.contador = ["i"], ["j"], ["l"], ["o"], ["s"], ["t"], ["z"];
    this.contadorTotal;
    this.nivell = 1;
    this.velocitat = 1000;


};
Tetris.prototype.Iniciar = function ()
{
    this.pecaActual = tetris.GeneraPecaAleatoria();
    this.pecaSeguent = tetris.GeneraPecaAleatoria();
    tetris.jugar();
};
Tetris.prototype.jugar = function () {
    //setInterval(peca.movDown, tetris.velocitat);
    imprimirTetris();
    //imprimirInformacio();
}
Tetris.prototype.triarPecas = function ()
{
    this.pecaActual = this.pecaSeguent
    this.pecaSeguent = tetris.GeneraPecaAleatoria();
    this.puntuacio = this.puntuacio + 10;
};
Tetris.prototype.LevelUP = function ()
{
    if ((this.contadorTotal % 10) == 0) {
        this.level++;
    }


    if (this.level <= 9) {
        this.velocitat = this.velocitat - 100;
    }
    this.puntuacio = this.puntuacio + 20;
};
Tetris.prototype.GestionTeclado = function ()
{
    //if(tecla abaix)
    this.puntuacio = this.puntuacio + 1;
};
Tetris.prototype.GeneraPecaAleatoria = function ()
{
    var peces = [
        [[
                [0, 0, 0, 0],
                [0, "o", "o", 0],
                [0, "o", "o", 0],
                [0, 0, 0, 0]], "groc"],
        [[
                [0, "l", 0, 0],
                [0, "l", 0, 0],
                [0, "l", 0, 0],
                [0, "l", 0, 0]], "blau"],
        [[
                [0, 0, 0, 0],
                [0, "s", "s", 0],
                ["s", "s", 0, 0],
                [0, 0, 0, 0]], "verd"],
        [[
                [0, 0, 0, 0],
                [0, "z", "z", 0],
                [0, 0, "z", "z"],
                [0, 0, 0, 0]], "roig"],
        [[
                [0, "t", 0, 0],
                [0, "t", 0, 0],
                [0, "t", "t", 0],
                [0, 0, 0, 0]], "taronga"],
        [[
                [0, "j", "j", 0],
                [0, "j", 0, 0],
                [0, "j", 0, 0],
                [0, 0, 0, 0]], "lila"],
        [[
                [0, 0, 0, 0],
                ["i", "i", "i", 0],
                [0, "i", 0, 0],
                [0, 0, 0, 0]], "morat"]
    ]

    var numeroAleatori = Math.round(Math.random() * 6);
    var peca = new Peca(0, Math.trunc(tetris.tablero[0].length / 2) - 2, peces[numeroAleatori][0], peces[numeroAleatori][1]);
    return peca;
};
var tetris = new Tetris();



function imprimirTetris() {
    var tamañoImagen = 25;
    var canvas = document.getElementById("espai");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 425, 650);
    var img;
    var imprimir = "";

    for (var x = 0; x <= tetris.tablero.length - 1; x++) {
        for (var y = 0; y <= tetris.tablero[0].length - 1; y++) {
            if (tetris.tablero[x][y] == 1) {
                img = document.getElementById("pared");
            } else {
                img = document.getElementById("fondo");
            }
            ctx.drawImage(img, y * tamañoImagen, x * tamañoImagen, tamañoImagen, tamañoImagen);
        }
    }
    
    for (var x = 0; x <= tetris.pecaActual.forma.length - 1; x++) {
        for (var y = 0; y <= tetris.pecaActual.forma[0].length - 1; y++) {
            if(tetris.pecaActual.forma[x+tetris.pecaActual.posX][y+tetris.pecaActual.posY != 0]){
                img = imprimirPixelColor();
                ctx.drawImage(img, y * tamañoImagen, x * tamañoImagen, tamañoImagen, tamañoImagen);
            }
        }
    }
}

function imprimirPixelColor() {
    var img;
    if (tetris.pecaActual.color == "groc") {
        img = document.getElementById("amarillo");
    } else if (tetris.pecaActual.color == "blau") {
        img = document.getElementById("azul");
    } else if (tetris.pecaActual.color == "verd") {
        img = document.getElementById("verde");
    } else if (tetris.pecaActual.color == "roig") {
        img = document.getElementById("red");
    } else if (tetris.pecaActual.color == "taronga") {
        img = document.getElementById("naranga");
    } else if (tetris.pecaActual.color == "lila") {
        img = document.getElementById("lila");
    } else if (tetris.pecaActual.color == "morat") {
        img = document.getElementById("morado");
    }
    return img;
}

function comprobarPosicioPecaX(x, y) {
    var bool = false;
    if (tetris.pecaActual.posX == x) {
        bool = comprobarPosicioPecaY(y);
    } else if ((tetris.pecaActual.posX + 1) == x) {
        bool = comprobarPosicioPecaY(y);
    } else if ((tetris.pecaActual.posX + 2) == x) {
        bool = comprobarPosicioPecaY(y);
    } else if ((tetris.pecaActual.posX + 3) == x) {
        bool = comprobarPosicioPecaY(y);
    }
    return bool;
}

function comprobarPosicioPecaY(y) {
    var bool = false;
    if (tetris.pecaActual.posY == y) {
        bool = true;
    } else if ((tetris.pecaActual.posY + 1) == y) {
        bool = true;
    } else if ((tetris.pecaActual.posY + 2) == y) {
        bool = true;
    } else if ((tetris.pecaActual.posY + 3) == y) {
        bool = true;
    }
    return bool;
}

//function imprimirInformacio() {
//    document.write("</br>");
//    document.write('Nivell: ' + tetris.nivell + "&nbsp &nbsp &nbsp &nbsp &nbsp");
//    document.write("</br>");
//    document.write('Puntuacio: ' + tetris.puntuacio + "&nbsp &nbsp &nbsp &nbsp &nbspPuntuacio Max: " + tetris.puntuacioMax);
//    document.write("</br>");
//    document.write("</br>");
//    var peca = "";
//    for (var x = 0; x <= tetris.pecaSeguent.forma.length - 1; x++) {
//        for (var y = 0; y <= tetris.pecaSeguent.forma[0].length - 1; y++) {
//            document.write(tetris.pecaSeguent.forma[x][y]);
//        }
//        document.write("</br>");
//    }
//}
tetris.Iniciar();
window.setInterval(tetris.jugar, 100);
