$(document).ready(function () {
    // goTotop scroll

    if ($(window).scrollTop() > 400) {
        $("#goTotop").show();
    } else {
        $("#goTotop").hide();
    }

    window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 400) {
            $("#goTotop").show();
        } else {
            $("#goTotop").hide();
        }
    });

    // Subir ao topo com suavidade

    $('#goTotop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});

//Formulário

$(document).ready(function () {

    //campo de nome bloquear número

    $("#nome").keypress(function (x) {

        var text = new Number();

        if (window.event) {
            text = x.keyCode;
        }
        else if (x.which) {
            text = e.which;
        }
        else {
            return true;
        }
        if ((text >= "34") && (text <= "56")) {
            return false;
        }
    })
})

//Mascara CPF 

$(document).ready(function () {

    $("#cpf").mask("999.999.999-99");

})

// tempo do carrossel

$('.carousel').carousel({
    interval: 2000
})