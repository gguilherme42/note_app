const marked = require("marked");
const markdownView = document.querySelector("#markdown");
const htmlView = document.querySelector("#html");
const newFileButton = document.querySelector("#new-file");
const openFileButton = document.querySelector("#opne-file");
const saveMarkdownButton = document.querySelector("#save-markdown");
const reverButton = document.querySelector("#revert");
const saveHtmlButton = document.querySelector("#save-html");
const showFileButton = document.querySelector("#show-file");
const openInDefaultButton = document.querySelector("#open-in-default");


const renderMarkdonwToHtml = (markdown) => {
    htmlView.innerHTML = marked(markdown, {sanitize: true});
}


markdownView.addEventListener("keyup", (event) => {
    const currentContent = event.target.value;
    renderMarkdonwToHtml(currentContent);
});