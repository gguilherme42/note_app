const marked = require("marked");
const markdownView = document.querySelector("#markdown");
const htmlView = document.querySelector("#html");
const newFileButton = document.querySelector("#new-file");
const openFileButton = document.getElementById("open-file");
const saveMarkdownButton = document.querySelector("#save-markdown");
const reverButton = document.querySelector("#revert");
const saveHtmlButton = document.querySelector("#save-html");
const showFileButton = document.querySelector("#show-file");
const openInDefaultButton = document.querySelector("#open-in-default");


const renderMarkdonwToHtml = (markdown) => {
    // htmlView.innerHTML = marked(markdown, {sanitize: true}); -- the books suggest this way to parse markdown to html, but this does'nt work because marked isn't a function
    htmlView.innerHTML = marked.parse(markdown);
    
}

openFileButton.addEventListener("click", () => {
    alert("You clicked!");
    console.log("teste");
});


markdownView.addEventListener("keyup", (event) => {
    const currentContent = event.target.value;
    renderMarkdonwToHtml(currentContent);
});

