function toggleMenu() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("showing");
}


const textElement = document.getElementById("typed-text");
const textToType = "Hai, I am Denaemka";
const typingSpeed = 100; // in milliseconds

let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    textElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  }
}

typeText();

const typedText = document.querySelector(".text-hero h3");
const text = "i am photographer"; // Teks yang ingin ditampilkan

let index = 0;

function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); // Waktu penundaan antara penambahan karakter
  }
}

type();
