$(document).ready(function () {
    $('#buscar').click(function () {
        let titulo = $('#titulo').val();
        let apiKey = 'AIzaSyD--ogRuvmLfU9kzro0yaz95dl3Y1tLUJc'; // Reemplaza esto con tu propia API key

        // Llamada AJAX utilizando jQuery
        $.ajax({
            url: `https://www.googleapis.com/books/v1/volumes?q=intitle:${titulo}&key=${apiKey}`,
            success: function (data) {
                let libros = data.items;
                let resultadoHTML = '';

                if (libros) {
                    libros.forEach(function (libro) {
                        resultadoHTML += `
                        <h2>${libro.volumeInfo.title}</h2>
                        <p>Autor(es): ${libro.volumeInfo.authors ? libro.volumeInfo.authors.join(', ') : 'No disponible'}</p>
                        <p>Fecha de publicación: ${libro.volumeInfo.publishedDate || 'No disponible'}</p>
                        <p>Descripción: ${libro.volumeInfo.description || 'No disponible'}</p>
                        `;
                    });
                } else {
                    resultadoHTML = '<p>No se encontraron libros.</p>';
                }

                $('#resultado').html(resultadoHTML);
            },
            error: function () {
                $('#resultado').html('<p>Error al buscar los libros.</p>');
            },
        });
    });
});
