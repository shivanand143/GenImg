from diffusers import StableDiffusionPipeline
import torch

# Load the Stable Diffusion model
model = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5", torch_dtype=torch.float16)
model = model.to("cuda" if torch.cuda.is_available() else "cpu")

def generate_image(prompt):
    # Generate the image
    result = model(prompt).images[0]
    return result
