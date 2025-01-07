
# GenImage - AI Image Generator

**GenImage** is a web-based AI-powered image generator that dynamically creates images based on user prompts. The application features an intuitive chat-based interface, complete with a loader animation, user profile pictures, and easy image downloading functionality. The backend handles both the image generation logic and serving the frontend templates.

---

## 🚀 Features

- **Template Rendering**: Backend automatically serves the HTML templates for seamless deployment.
- **AI-Powered Image Generation**: Generates images based on user-provided prompts using a pre-trained model.
- **Responsive Design**: Works flawlessly on desktop and mobile devices.
- **Interactive UI**: Chat-like interface for smooth user interaction.
- **Loader Animation**: Shows a spinner while processing requests.
- **Image Download**: Save generated images directly to your device.
- **Profile Pictures**: Adds a personalized touch to messages with profile avatars.

---




## ⚙️ Installation and Usage

### Prerequisites
- Python 3.8+ installed on your system
- Required Python packages (`Flask`, `Pillow`, etc.)
- Basic understanding of Flask for backend operations

### Clone the Repository
```bash
git clone https://github.com/shivanand143/GenImg.git
cd genimage
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Run the Application
```bash
python app.py
```

The application will be available at `http://127.0.0.1:5000/`.

---

## 📁 Folder Structure

```
GenImage/
├── templates/
│   ├── index.html        # Main HTML template
├── static/
│   ├── css/              # CSS files
│   ├── js/               # JavaScript files
│   ├── images/           # Placeholder or static images
├── app.py                # Flask application
├── requirements.txt      # Python dependencies
└── README.md             # Project documentation
```

---

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (served via Flask templates)
- **Backend**: Flask (Python web framework)
- **Image Generation**: AI model (e.g., DALLE, Stable Diffusion, or custom pre-trained model)
- **Icons**: FontAwesome
- **Styling Framework**: Bootstrap 5

---

## 📷 Screenshots

### User Input and Loader
![User Input and Loader](https://raw.githubusercontent.com/shivanand143/GenImg/refs/heads/main/images/Screenshot%202025-01-07%20234807.png)

### AI Image Output
![AI Image Output](https://github.com/shivanand143/GenImg/blob/main/images/Screenshot%202025-01-07%20235007.png)

---

## 🌐 Deployment

### Steps to Deploy:

1. **Local Deployment**:  
   Run the app locally with Flask:
   ```bash
   python app.py
   ```
   Access the app at `http://127.0.0.1:5000/`.

2. **Cloud Deployment**:  
   Use platforms like [Render](https://render.com/), [Heroku](https://www.heroku.com/), or [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) for deployment. Ensure Python dependencies are installed and the `app.py` entry point is correctly configured.

---

## 🛡️ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Shivanand Pujari**  
- 🌐 [Website](https://www.jpegcompress.tech)  
- 🐙 [GitHub](https://github.com/shivanand143)  
- 💼 [LinkedIn](https://www.linkedin.com/in/143shiva)  

---

## 🙌 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.


