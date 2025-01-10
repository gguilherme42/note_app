const marked = require("marked");
const markdownView = document.getElementById("markdown");
const htmlView = document.getElementById("html");
const newFileButton = document.getElementById("new-file");
const openFileButton = document.getElementById("open-file");
const saveMarkdownButton = document.getElementById("save-markdown");
const reverButton = document.getElementById("revert");
const saveHtmlButton = document.getElementById("save-html");
const showFileButton = document.getElementById("show-file");
const openInDefaultButton = document.getElementById("open-in-default");


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

