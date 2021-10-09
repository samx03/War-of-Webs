
// navbar toggle
const toggler_icon = document.querySelector(".navbar-toggler-icon");
const navbar_links = document.querySelector("#navbar-links");
toggler_icon.addEventListener("click", function(){
    navbar_links.classList.toggle("show-nav-links");
});

// fixed nav

const navContainer = document.querySelector(".navigation");
const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    // console.log(scrollHeight);
    const navHeight = navContainer.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navContainer.classList.add("fixed-nav");
    }
    else{
        navContainer.classList.remove("fixed-nav");
    }

    if(scrollHeight > 400){
        topBtn.classList.add("show-btn")
    }
    else{
        topBtn.classList.remove("show-btn")
    }
});

//dropdowns
const dropdown = document.querySelector(".dropdown-content");
const dropdownBlocks = document.querySelector(".dropdown-blocks");
const dropdownLanguages = document.querySelector(".dropdown-languages");
const dropdownPages = document.querySelector(".dropdown-pages");
const dropdownProjects = document.querySelector(".dropdown-projects");
const dropdownBlogs = document.querySelector(".dropdown-blogs");
const dropdownDocumentations = document.querySelector(".dropdown-documentations");
function showDiv(){
    dropdown.classList.toggle("show-content");
}
function showBlocks(){
    dropdownBlocks.classList.toggle("show-content");
}
function showLanguages(){
    dropdownLanguages.classList.toggle("show-content");
}
function showPages(){
    dropdownPages.classList.toggle("show-content");
}
function showProjects(){
    dropdownProjects.classList.toggle("show-content");
}
function showBlogs(){
    dropdownBlogs.classList.toggle("show-content");
}
function showDocumentations(){
    dropdownDocumentations.classList.toggle("show-content");
}

// btn 
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    // console.log(scrollHeight);
    
    if(scrollHeight > 100){
        btn1.classList.add("show-btn");
        btn2.classList.add("show-btn");
        btn2.style = "transition-delay: 0.2s;"
    }
    else{
       btn1.classList.remove("show-btn");
       btn2.classList.remove("show-btn");
    }
});