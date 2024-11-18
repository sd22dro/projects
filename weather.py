import flet as ft
import httpx
import asyncio
import os

def main(page: ft.Page):
    page.title = "Weather App"
    page.update()

    # Styling for the elements
    button_style = ft.ButtonStyle(bgcolor=ft.colors.BLUE_500, elevation=5)
    info_style = {"size": 22, "weight": "bold", "color": ft.colors.AMBER_100}

    # UI elements
    page.add(ft.Text("Weather App", size=40, weight="bold", color=ft.colors.AMBER_100, font_family="Roboto"))
    
    city_input = ft.TextField(hint_text="Enter city name", icon=ft.icons.PLACE, expand=True)
    search_button = ft.ElevatedButton(text="Search", icon=ft.Icon(name=ft.icons.SEARCH), style=button_style)

    # AnimatedSwitcher for weather info
    weather_info = ft.AnimatedSwitcher(content=ft.Text(""), transition=ft.AnimatedSwitcherTransition.FADE)

    # Fetch weather asynchronously
    async def fetch_weather(city):
        api_key = os.getenv("OPENWEATHER_API_KEY")
        async with httpx.AsyncClient() as client:
            response = await client.get(f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}")
            return response

    # Show weather on button click
    async def show_weather(e):
        city = city_input.value.strip()
        if not city:
            weather_info.content = ft.Text("Please enter a city name.", color=ft.colors.RED_900)
            page.update()
            return

        response = await fetch_weather(city)
        data = response.json()

        new_content = ft.Column()

        if response.status_code == 200:
            temp_celsius = data['main']['temp'] - 273.15
            wind_speed_kmh = data['wind']['speed'] * 3.6
            new_content.controls.append(ft.Text(f"City: {city}", **info_style))
            new_content.controls.append(ft.Text(f"Weather: {data['weather'][0]['main']}", **info_style))
            new_content.controls.append(ft.Text(f"Temperature: {temp_celsius:.2f} °C", **info_style))
            new_content.controls.append(ft.Text(f"Wind Speed: {wind_speed_kmh:.2f} km/hr", **info_style))
        else:
            new_content.controls.append(ft.Text("Weather data not found.", color=ft.colors.RED_900, size=22))

        weather_info.content = new_content
        page.update()

    search_button.on_click = lambda e: asyncio.create_task(show_weather(e))

    # Add the UI elements
    page.add(ft.Row([city_input, search_button]), weather_info)

# Run the app
if __name__ == "__main__":
    asyncio.run(ft.app(target=main))
