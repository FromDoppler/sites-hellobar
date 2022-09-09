"use strict";

document.addEventListener("DOMContentLoaded", () => {


    createHelloBar();

    function generateAnchorTag(url) {
        const anchorTag = document.createElement("a");
        anchorTag.setAttribute("target", "_blank");
        anchorTag.href = url;
        return anchorTag;
    }

    function generateDivTag() {
        const div = document.createElement("div");
        div.classList.add("hello-bar", "hello-bar-emms");
        div.id = "hello-bar";
        return div;
    }

    function generateImgTag(src, alt, title) {
        const img = document.createElement("img");
        img.src = src;
        if (alt != null) img.alt = alt;
        if (title != null) img.title = title;
        img.classList.add("hb-logo");
        return img;
    }

    function generatePTag(pContent) {
        const p = document.createElement("p");
        p.innerHTML = pContent;
        return p;
    }

    function generateButtonTag(buttonContent) {
        const btn = document.createElement("button");
        btn.classList.add("hb-button", "long");
        btn.innerHTML = buttonContent;
        return btn;
    }

    function createHelloBarStyle() {
        if (!document.getElementById("helloBarStyle")) {
            const link = document.createElement("link");
            link.id = "helloBarStyle";
            link.rel = "stylesheet";
            link.href = "https://fromdoppler.github.io/sites-helloBar/helloBar.css";
            document.head.appendChild(link);
        }
    }

    function createHelloBar() {
        const a = generateAnchorTag("https://goemms.com/?origin=hellobar");
        const div = generateDivTag();
        const img = generateImgTag("https://academyqa.fromdoppler.com/wp-content/themes/doppler-webpack/hello_bar/img/asset-demoday.png", "Demo Day", "Demo Day");
        const p = generatePTag(`EVENTO ONLINE: Llegó <span>#EMMS2022</span>, ¡el más esperado por la comunidad del Marketing! </p>`);
        const btn = generateButtonTag("ASEGURA TU CUPO GRATIS");
        const header = document.querySelector("header");
        createHelloBarStyle();
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(btn);
        a.appendChild(div);
        header.insertBefore(a, header.firstChild);
    }

});

