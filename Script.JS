document.addEventListener('DOMContentLoaded', function () { // asks the interpreter to wait until all html is loaded
    const textContainer = document.getElementById("typing-text");
    const text = [
        "Welcome! My name is Eyad Nazir!",
        "Born in USA, raised in EGYPT!"
    ];

    const typingSpeed = 45; // Adjust typing speed (milliseconds per character)
    const pauseDuration = 750; // Adjust pause duration between lines (1 second here)
    let currentTextIndex = 0;
    let currentCharacterIndex = 0;
    let isTypingPaused = false;

    function typeText() {
        var saved_style_name = localStorage.getItem("styleSheet");
        if(saved_style_name === null){
            saved_style_name = "style1.css";
        }
        if (currentTextIndex < text.length && saved_style_name === "style1.css" ) {
            if (currentCharacterIndex < text[currentTextIndex].length && !isTypingPaused) {
                textContainer.innerHTML += text[currentTextIndex][currentCharacterIndex];
                currentCharacterIndex++;
                setTimeout(typeText, typingSpeed);
            } else if (currentCharacterIndex >= text[currentTextIndex].length) {
                isTypingPaused = true;
                setTimeout(() => {
                    isTypingPaused = false;
                    currentCharacterIndex = 0;
                    currentTextIndex++;
                    if (currentTextIndex < text.length) {
                        textContainer.innerHTML += "<br>"; // Add a line break
                    }
                    setTimeout(typeText, 0); // Start typing the next line
                }, pauseDuration);
            }
        }
    }


    document.getElementById("cta").addEventListener("click", function () {
        // Find the anchor point element with the name "bottom"
        const bottomAnchor = document.querySelector('a[name="bottom"]');

        // Scroll to the anchor point with a smooth transition
        if (bottomAnchor) {
            bottomAnchor.scrollIntoView({ behavior: "smooth" });
        }
    });


    

    // Start the typing effect when the page loads
    window.onload = function(){
        var saved_style_name = localStorage.getItem("styleSheet");
        if (saved_style_name === null){
            saved_style_name = "style1.css";
        }
        var CSS = document.getElementById("mainStyleSheet");
        CSS.setAttribute("href", saved_style_name);

        var pathname = window.location.pathname;
        if (pathname.includes(".html")){
            var filename = pathname.match(/\/([^/]+)$/)[1];
        }
        else{
            filename = "index.html";
        }

        if(filename === "index.html" && saved_style_name === "style1.css"){
            typeText();
        }
        else if (filename === "index.html" && saved_style_name === "style2.css"){
            const textContainer = document.getElementById("typing-text");
            textContainer.innerHTML = "<p> Hey! I'm </p> Eyad Nazir";
        }

        popupClosed = localStorage.getItem("popupClosed");
        if (popupClosed === null){
            popupClosed = "false"
        }

        if (popupClosed !== "true" && window.innerWidth > 1340) {
            setTimeout(function () {
                const popup = document.getElementById("style_txt");
                popup.style.transform = "translateX(50px)"
                popup.style.opacity = "100%";
                const closePopupButton = document.getElementById("style_btn");
                closePopupButton.addEventListener("click", function () {
                    popup.style.opacity = "0%";
                    localStorage.setItem("popupClosed", "true")
                });
            }, 2000); 
        }
        else{
            localStorage.setItem("popupClosed", "false")
        }

    }

})

function toggleStyleSheet(){
    var CSS = document.getElementById("mainStyleSheet");

    var style_name = CSS.getAttribute("href");
    const textContainer = document.getElementById("typing-text");
    var pathname = window.location.pathname;
    if (pathname.includes(".html")){
        var filename = pathname.match(/\/([^/]+)$/)[1];
    }
    else{
        filename = "index.html";
    }
    
    if(style_name === "style1.css"){
        CSS.setAttribute("href", "style2.css");
        if(filename === "index.html"){
            textContainer.innerHTML = "<p> Hey! I'm </p> Eyad Nazir";
        }
    }
    else{
        CSS.setAttribute("href", "style1.css");
        if(filename === "index.html"){
            textContainer.innerHTML = "Welcome! My name is Eyad Nazir!" + "</br>" + "Born in USA, raised in EGYPT!";
        }
    }
    localStorage.setItem("styleSheet",CSS.getAttribute("href"));
    
}

function toggleMenu(){
    document.body.classList.toggle("open");
}

