document.addEventListener('DOMContentLoaded', function() { // asks the interpreter to wait until all html is loaded
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
        if (currentTextIndex < text.length) {
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
                    if(currentTextIndex < text.length){
                        textContainer.innerHTML += "<br>"; // Add a line break
                    }
                    setTimeout(typeText, 0); // Start typing the next line
                }, pauseDuration);
            }
        }
    }
    
    // Start the typing effect when the page loads
    window.onload = typeText;

    
    document.getElementById("cta").addEventListener("click", function() {
        // Find the anchor point element with the name "bottom"
        const bottomAnchor = document.querySelector('a[name="bottom"]');
      
        // Scroll to the anchor point with a smooth transition
        if (bottomAnchor) {
          bottomAnchor.scrollIntoView({ behavior: "smooth" });
        }
    });
})


  
  