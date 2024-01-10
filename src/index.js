function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector(
    "#user-input"
  );
  let apiKey = "b3b36of7f40tfb2fc5ea76728725e80c";
  let prompt = `Please write a 4-line poem about ${userInput.value}`;
  let context = `You are an author of childrens poems.  Please write a poem that is appropriate for children under 10 years old. Please provide the poem using standard HTML, with <br/> at the end of each line, and no title.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
  console.log("generating");
  console.log(`${prompt}`);
  console.log(`${context}`);
}

let topicInputForm = document.querySelector(
  "#input-form"
);

topicInputForm.addEventListener(
  "submit",
  generatePoem
);
