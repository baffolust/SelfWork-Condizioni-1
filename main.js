let temp1 = prompt (`Che temperatura fa oggi a Bari?`);

if ( temp1 < -10){
    console.log(`copriti…ancora ti raffreddi`);
}else if ( temp1 >= -10 && temp1 < 0) {
    console.log(`non e’ tanto il freddo quanto l’umidità`);
}else if ( temp1 >= 0 && temp1 < 20) {
    console.log(`non ci sono piu’ le mezze stagioni`);
}else if ( temp1 >= 20 && temp1 < 30) {
    console.log(`mi dia una peroni sudata`);
}else if ( temp1 >= 30 ){
    console.log(`lu mare, lu sole, lu ientu`);
}else {
    console.log(`Non valido`);
}

let temp2 = prompt (`No... davvero che temperatura fa oggi a Bari?`);

switch (true) {
    case (temp2 < -10):
        console.log(`copriti…ancora ti raffreddi`);
        break;

    case (temp2 < 0):
        console.log(`non e’ tanto il freddo quanto l’umidità`);
        break;
    
    case (temp2 < 20):
        console.log(`non ci sono piu’ le mezze stagioni`);
        break;

    case (temp2 < 30):
        console.log(`mi dia una peroni sudata`);
        break;

    case (temp2 >= 30):
        console.log(`lu mare, lu sole, lu ientu`);
        break;

    default:
        console.log(`Non valido`);
        break;
}