function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "There was an Old Lady of Prague",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let topicInputForm = document.querySelector(
  "#input-form"
);

topicInputForm.addEventListener(
  "submit",
  generatePoem
);
