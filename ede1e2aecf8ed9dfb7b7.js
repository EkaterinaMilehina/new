var buttonMoreServices=document.querySelector(".services__button-more"),buttonHideServices=document.querySelector(".services__button-hide"),servicesList=document.querySelector(".services__list");function updateStylesS(){servicesList.scrollHeight<=servicesList.clientHeight?buttonMoreServices.style.display="none":buttonMoreServices.style.display="flex"}updateStylesS(),window.addEventListener("resize",updateStylesS),buttonMoreServices.addEventListener("click",(function(){servicesList.style.height="100%",buttonMoreServices.style.display="none",buttonHideServices.style.display="flex"})),buttonHideServices.addEventListener("click",(function(){servicesList.style.height="160px",buttonMoreServices.style.display="flex",buttonHideServices.style.display="none"}));var buttonMoreRepair=document.querySelector(".repair__button-more"),buttonHideRepair=document.querySelector(".repair__button-hide"),RepairList=document.querySelector(".repair__list");function updateStylesR(){RepairList.scrollHeight<=RepairList.clientHeight?buttonMoreRepair.style.display="none":buttonMoreRepair.style.display="flex"}updateStylesR(),window.addEventListener("resize",updateStylesR),buttonMoreRepair.addEventListener("click",(function(){RepairList.style.height="100%",buttonMoreRepair.style.display="none",buttonHideRepair.style.display="flex"})),buttonHideRepair.addEventListener("click",(function(){RepairList.style.height="160px",buttonMoreRepair.style.display="flex",buttonHideRepair.style.display="none"}));var buttonMoreAboutus=document.querySelector(".about-us__button-more"),buttonHideAboutus=document.querySelector(".about-us__button-hide"),textaboutAs=document.querySelector(".about-us__text");function updateStyles(){textaboutAs.scrollHeight<=textaboutAs.clientHeight?buttonMoreAboutus.style.display="none":buttonMoreAboutus.style.display="flex"}updateStyles(),window.addEventListener("resize",updateStyles),buttonMoreAboutus.addEventListener("click",(function(){textaboutAs.style.height="100%",buttonMoreAboutus.style.display="none",buttonHideAboutus.style.display="flex"})),buttonHideAboutus.addEventListener("click",(function(){buttonMoreAboutus.style.display="flex",buttonHideAboutus.style.display="none",window.innerWidth<768?textaboutAs.style.height="90px":window.innerWidth>=768&&(textaboutAs.style.height="160px")}));var aboutAsLink=document.querySelectorAll(".about-us__menu-link");aboutAsLink.forEach((function(e){e.addEventListener("click",(function(e){aboutAsLink.forEach((function(e){e.classList.remove("about-us__active")})),e.target.classList.add("about-us__active")}))}));var menuLink=document.querySelectorAll(".menu__link");menuLink.forEach((function(e){e.addEventListener("click",(function(e){menuLink.forEach((function(e){e.classList.remove("menu__active")})),e.target.classList.add("menu__active")}))}));var burgerIcon=document.querySelector(".header__menu-burger"),menuBurger=document.querySelector(".menu"),closeIcon=document.querySelector(".header__burger-close"),background=document.querySelector(".background");burgerIcon.addEventListener("click",(function(){menuBurger.style.display="flex",background.style.display="block"})),closeIcon.addEventListener("click",(function(){background.style.display="none",menuBurger.style.display="none"})),background.addEventListener("click",(function(){background.style.display="none",menuBurger.style.display="none"}));var callIcon=document.querySelectorAll(".icon-call"),chatIcon=document.querySelectorAll(".icon-chat"),closeModal=document.querySelectorAll(".modal__close"),callModal=document.querySelector(".modal__call"),chatModal=document.querySelector(".modal__chat"),backgroundModal=document.querySelector(".background__modal");callIcon.forEach((function(e){e.addEventListener("click",(function(){callModal.style.display="flex",backgroundModal.style.display="block"}))})),chatIcon.forEach((function(e){e.addEventListener("click",(function(){chatModal.style.display="flex",backgroundModal.style.display="block"}))})),closeModal.forEach((function(e){e.addEventListener("click",(function(){chatModal.style.display="none",callModal.style.display="none",backgroundModal.style.display="none"}))})),backgroundModal.addEventListener("click",(function(){chatModal.style.display="none",callModal.style.display="none",backgroundModal.style.display="none"}));var initSwiper=function(){var e=window.matchMedia("(max-width: 767px)"),t=null,n=function(e){e.matches?t=new Swiper(".swiper",{loop:!1,spaceBetween:16,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}}):t&&(t.destroy(),t=null)};e.addEventListener("change",n),n(e);window.addEventListener("resize",(function(){768==window.innerWidth&&location.reload(),1440==window.innerWidth&&location.reload()}))};initSwiper();