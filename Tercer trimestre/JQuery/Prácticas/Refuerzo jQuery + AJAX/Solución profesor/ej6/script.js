$(document).ready(function () {
    $('#buscar').click(function () {
        let texto = $('#texto').val();
        let apiKey = 'c30c239459db78740b89707282551337'; // Reemplaza esto con tu propia API key

        // Llamada getJSON utilizando jQuery
        $.getJSON(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${texto}&format=json&nojsoncallback=1`, function (data) {
            let resultadoHTML = '';
            if (data.photos.photo.length > 0) {
                data.photos.photo.forEach(function (foto) {
                    let url = "https://farm" + foto.farm + ".staticflickr.com/" + foto.server + "/" + foto.id +"_"+foto.secret+"_m.jpg";
                    resultadoHTML = resultadoHTML + '<div><img src="' + url + '" alt="' + foto.title + '"><p>' + foto.title + '</p></div>';
                });
            } else {
                resultadoHTML = '<p>No se encontraron fotos.</p>';
            }
    
            $('#resultado').html(resultadoHTML);
        }).fail(function () {
            $('#resultado').html('<p>Error al buscar las fotos.</p>');
        });
    });
});