const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
let input = document.querySelector("input");
let error = document.querySelector("label");
function oninput() {
  if (isEmailValid(input.value)) {
    input.classList.remove("valid");
    error.classList.add("hide-error");
  } else {
    input.classList.add("valid");
    error.classList.remove("hide-error");
  }
}
input.addEventListener("input", oninput);

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
