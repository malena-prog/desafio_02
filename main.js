function filtrarSomenteNumeros(campo) {
    let cpf = campo.value;
    let somenteNumeros = '';

    for (let i = 0; i < cpf.length; i++) {
        if (!isNaN(cpf[i]) && cpf[i] !== ' ') {
            somenteNumeros += cpf[i];
        }
    }

    campo.value = somenteNumeros;
}