// script.js

/**
 * Global Scope Variables
 * These variables are accessible from anywhere in this script.
 */
let globalMessage = "Welcome to the JS part!";
console.log(globalMessage);

// --- Part 2: JavaScript Functions ---

/**
 * 📚 Demonstrating Functional Thinking & Scope 📚
 * This function calculates the sum of two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The sum of the two numbers.
 */
function calculateSum(num1, num2) {
    // This variable 'sum' has a local scope; it's only available inside this function.
    let sum = num1 + num2;
    return sum;
}

/**
 * This function shows the difference between local and global scope.
 */
function showScope() {
    let localMessage = "This is a local message.";
    console.log(localMessage); // This works fine.
    console.log(globalMessage); // This also works because globalMessage is in the global scope.
}

// Call the function to see the console output.
showScope();

// Example of using the calculateSum function with user input
document.getElementById('calculateBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (!isNaN(num1) && !isNaN(num2)) {
        // We reuse the calculateSum function to process the user input.
        const sumResult = calculateSum(num1, num2);
        resultElement.textContent = `The sum is: ${sumResult}`;
    } else {
        resultElement.textContent = "Please enter valid numbers.";
    }
});


// --- Part 3: Combining CSS & JavaScript ---

/**
 * 🎬 Using JavaScript to trigger CSS Animations 🎬
 * This function adds a CSS class to an element to trigger a CSS transition.
 * @param {HTMLElement} element - The DOM element to animate.
 * @param {string} animationClass - The CSS class name that holds the animation styles.
 */
function triggerAnimation(element, animationClass) {
    // Add the class to start the animation
    element.classList.add(animationClass);

    // Set a timeout to remove the class and allow the animation to be re-triggered
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, 1000); // This duration should be equal to or slightly longer than the CSS transition duration
}

// Event listener for the card flip
const card = document.getElementById('cardFlip');
card.addEventListener('click', () => {
    // This is a simple toggle.
    card.classList.toggle('flipped');
});

// Event listener for the box animation
const triggerBtn = document.getElementById('triggerAnimationBtn');
const interactiveBox = document.querySelector('.interactive-box');

triggerBtn.addEventListener('click', () => {
    // Call our reusable function to trigger the animation on the box.
    triggerAnimation(interactiveBox, 'animate');
});