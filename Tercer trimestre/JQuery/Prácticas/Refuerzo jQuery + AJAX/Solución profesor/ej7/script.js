$(document).ready(function () {
    $('#buscar').click(function () {
        let texto = $('#texto').val();
        let apiKey = 'CQnaq3bgYNirr5o8iT8a8zl5QROqtKzo'; // Reemplaza esto con tu propia API key

        // Llamada getJSON utilizando jQuery
        $.getJSON(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${texto}`, function (data) {
            let resultadoHTML = '';

            if (data.data.length > 0) {
                data.data.forEach(function (gif) {
                    resultadoHTML += `
                    <div>
                        <img src="${gif.images.fixed_height_small.url}" alt="${gif.title}">
                        <p>${gif.title}</p>
                    </div>
                    `;
                });
            } else {
                resultadoHTML = '<p>No se encontraron GIFs.</p>';
            }

            $('#resultado').html(resultadoHTML);
        }).fail(function () {
            $('#resultado').html('<p>Error al buscar los GIFs.</p>');
        });
    });
});
