'use strict';

function init() {
    const mobileMenu = document.querySelector("div.m-menu");
    const toggleBtn = document.querySelector("#toggle-btn");

    toggleBtn.addEventListener("click", toggleElements);
    window.addEventListener("resize", removeMobileMenu);

    const bg_list = [1, 2, 3]
    const bgContainer = document.querySelector(".bg-container");
    const bgChangeInterval = setInterval(handleChangeBg, 3000);
    const renderBgNumber = document.querySelector("#bg_num");
    // const bgButtonContainer = document.querySelector(".bg_btn_container");

    window.addEventListener("load", handleChangeBg);
    bgContainer.addEventListener("click", stopChangeBg);
    // bgButtonContainer.addEventListener("mouseover", handleChangeBgButton)

    function stopChangeBg() {
        clearInterval(bgChangeInterval);
    }

    function handleChangeBg() {
        const bgNumber = bg_list.shift()
        bgContainer.style.backgroundImage = `url("/images/background/${bgNumber}.jpg")`;
        renderBgNumber.textContent = `0${bgNumber}`;
        bg_list.push(bgNumber);
    }

    // function handleChangeBgButton() {
    //     if (bgButtonContainer === null) {
    //         return;
    //     }
    //     const psuedoElement = bgButtonContainer.querySelector("div").firstChild
    //     const bgNumber = bg_list.shift()
    //     console.log(psuedoElement)
    //     psuedoElement.style.backgroundImage = `url("/images/background/${bgNumber}.jpg")`;
    //     bg_list.push(bgNumber);
    // }

    function removeMobileMenu() {
        mobileMenu.classList.remove("on");
    }

    function toggleElements() {
        mobileMenu.classList.toggle('on');
    }
}

init();