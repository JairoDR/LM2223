function comprobarNumero() {
	var numero = parseInt(document.getElementById("numero").value);
	var aleatorio = Math.floor(Math.random() * 6);

	if (numero === aleatorio) {
		document.getElementById("resultado").innerHTML = "¡Has acertado!";
	} else {
		document.getElementById("resultado").innerHTML = "Lo siento, el número era " + aleatorio;
	}
}
