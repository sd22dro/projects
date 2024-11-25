
🌤 Weather App
Discover the weather in any city, instantly.
This Python-powered weather app combines a sleek, interactive interface with real-time data fetching using the flet framework and the OpenWeather API.

✨ Features
a) 🌍 Real-time Weather Updates: Instantly fetch weather details for any city worldwide.
b) 🌡 Detailed Weather Info: Displays temperature (in Celsius) and wind speed (in km/hr).
c) 🖱 Intuitive User Interface: A responsive design with input fields and buttons for seamless interaction.
d) 🚨 Smart Error Messages: Displays clear messages for invalid input or data retrieval errors.
🛠 Technologies Used

• Python: The core language driving the app.
• Flet: Framework for building dynamic and beautiful UIs.
• Httpx: Efficient asynchronous HTTP client for API communication.
• Asyncio: Handles asynchronous operations for smooth performance.
• OpenWeather API: Fetches accurate real-time weather data.
⚙️ Prerequisites
Make sure you have:

Python 3.7 or higher installed.
A valid API key from OpenWeather. (Sign up to get yours!)
🚀 Installation and Setup

Follow these simple steps to get started:

1. Clone the Repository:

git clone https://github.com/yourusername/projects.git
Navigate to the Weather App Directory:

cd projects/weather-app
Install the Required Dependencies:
pip install flet httpx
2. Set Your OpenWeather API Key:

For Windows (CMD):
set OPENWEATHER_API_KEY=your_api_key

For Linux/Mac:
export OPENWEATHER_API_KEY=your_api_key

▶️ How to Run the App
1.Run the application:
                   python weather.py
2.Enter the name of a city in the input field.
3.Click Search to view:
              Current weather conditions.
               Temperature (°C).
             Wind speed (km/hr).
📂 Project Structure

weather-app/
│
├── weather.py          # Main application file
└── README.md           # Project documentation

📝 Example Usage
1.Open the app.
2.Type London in the city input field.
3.Click Search to retrieve weather details like:
                               🌦 Weather: Clear skies, rain, or snow.
                             🌡  Temperature: In Celsius.
                            💨 Wind Speed: In km/hr.

🛡 License

This project is licensed under the MIT License. Feel free to use, modify, or distribute it as you like

