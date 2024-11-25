import flet as ft
import httpx

def main(page: ft.Page):
    page.title = "Weather App"
    page.update()

    # Styling for the elements
    button_style = ft.ButtonStyle(
        bgcolor=ft.colors.BLUE_500,
        elevation=5,
        color=ft.colors.WHITE,
        shape=ft.RoundedRectangleBorder(radius=8)
    )
    info_style = {"size": 22, "weight": ft.FontWeight.BOLD, "color": ft.colors.AMBER_100}

    # UI elements
    header = ft.Text(
        "Weather App",
        size=40,
        weight=ft.FontWeight.BOLD,
        color=ft.colors.AMBER_100,
        font_family="Roboto"
    )
    page.add(header)

    city_input = ft.TextField(
        hint_text="Enter city name",
        prefix_icon=ft.icons.PLACE,
        expand=True,
        border_radius=ft.border_radius.all(8),
        content_padding=ft.padding.symmetric(horizontal=10, vertical=5)
    )
    search_button = ft.ElevatedButton(
        text="Search",
        icon=ft.icons.SEARCH,
        style=button_style
    )

    # AnimatedSwitcher for weather info
    weather_info = ft.AnimatedSwitcher(
        content=ft.Text(""),
        transition=ft.AnimatedSwitcherTransition.FADE,
        duration=300  # Duration in milliseconds
    )

    # Integrated OpenWeather API Key
    API_KEY = "90262230ab8e505af0768fe1998c787c"  # **Your API Key**

    # Fetch weather synchronously
    def fetch_weather(city):
        if not API_KEY:
            return {"error": "API key not set. Please set the OPENWEATHER_API_KEY environment variable."}
        try:
            with httpx.Client() as client:
                response = client.get(
                    "https://api.openweathermap.org/data/2.5/weather",
                    params={
                        "q": city,
                        "appid": API_KEY,
                        "units": "metric"  # For temperature in Celsius
                    }
                )
                response.raise_for_status()
                return response.json()
        except httpx.HTTPStatusError as e:
            return {"error": f"HTTP error occurred: {e.response.status_code} {e.response.reason_phrase}"}
        except Exception as e:
            return {"error": f"An error occurred: {str(e)}"}

    # Show weather on button click
    def show_weather(e):
        city = city_input.value.strip()
        if not city:
            weather_info.content = ft.Text(
                "Please enter a city name.",
                color=ft.colors.RED_900,
                size=22
            )
            page.update()
            return

        # Indicate loading state
        weather_info.content = ft.ProgressRing()
        page.update()

        data = fetch_weather(city)

        if "error" in data:
            weather_info.content = ft.Text(
                data["error"],
                color=ft.colors.RED_900,
                size=22
            )
        else:
            # Extract relevant data
            city_name = data.get('name', 'N/A')
            weather_desc = data['weather'][0]['description'].title() if data.get('weather') else 'N/A'
            temp_celsius = data['main']['temp'] if data.get('main') else 'N/A'
            wind_speed_kmh = data['wind']['speed'] * 3.6 if data.get('wind') else 'N/A'  # Convert m/s to km/h

            # Create new content with weather information
            new_content = ft.Column(
                controls=[
                    ft.Text(f"City: {city_name}", **info_style),
                    ft.Text(f"Weather: {weather_desc}", **info_style),
                    ft.Text(f"Temperature: {temp_celsius:.2f} °C", **info_style),
                    ft.Text(f"Wind Speed: {wind_speed_kmh:.2f} km/h", **info_style),
                ],
                spacing=10
            )
            weather_info.content = new_content

        page.update()

    # Assign the synchronous handler directly
    search_button.on_click = show_weather

    # Layout setup
    input_row = ft.Row(
        controls=[city_input, search_button],
        spacing=10,
        alignment=ft.MainAxisAlignment.CENTER
    )
    page.add(input_row, weather_info)

# Run the app
if __name__ == "__main__":
    ft.app(target=main)

