function comprobarNumero(num) {
    const result = num > 0 ? 'Positivo' : (num < 0 ? 'Negativo' : 'Cero');
    document.getElementById('result-if-else').innerText = result;
}

function diaDeLaSemana(dia) {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const result = dias[dia] || 'Día inválido';
    document.getElementById('result-switch').innerText = result;
}

function dividir(a, b) {
    try {
        if (b === 0) throw new Error('División por cero');
        const result = a / b;
        document.getElementById('result-try-catch').innerText = result;
    } catch (error) {
        document.getElementById('result-try-catch').innerText = error.message;
    }
}

function bucleFor() {
    let resultado = [];
    for (let i = 0; i < 5; i++) {
        resultado.push(i);
    }
    document.getElementById('result-for').innerText = resultado.join(', ');
}

function bucleWhile() {
    let resultado = [];
    let j = 0;
    while (j < 5) {
        resultado.push(j);
        j++;
    }
    document.getElementById('result-while').innerText = resultado.join(', ');
}

function saludar(nombre) {
    const result = 'Hola, ' + nombre + '!';
    document.getElementById('result-funcion').innerText = result;
}

function validarDia() {
    const diaInput = document.getElementById('diaInput').value;
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const dia = parseInt(diaInput);
    
    if (isNaN(dia) || dia < 0 || dia > 6) {
        document.getElementById('result-dia').innerText = 'Día inválido. Ingrese un número entre 0 y 6.';
    } else {
        document.getElementById('result-dia').innerText = 'Día: ' + dias[dia];
    }
}

function dividirNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    try {
        if (num2 === 0) throw new Error('División por cero no permitida.');
        const resultado = num1 / num2;
        document.getElementById('result-division').innerText = 'Resultado: ' + resultado;
    } catch (error) {
        document.getElementById('result-division').innerText = error.message;
    }
}
