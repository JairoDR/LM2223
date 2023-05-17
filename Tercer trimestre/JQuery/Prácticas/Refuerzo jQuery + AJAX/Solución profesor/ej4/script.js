$(document).ready(function () {
    $('#buscar').click(function () {
        let nombre_usuario = $('#nombre_usuario').val();

        // Llamada AJAX utilizando jQuery
        $.ajax({
            url: `https://api.github.com/users/${nombre_usuario}`,
            success: function (data) {
                $('#resultado').html(`
                <h2>${data.login}</h2>
                <img src="${data.avatar_url}" alt="${data.login}" width="100" height="100">
                <p>Nombre: ${data.name || 'No disponible'}</p>
                <p>Biografía: ${data.bio || 'No disponible'}</p>
                <p>Ubicación: ${data.location || 'No disponible'}</p>
                <p>Repositorios: ${data.public_repos}</p>
                <p>Seguidores: ${data.followers}</p>
                `);
                },
                error: function () {
                $('#resultado').html('<p>Error al buscar la información del usuario.</p>');
                },
                });
                });
                });
