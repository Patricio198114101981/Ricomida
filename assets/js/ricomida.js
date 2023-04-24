const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$( "#enviarCorreo" ).click(function() {
    alert( "El correo fue enviado correctamente." );
});

$("h4").dblclick(function() {
    $(this).css({
        "color": "red"
    });
});  

$("#tarjeta1").click(function() {
    $("#parrafo1").hide(1000);
});

$("#tarjeta2").click(function() {
    $("#parrafo2").hide(1000);
});

$("#tarjeta3").click(function() {
    $("#parrafo3").hide(1000);
});

$("#tarjeta1").dblclick(function() {
    $("#parrafo1").show(1000);
});

$("#tarjeta2").dblclick(function() {
    $("#parrafo2").show(1000);
});

$("#tarjeta3").dblclick(function() {
    $("#parrafo3").show(1000);
});