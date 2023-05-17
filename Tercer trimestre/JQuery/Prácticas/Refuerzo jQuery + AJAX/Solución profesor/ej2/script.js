$(document).ready(function () {
    $('#mostrar').click(function () {
        let apiKey = '48cVmdit8hj2sSYWc2QY_le5DmAc9r9ZAiX2GUkR5Qg'; // Reemplaza esto con tu propia API key

        // Llamada AJAX utilizando jQuery
        $.ajax({
            url: `https://api.unsplash.com/photos/random?client_id=${apiKey}`,
            success: function (data) {
                $('#resultado').html(`
                <img src="${data.urls.small}" alt="${data.alt_description}">
                <p>Autor: ${data.user.name}</p>
                <p>Enlace a Unsplash: <a href="${data.links.html}" target="_blank">Ver en Unsplash</a></p>
                `);
                },
                error: function () {
                $('#resultado').html('<p>No se pudo obtener la foto aleatoria.</p>');
                },
                });
                });
                });
