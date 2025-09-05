from flask import Flask, render_template, request, jsonify
from diffusers import StableDiffusionPipeline
import torch
from io import BytesIO
from PIL import Image

# Initialize the Flask app
app = Flask(__name__)

# Load the Stable Diffusion v1.5 model
model = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5", torch_dtype=torch.float16)
model = model.to("cuda" if torch.cuda.is_available() else "cpu")

# Route to the home page
@app.route("/")
def index():
    return render_template("index.html")

# Route to handle image generation
@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    prompt = data.get("text", "")
    
    if not prompt:
        return jsonify({"error": "No prompt provided."}), 400

    try:
        # Generate the image
        image = model(prompt).images[0]

        # Convert the image to bytes
        img_io = BytesIO()
        image.save(img_io, "JPEG")
        img_io.seek(0)

        # Return the image as a response
        return img_io.getvalue(), 200, {
            'Content-Type': 'image/jpeg',
            'Content-Disposition': 'attachment; filename=image.jpg'
        }

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
