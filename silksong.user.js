// ==UserScript==
// @name         Silksong Place
// @namespace    https://www.reddit.com/r/HollowKnight/
// @version      0.5.5
// @description  try to take over r/place!
// @author       OnyX_#4977
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].appendChild(
        (function () {
            const div = document.createElement("div");
            div.id = "Silksong";
            div.style = "height:3900px; width:5250px; position: absolute; inset: 0px; transform: translateX(11250px) translateY(17150px);     background-size: cover;" +
    "background-image: url('https://raw.githubusercontent.com/onyx-4977/onyx-4977/main/SilksongTemplate.png'); opacity: 0.3;";
            return div;
        })())

        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].appendChild(
        (function () {
            const div = document.createElement("div");
            div.id = "HollowKnight";
            div.style = "height:3550px; width:5650px; position: absolute; inset: 0px; transform: translateX(64800px) translateY(2450px);     background-size: cover; image-rendering: pixelated;" +
    "background-image: url('https://github.com/onyx-4977/onyx-4977/raw/main/HollowKnightTemplate.png'); opacity: 0.3;";
            return div;
        })())

        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByClassName("bottom-controls")[0].appendChild(
        (function () {
            const slider = document.createElement("div");
            slider.style = "height: 36px; width: 200px; position: absolute;  right: 100px; top: 0;  background-color: #FFF;pointer-events: all;border-radius: 26px;";
            const input = document.createElement("input");
            input.type = 'range';
            input.min = '0';
            input.max = '1';
            input.step = '0.1';
            input.value = '0.3';
            input.style = "margin: 10px;left: 0;right: 0;top: 0;bottom: 0;box-sizing: border-box;position: absolute;";
            input.addEventListener('input', (event) => {
                document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].querySelector("#Silksong").style.opacity = event.currentTarget.value;
                document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].querySelector("#HollowKnight").style.opacity = event.currentTarget.value;
            });
            slider.appendChild(input);
            return slider;
        })()
        );

    }, false);
}