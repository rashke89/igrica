// registracija igraca
var submit01 = document.getElementsByTagName('button')[0];
var submit02 = document.getElementsByClassName('button02')[0];
//biranje
var biranje01 = document.getElementsByClassName('biranje01')[0];
var biranje02 = document.getElementsByClassName('biranje02')[0];
var biranje03 = document.getElementsByClassName('biranje03')[0];
var biranje04 = document.getElementsByClassName('biranje04')[0];
var biranje05 = document.getElementsByClassName('biranje05')[0];
var biranje06 = document.getElementsByClassName('biranje06')[0];
var biranje07 = document.getElementsByClassName('biranje07')[0];
var biranje08 = document.getElementsByClassName('biranje08')[0];
//pyaler tekst
var p1tekst = document.getElementsByClassName('p1tekst')[0];
var p2tekst = document.getElementsByClassName('p1tekst01')[0];
//player01
var kockica = document.getElementsByClassName('kockica')[0];
var bacanje = document.getElementsByClassName('bacanje')[0];
var pepa = document.getElementsByClassName('pepa')[0];
//player02
var kockica02 = document.getElementsByClassName('kockica01')[0];
var bacanje02 = document.getElementsByClassName('bacanje01')[0];
var dzordz = document.getElementsByClassName('dzordz')[0];
//client width
var krajIgre = document.documentElement.clientWidth;
console.log(krajIgre);
//vs div
var vs = document.getElementById('vs');
//kamenje
var kamen01 = document.getElementsByClassName('kamen01')[0];
var kamen02 = document.getElementsByClassName('kamen02')[0];

biranje01.addEventListener('click', function() {
    pepa.src = 'img/elsa_frozen_png_by_juliaeditions-d6z08lo.png';
    biranje01.setAttribute('style', 'border: 1px solid red')
});

biranje02.addEventListener('click', function() {
    pepa.src = 'img/miki.png';
    biranje02.setAttribute('style', 'border: 1px solid red')
});

biranje03.addEventListener('click', function() {
    pepa.src = 'img/Zuma_(PAW_Patrol).png';
    biranje03.setAttribute('style', 'border: 1px solid red')
});

biranje04.addEventListener('click', function() {
    pepa.src = 'img/pepa.png';
    biranje04.setAttribute('style', 'border: 1px solid red')
});

biranje05.addEventListener('click', function() {
    dzordz.src = 'img/dzordz.png';
    biranje05.setAttribute('style', 'border: 1px solid yellow')
});

biranje06.addEventListener('click', function() {
    dzordz.src = 'img/Chase_3.png';
    biranje06.setAttribute('style', 'border: 1px solid yellow')
});

biranje07.addEventListener('click', function() {
    dzordz.src = 'img/mini.png';
    biranje07.setAttribute('style', 'border: 1px solid yellow')
});

biranje08.addEventListener('click', function() {
    dzordz.src = 'img/Masha_Transparent_PNG_Clip_Art_Image.png';
    biranje08.setAttribute('style', 'border: 1px solid yellow')
});

submit01.addEventListener('click', function() {
    var prviI = document.getElementsByClassName('prviIgrac')[0];
    biranje01.style.display = 'none';
    biranje02.style.display = 'none';
    biranje03.style.display = 'none';
    biranje04.style.display = 'none';
    p1tekst.style.display = 'none';
    kamen01.setAttribute('style', 'display:block;');
    var input = document.getElementsByTagName('input')[0];
    var probica = input.value;
    var duzina = probica.length;
    var proba = probica.split("");
    console.log(proba);
    vs.style.display = 'block';
    if (duzina == 3) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2];
        prviI.style.width = '90px';
    }
    if (duzina == 4) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3];
        prviI.style.width = '120px'
    }
    if (duzina == 5) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3] + proba[4];
        prviI.style.width = '150px'
    }
    if (duzina == 6) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3] + proba[4] + proba[5];
        prviI.style.width = '180px'
    }
    if (duzina == 7) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3] + proba[4] + proba[5] + proba[6];
        prviI.style.width = '210px'
    }
    if (duzina == 8) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3] + proba[4] + proba[5] + proba[6] + proba[7];
        prviI.style.width = '240px'
    }
    if (duzina == 9) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3] + proba[4] + proba[5] + proba[6] + proba[7] + proba[8];
        prviI.style.width = '270px'
    }
    if (duzina == 10) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3] + proba[4] + proba[5] + proba[6] + proba[7] + proba[8] + proba[9];
        prviI.style.width = '300px'
    };
    var button = document.getElementsByTagName('button')[0];
    var igrac = document.getElementsByClassName('ime_igraca01')[0];
    var finish01 = document.getElementsByClassName('finish01')[0];
    finish01.setAttribute('style', 'display:block');
    igrac.setAttribute('style', 'font-size:45px;font-weight:bold;color:red;width:500px;position:absolute;left:330px;top:-30px;text-shadow: 2px 2px 3px #888');
    igrac.innerHTML = input.value + ' je Pepa prase';
    var div01 = document.getElementById('player01');
    div01.removeChild(input);
    div01.removeChild(button);
    bacanje.style.display = 'block';
    kockica.style.display = 'block';
    pepa.style.display = 'block';
    div01.setAttribute('style', 'background-image:url("img/background.jpg");background-position:center');
});

