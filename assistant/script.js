let WebCerveauxConversationHistory = JSON.parse(localStorage.getItem("WebCerveauxConversationHistory")) || [];

document.addEventListener("DOMContentLoaded", loadChatHistory);

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;
    appendMessage("You", userInput, "user-message");
    document.getElementById("user-input").value = "";
    showLoadingIndicator();
    WebCerveauxConversationHistory.push({
        role: "user",
        text: "You are an AI assistant designed to help users with their HTML, JS, and CSS coding adventures. That is your only job. No more, no less."
    });
    WebCerveauxConversationHistory.push({
        role: "user",
        text: userInput
    });
    const requestBody = {
        contents: WebCerveauxConversationHistory.map(msg => ({
            role: msg.role === "bot" ? "model" : "user",
            parts: [{
                text: msg.text
            }]
        }))
    };
    try {
        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBHuXpbJeUVNHLlI7FPdalu8n351swPagA", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody),
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error response:", errorData);
            appendMessage("WebCerveaux AI", "Error: " + (errorData.error?.message || "Bad Request"), "bot-message");
            return;
        }
        const data = await response.json();
        const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't understand that.";
        appendMessage("WebCerveaux AI", botReply, "bot-message", true);
        WebCerveauxConversationHistory.push({
            role: "bot",
            text: botReply
        });
        saveChatHistory();
        hideLoadingIndicator();
    } catch (error) {
        console.error("Fetch error:", error);
        appendMessage("WebCerveaux AI", "Error: Unable to reach the server.", "bot-message");
        hideLoadingIndicator();
    }
}

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

function appendMessage(sender, message, className, isMarkdown = false) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.className = className;
    if (message.startsWith("You are an AI assistant")) {
        return;
    }
    if (isMarkdown) {
        const formattedMessage = janusformat.parse(message);
        messageDiv.innerHTML = `<strong>${sender}:</strong><br><div style="white-space: pre-wrap; line-height: 1.6; margin-bottom: 10px;">${formattedMessage}</div>`;
    } else {
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    }
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function saveChatHistory() {
    localStorage.setItem("WebCerveauxConversationHistory", JSON.stringify(WebCerveauxConversationHistory));
}

function loadChatHistory() {
    const chatBox = document.getElementById("chat-box");
    WebCerveauxConversationHistory.forEach(msg => {
        if (msg.text.startsWith("You are an AI assistant")) {
            return;
        }
        appendMessage(msg.role === "user" ? "You" : "WebCerveaux AI", msg.text, msg.role === "user" ? "user-message" : "bot-message", msg.role === "bot");
    });
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showLoadingIndicator() {
    const chatBox = document.getElementById("chat-box");
    const loadingDiv = document.createElement("div");
    loadingDiv.className = "loading";
    loadingDiv.id = "loading-indicator";
    loadingDiv.innerHTML = "Loading...";
    chatBox.appendChild(loadingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function hideLoadingIndicator() {
    const loadingDiv = document.getElementById("loading-indicator");
    if (loadingDiv) {
        loadingDiv.remove();
    }
}
