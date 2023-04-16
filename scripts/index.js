import { windowScrollTo, sectionElems } from "./navbar.js";

const img = document.getElementById("home-background-img");
const navbar = $("#header").hide();

// * Preloader
const fade = () => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.add("fade");
}
window.addEventListener("load", function(){
    fade;
    this.window.setTimeout(loadPage, 3500);
});

function loadPage(){
    document.getElementById("wrapper").style.display = "none";
    let body = $("#body");
    body.removeClass("locked");
}

$(document).ready(function(){
    // * Scroll to top on load/refresh
    window.onbeforeunload = function(){
        $("body").hide();
        window.scrollTop(0);
    }

    // * Home btn
    const homeBtn = document.getElementById("home-btn");
    homeBtn.addEventListener("click", () => windowScrollTo(sectionElems[2]));

    // * Back to Top
    const backToTopBtn = document.getElementById("back-to-top-btn");
    backToTopBtn.addEventListener("click", () => windowScrollTo(sectionElems[0]));

    // * Nav fade in/out
    window.addEventListener("scroll", function(){
        let value = window.scrollY;
        img.style.left = value * 0.15 + "px";
        if(value >= screen.availHeight * 0.8){
            navbar.removeClass("navFadeOut");
            navbar.show();
        } else{
            navbar.addClass("navFadeOut");
        }
    });

    // * Footer nav
    const footerNav = document.querySelectorAll(".footer-nav-item");

    footerNav.forEach((elem) => {
        elem.addEventListener("click", () => {
            switch(elem.id){
                case "footer-item-home":
                    windowScrollTo(sectionElems[0]);
                    break;
                case "footer-item-skills":
                    windowScrollTo(sectionElems[2]);
                    break;
                case "footer-item-portfolio":
                    windowScrollTo(sectionElems[3]);
                    break;
                case "footer-item-contact":
                    windowScrollTo(sectionElems[4]);
                    break;
            }
        });
    });

    // * Leave web page
    const currTitle = document.title;

    window.addEventListener("blur", () => document.title = "Why did you leave?");
    window.addEventListener("focus", () => document.title = currTitle);

    // * Section scrollIntoView
    let pageSections = document.querySelectorAll(".section-reveal");

    window.addEventListener("scroll", () => {
        revealSection();
    });

    function revealSection(){
        pageSections.forEach((elem) => {
            let winHeight = window.innerHeight;
            let elemTop = elem.getBoundingClientRect().top;
            let elemVisible = winHeight * 0.1;
            if(elemTop < winHeight - elemVisible){
                elem.classList.add("active");
            } else{
                elem.classList.remove("active");
            }
        });
    }

    // * Skills infinite scroll pause/go
    let skill = $(".skills-item div");
    let tool = $(".tools-item div");
    let titleTxt = $(".skill-tool-text");
    let skillPrimary = $(".skills-primary");
    let skillSecondary = $(".skills-secondary");
    let toolPrimary = $(".tools-primary");
    let toolSecondary = $(".tools-secondary");

    skill.hover(function(){
        skillPrimary.addClass("paused");
        skillSecondary.addClass("paused");
        skillTitleReveal("Skills and Knowledge");
    }, function(){
        skillPrimary.removeClass("paused");
        skillSecondary.removeClass("paused");
        titleTxt.removeClass("revealTitle");
    });

    tool.hover(function(){
        toolPrimary.addClass("paused");
        toolSecondary.addClass("paused");
        titleTxt.addClass("revealTitle");
        skillTitleReveal("Tools for Development");
    }, function(){
        toolPrimary.removeClass("paused");
        toolSecondary.removeClass("paused");
        titleTxt.removeClass("revealTitle");
    });

    function skillTitleReveal(title){
        titleTxt.html(`${title}`);
        titleTxt.addClass("revealTitle");
    }
});