let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})

// Formulario de contacto
let input = document.getElementsByClassName("form_input");
for (let i = 0; input.length; i++) {
  input[i].addEventListener("keyup", function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("fijar");
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}