const mostrarResultado = (resultado) => {
    document.getElementById('resultado').value = resultado;
}

const sumar = () => {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    mostrarResultado(num1 + num2)
}

const restar = () => {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    mostrarResultado(num1 - num2)
}

const multiplicar = () => {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    mostrarResultado(num1 * num2)
}

const dividir = () => {
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    if( num2 !== 0) {
        mostrarResultado(num1 / num2)
    }else {
        mostrarResultado('No se puede dividir por 0')
    }
}