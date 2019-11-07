function inicjuj(){
    var html = '';
    var nr=0;

    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            nr = 10*i+j+1;
            html += '<div class="pole">' +nr+ '</div>';

            if(j==9)
                html += '<div style="clear: both;"></div>';
        }
    }
    document.getElementById('plansza').innerHTML = html;

    document.addEventListener("keydown", zmienKolor);
}

var kolor = 'biały';

function zmienKolor(event){
    var key = event.which || event.keyCode;
    console.log(key);
    switch(key){
        case 49:
            kolor = 'biały';
            break;
        case 50:
            kolor = 'czarny';
            break;
        case 51:
            kolor = 'czerwony';
            break;
        case 52:
            kolor = 'zielony';
            break;
        case 53:
            kolor = 'niebieski';
            break;
        case 54:
            kolor = 'żółty';
            break;
        case 55:
            kolor = 'fuchsia';
            break;
        case 56:
            kolor = 'pomarańczowy';
            break;
        case 57:
            kolor = 'brązowy';
            break;
        case 48:
            kolor = 'szary';
            break;
    }
    document.getElementById('opis').innerHTML = "Kolor: " + kolor;
}