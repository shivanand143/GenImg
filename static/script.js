 document.getElementById("send-button").addEventListener("click", async () => {
      const prompt = document.getElementById("prompt").value;
      const chatBox = document.getElementById("chat-box");

      if (!prompt) return;

      // Add user message to chat with GitHub profile picture and link
      chatBox.innerHTML += `
        <div class="chat-message user">
          <a href="https://github.com/shivanand143" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/154795271?v=4" alt="GitHub Avatar">
          </a>
          <p>${prompt}</p>
        </div>
      `;

      // Scroll to bottom
      chatBox.scrollTop = chatBox.scrollHeight;

      // Clear input field
      document.getElementById("prompt").value = "";

      // Add loading indicator for AI response
      chatBox.innerHTML += `
        <div class="chat-message ai">
          <div class="loading"></div>
        </div>
      `;
      chatBox.scrollTop = chatBox.scrollHeight;

      // Send prompt to Flask backend for image generation
      try {
        const response = await fetch("/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: prompt }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to generate image.");
        }

        const blob = await response.blob();
        const imageURL = URL.createObjectURL(blob);

        // Remove loading spinner and add the generated image and prompt
        chatBox.innerHTML = chatBox.innerHTML.replace('<div class="loading"></div>', `
          <div class="chat-message ai">
            <p><strong>Prompt:</strong> ${prompt}</p>
            <img src="${imageURL}" alt="Generated Image" />
            <i class="fas fa-download download-icon" onclick="downloadImage('${imageURL}')"></i>
          </div>
        `);

        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;
      } catch (error) {
        chatBox.innerHTML += `
          <div class="chat-message ai">
            <p class="text-danger">Error: ${error.message}</p>
          </div>
        `;
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    });

    // Download image function
    function downloadImage(imageURL) {
      const a = document.createElement("a");
      a.href = imageURL;
      a.download = "generated_image.png";
      a.click();
    }
