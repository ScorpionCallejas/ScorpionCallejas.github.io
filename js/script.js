// SweetAlert2
Swal.fire({
  title: "Bienvenido",
  confirmButtonText: "<a href='https://es.fiverr.com/s2/4c0077f7c8' target='_blank' class='link'> Lleguemos a un acuerdo </a>",
  text: "Permiteme acompañarte a alcanzar el exito con la ayuda de las nuevas tecnologias",
  showCancelButton: true,
  cancelButtonText: "Más tarde",
});

// Formulario de contacto
let input = document.getElementsByClassName("form_input");
for (let i = 0; input.length; i++) {
  input[i].addEventListener("keyup", funcion());
  function funcion(){
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("fijar");
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  };
}
