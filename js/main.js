$(document).ready(function () {

    // Déclaration variables Dés

    //var d1 = [1, 2, 3, 4, 5, 6];
    //var d2 = [1, 2, 3, 4, 5, 6];
    //var d3 = [1, 2, 3, 4, 5, 6];

    var d1 = [1];
    var d2 = [1];
    var d3 = [1];

    // Déclaration var Joueurs (1 ou 2)
    var j1 = '';
    var j2 = '';

    // Nombre de points des joueurs
    var scoreJ1 = 0;
    var scoreJ2 = 0;

    var typeLancer = [1, 2];

    var lancer = 0;

    // TODO moins bourrin : faire un tableau avec 50,60,70,80,90,100 et dire que le randomD1 - 1 = valeur du tableau (?)
    var pointQ1 = 50;
    var pointQ2 = 60;
    var pointQ3 = 70;
    var pointQ4 = 80;
    var pointQ5 = 90;
    var pointQ6 = 100;


    // BACKGROUND MUSIC
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './audio/bg_music.mp3');
    audioElement.volume = 0.15;
    //audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load();

    $.get();


    audioElement.addEventListener("load", function () {
        audioElement.play();
        console.log('audio loaded');
    }, true);

    $('.play_bg').click(function () {
        audioElement.play();

        console.log('click play');
    });

    $('.pause_bg').click(function () {
        audioElement.pause();
        console.log('click pause');
    });

    $('.repeat_bg').click(function () {
        audioElement.currentTime = 0;
        console.log('click repeat');
    });


    // DEBUT DU JEU | on choisit au hasard un joueur pour démarrer
    var lanceDebutJ1 = d1[Math.floor(Math.random() * d1.length)];
    var lanceDebutJ2 = d2[Math.floor(Math.random() * d2.length)];

    console.log(lanceDebutJ1, lanceDebutJ2);

    if (lanceDebutJ1 > lanceDebutJ2) {
        $("#lancej2").addClass("disabled");
        $('#audio').html('<audio autoplay> <source src="./audio/lines/quoiquonjoue.mp3" type="audio/mpeg" id="lancer"' + lancer++ + '> </audio>');
    } else if (lanceDebutJ1 == lanceDebutJ2) {
        lanceDebutJ1++;
        $("#lancej2").addClass("disabled");
        console.log('draw');
        $('#audio').html('<audio autoplay> <source src="./audio/lines/go.mp3" type="audio/mpeg" id="lancer"' + lancer++ + '> </audio>');
    } else {
        $("#lancej1").addClass("disabled");
        $('#audio').html('<audio autoplay> <source src="./audio/lines/go.mp3" type="audio/mpeg" id="lancer"' + lancer++ + '> </audio>');
    }


    // LANCER JOUEUR 1
    $('#lancej1').on("click", function lanceDesJ1() {

        var randomLancer = typeLancer[Math.floor(Math.random() * typeLancer.length)];

        var randomD1 = d1[Math.floor(Math.random() * d1.length)];
        var randomD2 = d2[Math.floor(Math.random() * d2.length)];
        var randomD3 = d3[Math.floor(Math.random() * d3.length)];

        $('#audio').html('<audio autoplay> <source src="./audio/lancer_' + randomLancer + '.mp3" type="audio/mpeg" id="lancer"' + lancer++ + '> </audio>');
        $("#lancej1").addClass("disabled");
        $("#lancej2").removeClass("disabled");

        var lancedes = randomD1 + randomD2 + randomD3;
        console.log('dés 1: ' + randomD1, ' | dés 2: ' + randomD2, ' | dés 3: ' + randomD3, ' | résultat du lancé Joueur 1: ' + lancedes);

        $('#dice-1').attr('src', 'img/dice/' + randomD1 + '.jpg');
        $('#dice-2').attr('src', 'img/dice/' + randomD2 + '.jpg');
        $('#dice-3').attr('src', 'img/dice/' + randomD3 + '.jpg');

        $('#lancedes').html('Lancé : ' + lancedes);

        var newScore = scoreJ1 + lancedes;

        if (lancedes == 14) {
            $('#lines').append('<div class="text-center well">Ah... Un bleu rouge !</div>');
            $('#audio').html('<audio autoplay> <source src="./audio/lines/bleu_rouge.mp3" type="audio/mpeg" id="lancer"' + lancer++ + '> </audio>');
        }

        if(lancedes == 12 || lancedes == 6){
            $('#audio').html('<audio autoplay> <source src="./audio/lines/aquitaine.mp3" type="audio/mpeg" id="lancer"' + lancer++ + '> </audio>');
        }

        if (randomD1 == randomD2 && randomD2 == randomD3) {
            $('#audio').html('<audio autoplay> <source src="./audio/lines/q.mp3" type="audio/mpeg" id="lancer"' + lancer++ + '> </audio>');
            $('#lines').append('<div class="text-center well">Cul de chouette !</div>');

            $('#doublerJ1').removeClass('disabled');

            if (randomD1 == 1) {
                var newScore = scoreJ1 + pointQ1;

            } else if (randomD1 == 2) {
                var newScore = scoreJ1 + pointQ2;

            } else if (randomD1 == 3) {
                var newScore = scoreJ1 + pointQ3;

            }
            else if (randomD1 == 4) {
                var newScore = scoreJ1 + pointQ4;

            }
            else if (randomD1 == 5) {
                var newScore = scoreJ1 + pointQ5;

            }
            else if (randomD1 == 6) {
                var newScore = scoreJ1 + pointQ6;

            }
        }

        $('#score-joueur-1').html('Score : ' + newScore);
        console.log('score J1: ' + newScore);
        scoreJ1 = newScore;

        // vainqueur
        if (scoreJ1 >= 343) {
            $("#lancej2").addClass("disabled");
            $("#lancej1").addClass("disabled");

            console.log('J1 WIN')
        } else if (scoreJ2 >= 343) {
            $("#lancej2").addClass("disabled");
            $("#lancej1").addClass("disabled");

            console.log('J2 WIN')
        }

    });

    // LANCER JOUEUR 2
    $('#lancej2').on("click", function lanceDesJ2() {

        var randomLancer = typeLancer[Math.floor(Math.random() * typeLancer.length)];

        var randomD1 = d1[Math.floor(Math.random() * d1.length)];
        var randomD2 = d2[Math.floor(Math.random() * d2.length)];
        var randomD3 = d3[Math.floor(Math.random() * d3.length)];

        $('#audio').html('<audio autoplay> <source src="./audio/lancer_' + randomLancer + '.mp3" type="audio/mpeg" id="lancer"' + lancer++ + '> </audio>');
        $("#lancej1").removeClass("disabled");
        $("#lancej2").addClass("disabled");

        var lancedes = randomD1 + randomD2 + randomD3;
        console.log('dés 1: ' + randomD1, ' | dés 2: ' + randomD2, ' | dés 3: ' + randomD3, ' | résultat du lancé Joueur 1: ' + lancedes);

        $('#dice-1').attr('src', 'img/dice/' + randomD1 + '.jpg');
        $('#dice-2').attr('src', 'img/dice/' + randomD2 + '.jpg');
        $('#dice-3').attr('src', 'img/dice/' + randomD3 + '.jpg');

        $('#lancedes').html('Lancé : ' + lancedes);

        var newScore = scoreJ2 + lancedes;

        if (lancedes == 14) {
            $('#lines').append('<div class="text-center well">Ah... Un bleu rouge !</div>');
            $('#audio').html('<audio autoplay> <source src="./audio/lines/bleu_rouge.mp3" type="audio/mpeg" id="lancer"' + lancer++ + '> </audio>');
        }

        if(lancedes == 8 || lancedes == 5){
            $('#audio').html('<audio autoplay> <source src="./audio/lines/chantsloubi.mp3" type="audio/mpeg" id="lancer"' + lancer++ + '> </audio>');
        }

        if (randomD1 == randomD2 && randomD2 == randomD3) {
            $('#lines').append('<div class="text-center well">Cul de chouette !</div>');
            $('#audio').html('<audio autoplay> <source src="./audio/lines/q.mp3" type="audio/mpeg" id="lancer"' + lancer++ + '> </audio>');

            if (randomD1 == 1) {
                var newScore = scoreJ2 + pointQ1;

            } else if (randomD1 == 2) {
                var newScore = scoreJ2 + pointQ2;

            } else if (randomD1 == 3) {
                var newScore = scoreJ2 + pointQ3;

            }
            else if (randomD1 == 4) {
                var newScore = scoreJ2 + pointQ4;

            }
            else if (randomD1 == 5) {
                var newScore = scoreJ2 + pointQ5;

            }
            else if (randomD1 == 6) {
                var newScore = scoreJ2 + pointQ6;

            }
        }

        $('#score-joueur-2').html('Score : ' + newScore);
        console.log('score J2: ' + newScore);
        scoreJ2 = newScore;

        // vainqueur
        if (scoreJ1 >= 343) {
            $("#lancej2").addClass("disabled");
            $("#lancej1").addClass("disabled");

            console.log('J1 WIN')
        } else if (scoreJ2 >= 343) {
            $("#lancej2").addClass("disabled");
            $("#lancej1").addClass("disabled");

            console.log('J2 WIN')
        }
    });


});

//var item = items[Math.floor(Math.random()*items.length)];