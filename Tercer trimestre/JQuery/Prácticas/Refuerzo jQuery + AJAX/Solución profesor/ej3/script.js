$(document).ready(function () {
    $('#buscar').click(function () {
        let titulo = $('#titulo').val();
        let apiKey = 'ea9d7e84'; // Reemplaza esto con tu propia API key

        // Llamada AJAX utilizando jQuery
        $.ajax({
            url: `http://www.omdbapi.com/?apikey=${apiKey}&t=${titulo}`,
            success: function (data) {
                if (data.Response === "True") {
                    $('#resultado').html(`
                    <h2>${data.Title} (${data.Year})</h2>
                    <img src="${data.Poster}" alt="${data.Title}">
                    <p>Director: ${data.Director}</p>
                    <p>Actores: ${data.Actors}</p>
                    <p>Resumen: ${data.Plot}</p>
                    `);
                } else {
                    $('#resultado').html('<p>No se encontró la película.</p>');
                }
            },
            error: function () {
                $('#resultado').html('<p>Error al buscar la película.</p>');
            },
        });
    });
});