let v1 = prompt (`Inserisci il voto preso al primo esame`);

if ( v1 >=0 && v1 < 18){
    console.log(`Insufficiente`);
}else if ( v1 >= 18 && v1 < 21) {
    console.log(`Sufficiente`);
}else if ( v1 >= 21 && v1 < 24) {
    console.log(`Buono`);
}else if ( v1 >= 24 && v1 < 27) {
    console.log(`Distinto`);
}else if ( v1 >= 27 && v1 <= 29) {
    console.log(`Ottimo`);
}else if ( v1 == 30) {
    console.log(`Eccellente`);
}else {
    console.log(`Voto non valido`);
}

let v2 = prompt (`Inserisci il voto preso al secondo esame`);

switch (true) {
    case (v2 < 0):
        console.log(`Voto Non Valido`);
        break;

    case (v2 < 18):
        console.log(`Insufficiente`);
        break;
    
    case (v2 < 21):
        console.log(`Sufficiente`);
        break;

    case (v2 < 24):
        console.log(`Buono`);
        break;

    case (v2 < 27):
        console.log(`Distinto`);
        break;

    case (v2 <= 29):
        console.log(`Ottimo`);
        break;

    case (v2 == 30):
        console.log(`Eccellente`);
        break;


    default:
        console.log(`Voto non valido`);
        break;
}