submit02.addEventListener('click', function() { // zasto nece da selektuje drugi input preko tag name selektora?
    p2tekst.style.display = 'none';
    biranje05.style.display = 'none';
    biranje06.style.display = 'none';
    biranje07.style.display = 'none';
    biranje08.style.display = 'none';
    kamen02.style.display = 'block';
    var prviI = document.getElementsByClassName('drugiIgrac')[0];
    var input02 = document.getElementsByClassName('input02')[0];
    var probica = input02.value;
    var duzina = probica.length;
    var proba = probica.split("");
    if (duzina == 3) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2];
        prviI.style.width = '90px';
    }
    if (duzina == 4) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3];
        prviI.style.width = '120px'
    }
    if (duzina == 5) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3] + proba[4];
        prviI.style.width = '150px'
    }
    if (duzina == 6) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3] + proba[4] + proba[5];
        prviI.style.width = '180px'
    }
    if (duzina == 7) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3] + proba[4] + proba[5] + proba[6];
        prviI.style.width = '210px'
    }
    if (duzina == 8) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3] + proba[4] + proba[5] + proba[6] + proba[7];
        prviI.style.width = '240px'
    }
    if (duzina == 9) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3] + proba[4] + proba[5] + proba[6] + proba[7] + proba[8];
        prviI.style.width = '270px'
    }
    if (duzina == 10) {
        prviI.innerHTML = proba[0] + proba[1] + proba[2] + proba[3] + proba[4] + proba[5] + proba[6] + proba[7] + proba[8] + proba[9];
        prviI.style.width = '300px'
    }
    var button02 = document.getElementsByClassName('button02')[0];
    var igrac02 = document.getElementsByClassName('ime_igraca02')[0];
    var finish02 = document.getElementsByClassName('finish02')[0];
    finish02.setAttribute('style', 'display:block');
    igrac02.setAttribute('style', 'font-size:50px;font-weight:bold;color:yellow;width:500px;position:absolute;left:330px;top:350px;text-shadow: 2px 2px 3px #888');
    igrac02.innerHTML = input02.value + ' je mali Dzordz';
    var div01 = document.getElementById('player02');
    div01.removeChild(input02);
    div01.removeChild(button02);
    bacanje02.style.display = 'block';
    kockica02.style.display = 'block';
    dzordz.style.display = 'block';
    div01.setAttribute('style', 'background-image:url("img/background.jpg");background-position:center');
});

//igra pepa
var pepaMargin = pepa.style.left;
var t = "";
bacanje.addEventListener('click', function() {
    if (t == "test") {
        function test() {};
    };
    bacanje02.style.opacity = '0.6';
    kockica02.style.opacity = '0.6';
    kockica02.innerHTML = 0;
    var random = Math.floor(Math.random() * 6) + 1;
    kockica.setAttribute('style', 'display:block;opacity:1;transition: all 0.5s linear');
    bacanje.setAttribute('style', 'display:block;opacity:1;transition: all 0.5s linear');
    kockica.innerHTML = random;
    var random10 = random * 10;
    var pepaMarginNum = Number(pepaMargin);
    pepaMargin = pepaMarginNum + random10;
    pepa.setAttribute('style', 'display:block;margin-left:' + pepaMargin + 'px;transition:all 1s linear');
    if (pepaMargin + 550 >= krajIgre) {
        alert('pobednik je Pepa praseee')
    };
    test();

    function test() {
        if (pepaMargin >= 180 && pepaMargin <= 230) {
            if (random == 1 || random == 2 || random == 3 || random == 4 || random == 5) {
                pepaMargin = pepaMarginNum + 0;
                pepa.setAttribute('style', 'display:block;margin-left:' + pepaMargin + 'px;transition:all 1s linear');
            } else if (random == 6) {
                pepaMargin = 0;
                pepa.setAttribute('style', 'display: block; position:absolute; animation: jumpStone 2s linear;');
                pepa.className = 'pepa01';
                t = "test";
            };
        };
    };
});

//igra dzordz
var dzordzMargin = dzordz.style.marginLeft;
var d = "";
bacanje02.addEventListener('click', function() {
    if (d == "test") {
        function test() {};
    };
    kockica.style.opacity = '0.6';
    bacanje.style.opacity = '0.6';
    kockica.innerHTML = 0;
    var random = Math.floor(Math.random() * 6) + 1;
    kockica02.setAttribute('style', 'display:block;opacity:1;transition: all 0.5s linear');
    bacanje02.setAttribute('style', 'display:block;opacity:1;transition: all 0.5s linear');
    kockica02.innerHTML = random;
    var random10 = random * 10;
    var dzordzMarginNum = Number(dzordzMargin);
    dzordzMargin = dzordzMarginNum + random10;
    // pepaMargin = pepaMargin.toString() + 'px';
    // console.log(pepaMargin);
    dzordz.setAttribute('style', 'display:block;margin-left:' + dzordzMargin + 'px;transition:all 1s linear');
    if (dzordzMargin + 550 >= krajIgre) {
        alert('Pobednik je Dzordz')
    }
    test();

    function test() {
        if (dzordzMargin >= 180 && dzordzMargin <= 230) {
            if (random == 1 || random == 2 || random == 3 || random == 4 || random == 5) {
                dzordzMargin = dzordzMarginNum + 0;
                dzordz.setAttribute('style', 'display:block;margin-left:' + dzordzMargin + 'px;transition:all 1s linear');
            } else if (random == 6) {
                dzordzMargin = 0;
                dzordz.setAttribute('style', 'display: block; position:absolute; animation: jumpStoneD 2s linear;');
                dzordz.className = 'dzordz01';
                d = "test";
            };
        };
    };
});