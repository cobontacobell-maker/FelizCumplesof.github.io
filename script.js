function siguientePaso() {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        document.getElementById('paso1').style.display = 'none';
        document.getElementById('paso2').style.display = 'block';
        document.getElementById('mensaje').innerText = `¡Hola ${nombre}! Hola Sofia, mira te hago esta carta, si se puede llamar de una manera, ya que la verdad te quería desear un Feliz cumpleaños.
Yo sé que no nos conocemos hace mucho, pero créeme que para mí eres ahora mismo una de las personas mas importantes en mi vida en estos momentos, y aunque pienses que es una exageración es muy cierto.
Yo se que yo para ti no puedo ser alguien importante ya que no es que este en tu vida al 100% y se que no eres de encariñarte así de las personas o así me has dicho, pero espero en su momento poder llegar a ganarme tu cariño.
Y hago estop para poder expresar mis sentimientos de una manera distinta, yo se que hoy muchos amigos te darán una felicitación y imagino que yo seré del montón igualmente, pero me alegra poder estar en una fecha muy especial para ti que es tu cumple.
Yo pensaba que nuestra amistad iba a durar solamente un par de días, pero ya llevamos 3 meses de hablando y en estos 3 meses eh notado que eres una chica muy especial y que a pesar de todo eres muy fuerte.
Ánimos con lo de tu padre, la verdad me gustaría ser de ayuda, pero tristemente no lo puede llegar hacer, simplemente te puedo brindar mis ánimos desde acá.
`;
    } else {
        alert('Ingresa un nombre');
    }
}

function verificarContraseña() {
    const contraseña = document.getElementById('contraseña').value;
    if (contraseña === 'cumpleaños') {
        document.getElementById('paso2').style.display = 'none';
        document.getElementById('carta').style.display = 'block';
    } else {
        alert('Contraseña incorrecta');
    }
}