let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .skill .progress span");

window.addEventListener("scroll", () => {
    if (window.scrollY >= section.offsetTop - 400) {
       spans.forEach(span => {
            span.style.width = span.dataset.width;
       });  
    };
});