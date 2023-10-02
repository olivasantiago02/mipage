<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["mail"];
    $nota = $_POST["nota"];

    $destinatario = "tucorreo@example.com";
    $asunto = "Nuevo mensaje de contacto de $nombre $apellido";
    $mensaje = "Nombre: $nombre\nApellido: $apellido\nCorreo Electrónico: $correo\nNota: $nota";

    // Enviar el correo electrónico
    mail($destinatario, $asunto, $mensaje);

    // Redirigir o mostrar un mensaje de confirmación
    echo "¡Felicitaciones! Tu mensaje ha sido enviado.";
}
?>
