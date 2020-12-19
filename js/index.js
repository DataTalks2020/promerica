function limpiarFormulario() {
    $('input').val('');
    $('#errorIden').text('');
    $('#errorEmail').text('');
    $('#errorTel').text('');
    $('#errorApe').text('');
    $('#errorNom').text('');
    return false;
}

$('#tipoidentificacion').on('change', function () {
    var tipo = $(this).val();
    var texto = '';
    if (tipo == 1) {
        //texto = 'Formato 101230123 sin espacios *';
        $('.inputNombre').addClass('d-none');
        $('#identificacion').attr('maxlength', 9);
    }
    if (tipo == 2) {
        //texto = 'Dimex 12 dígitos *';
        $('.inputNombre').removeClass('d-none');
        $('#identificacion').attr('maxlength', 12);
    }

    //$('#emailHelp').text(texto);
    var id = $('#identificacion').val();
    var texto = '';
    var numero = /^[0-9]+$/;
    if (tipo != '' || tipo != 0 || tipo.length != 0) {
        $('#errorTipoIden').html('');
    }
    if (tipo == 1) {
        if (id.length != 9) {
            texto = 'Ingrese una cédula válida';
        }
        if (!numero.test(id)) {
            $('#identificacion').val('');
            texto = 'Ingrese una cédula válida';
        }
        if (id.length == 0 || id == '') {
            texto = '';
        }
    }
    if (tipo == 2) {
        if (id.length != 12) {
            texto = 'Ingrese una cédula válida';
        }
        if (!numero.test(id)) {
            $('#identificacion').val('');
            texto = 'Ingrese una cédula válida';
        }
        if (id.length == 0 || id == '') {
            texto = '';
        }
    }
    $('#errorIden').text(texto);
    return false;
});

$('#identificacion').on('keyup', function () {
    var tipo = $('#tipoidentificacion').val();
    var id = $(this).val();
    var texto = '';
    var numero = /^[0-9]+$/;
    if (tipo == '' || tipo == 0 || tipo.length == 0) {
        texto = 'Seleccione un tipo de identificación';
        $('#errorTipoIden').html(texto);
        return false;
    } else {
        $('#errorTipoIden').html('');
    }
    texto = '';
    if (tipo == 1) {
        if (id.length != 9) {
            texto = 'Ingrese una cédula válida';
        }
        if (!numero.test(id)) {
            $('#identificacion').val('');
            texto = 'Ingrese una cédula válida';
        }
        if (id.length == 0 || id == '') {
            texto = '';
        }
    }
    if (tipo == 2) {
        if (id.length != 12) {
            texto = 'Ingrese una cédula válida';
        }
        if (!numero.test(id)) {
            $('#identificacion').val('');
            texto = 'Ingrese una cédula válida';
        }
        if (id.length == 0 || id == '') {
            texto = '';
        }
    }
    $('#errorIden').text(texto);

    if (texto == '') {
        var url = "https://datatalks.io/wspadron/api/padron/" + id;
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function (data, status) {
                //alert(data);
                //console.log(data.nombre + ' ' + data.apellido1 + ' ' + data.apellido2);
                //console.log($('#emailHelp'));
                $('#emailHelp').text(data.nombre + ' ' + data.apellido1 + ' ' + data.apellido2);

                $('#nombre').val(data.nombre);
                $('#apellido').val(data.apellido1 + ' ' + data.apellido2);

                //nombreNacional.innerHTML = data.nombre + ' ' + data.apellido1 + ' ' + data.apellido2;
                //nombre.value = data.nombre;
                //apellido.value = data.apellido1 + ' ' + data.apellido2;

                //$('#txtData').val(data.nombre + ' ' + data.apellido1 + ' ' + data.apellido2);
            },
            error: function () {
                //alert('error');
                //nombreNacional.innerHTML = 'Si es Nacional debe digitar los 9 digitos, si es Dimex 12.Error';
            }
        });
    }

    return false;
});

$('#telefono').on('keyup', function () {
    var id = $(this).val();
    var texto = '';
    var numero = /^[0-9]+$/;
    if (id.length != 8) {
        texto = 'Ingrese un celular válido';
    }
    if (!numero.test(id)) {
        texto = 'Ingrese un celular válido';
    }
    var primero = id.substr(0, 1);
    if (primero != 2 && primero != 8 && primero != 7 && primero != 6) {
        texto = 'Ingrese un celular válido';
    }

    $('#errorTel').text(texto);
    return false;
});

$('#email').on('keyup', function () {
    var id = $(this).val();
    var texto = '';
    var expreCor = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,63})+$/;
    if (!expreCor.test(id)) {
        texto = 'Ingrese un correo válido';
    }

    $('#errorEmail').text(texto);
    return false;
});

$('#btnAplicar').on('click', function () {
    var tipo = $('#tipoidentificacion').val();
    var identificacion = $('#identificacion').val();
    var telefono = $('#telefono').val();
    var email = $('#email').val();
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    var texto = '';
    var numero = /^[0-9]+$/;
    if (tipo == '' || tipo == 0 || tipo.length == 0) {
        texto = 'Seleccione un tipo de identificación';
        $('#errorTipoIden').html(texto);
        return false;
    }else{
         $('#errorTipoIden').html(texto);
    }
    if (tipo == 1) {
        if (identificacion.length != 9) {
            texto = 'Ingrese una cédula válida';
            $('#errorIden').text(texto);
            return false;
        }
        if (!numero.test(identificacion)) {
            texto = 'Ingrese una cédula válida';
            $('#errorIden').text(texto);
            return false;
        }
        if (identificacion.length == 0 || identificacion == '') {
            texto = '';
            $('#errorIden').text(texto);
            return false;
        }
    }
    if (tipo == 2) {
        if (identificacion.length != 12) {
            texto = 'Ingrese una cédula válida';
            $('#errorIden').text(texto);
            return false;
        }
        if (!numero.test(identificacion)) {
            texto = 'Ingrese una cédula válida';
            $('#errorIden').text(texto);
            return false;
        }
        if (identificacion.length == 0 || identificacion == '') {
            texto = '';
            $('#errorIden').text(texto);
            return false;
        }
    }
    if (tipo == 2) {
        if (nombre == '' || nombre == 0 || nombre.length == 0) {
            texto = 'Ingrese un nombre';
            $('#errorNom').text(texto);
            return false;
        }
        if (apellido == '' || apellido == 0 || apellido.length == 0) {
            texto = 'Ingrese un apellido';
            $('#errorApe').text(texto);
            return false;
        }
    }
    texto = '';
    var expreCor = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,63})+$/;
    if (!expreCor.test(email)) {
        texto = 'Ingrese un correo válido';
        $('#errorEmail').text(texto);
        return false;
    }

    texto = '';
    var numero = /^[0-9]+$/;
    if (telefono.length != 8) {
        texto = 'Ingrese un celular válido';
        $('#errorTel').text(texto);
        return false;
    }
    if (!numero.test(telefono)) {
        texto = 'Ingrese un celular válido';
        $('#errorTel').text(texto);
        return false;
    }
    var primero = telefono.substr(0, 1);
    if (primero != 2 && primero != 8 && primero != 7 && primero != 6) {
        texto = 'Ingrese un celular válido';
        $('#errorTel').text(texto);
        return false;
    }


    if (!$('#terminos').is(':checked')) {
        texto = 'Tiene que marcar el check de contacto por whatsapp';
        $('#errorCheck').text(texto);
        return false;
    } else {
        $('#errorCheck').text('');
    }

    $('#formdata').submit();
});
