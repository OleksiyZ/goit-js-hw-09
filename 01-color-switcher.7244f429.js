!function(){var t={startButtonShengeColor:document.querySelector("[data-start]"),stopButtonShengeColor:document.querySelector("[data-stop]"),bodyRef:document.body};t.startButtonShengeColor.addEventListener("click",(function(){e&&(o=setInterval((function(){t.bodyRef.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3),t.startButtonShengeColor.setAttribute("offBtn",!0));e=!1})),t.stopButtonShengeColor.addEventListener("click",(function(){clearInterval(o),e||t.startButtonShengeColor.removeAttribute("disabled",!0);e=!0}));var o=null,e=!0}();
//# sourceMappingURL=01-color-switcher.7244f429.js.map