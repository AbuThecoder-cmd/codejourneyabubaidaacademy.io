document.addEventListener("DOMContentLoaded", () => {
    // Typing Effect
    const heroText = document.querySelector(".hero h1");
    const typingText = "Welcome to CJAA";
    let index = 0;

    function typeEffect() {
        if (index < typingText.length) {
            heroText.textContent += typingText[index];
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // Live Chat Functionality
    const chatButton = document.getElementById("chat-button");
    const chatWindow = document.getElementById("chat-window");

    chatButton.addEventListener("click", () => {
        if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
            chatWindow.style.display = "block";
            chatWindow.innerHTML = `
                <p><strong>Welcome to CodeJourney Abubaida Academy Live Chat!</strong></p>
                <p>We are here to inspire and teach coding through interactive learning. Let us know how we can help you!</p>
                <p><em>Ask us anything about courses, donations, or how to join.</em></p>
                <textarea id="chat-input" placeholder="Type your message here..."></textarea>
                <button id="send-message">Send</button>
            `;

            const sendMessageButton = document.getElementById("send-message");
            const chatInput = document.getElementById("chat-input");

            sendMessageButton.addEventListener("click", () => {
                if (chatInput.value.trim() !== "") {
                    alert(`Your message: "${chatInput.value}" has been sent!`);
                    chatInput.value = "";
                } else {
                    alert("Please type a message before sending.");
                }
            });
        } else {
            chatWindow.style.display = "none";
        }
    });

    // Add to Cart Functionality
    const cart = [];
    const cartItems = document.getElementById("cart-items");

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", (event) => {
            const courseName = event.target.parentElement.querySelector("h3").textContent;
            if (!cart.includes(courseName)) {
                cart.push(courseName);
                updateCart();
                alert(`${courseName} has been added to your cart.`);
            } else {
                alert(`${courseName} is already in your cart.`);
            }
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        cart.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            cartItems.appendChild(li);
        });
    }

    // Donation Button
    document.getElementById("donate-now").addEventListener("click", () => {
        const donationAmount = prompt("Enter the amount you'd like to donate:");
        if (donationAmount && !isNaN(donationAmount)) {
            alert(`Thank you for donating $${donationAmount}! Your generosity makes a difference.`);
        } else {
            alert("Please enter a valid amount to donate.");
        }
    });

    // Button Interaction Effects
    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        });
    });
});
