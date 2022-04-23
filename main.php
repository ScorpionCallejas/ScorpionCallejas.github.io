<?php 
	$destinatario = "scorpionmorales17@gmail.com";
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];

	$header = "Enviado a traves del portafolio web";

	$messageComplete = $message . "\nAtentamente: " . $name;

	mail($destinatario, $messageComplete, $header);
	echo "<script> alert('Correo enviado exitosamente') </script>";
	echo "<script> setTimeout(\'location.href='index.html\',1000 </script>";
?>