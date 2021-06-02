//crea mensaje random cada vez que se ejectua
//mensajes sobre horoscopo para el día formato -> persona ingresa su signo, y devuelve Este mes (signo) (suerte/fortuna/etc)
//1.imprimo los singos
//2.lo leo, lo paso a mayusculas por las dudas y checkeo que pertenezca
//3.si pertenece entonces genero un numero random que elige lo que tendrá e imprimo
//4.si no pertence entonces pide denuevo el signo -> funcion leer


const signsZod = ["ARIES", "TAURO", "GEMINIS", "CANCER", "LEO", "VIRGO", "LIBRA", "ESCORPIO", "SAGITARIO", "CAPRICORNIO", "ACUARIO", "PICIS"];
const prediction = ["TENDRA SUERTE", "TENDRA FORTUNA", "ENCONTRARA EL AMOR", "PERDERA ALGO VALIOSO"];

//funcion lee input
function printMessage(){
    const randSign = Math.floor(Math.random() * signsZod.length);
    const randPred = Math.floor(Math.random() * prediction.length);

    console.log('Este mes ' + signsZod[randSign] + ' ' + prediction[randPred]);
};

printMessage();

