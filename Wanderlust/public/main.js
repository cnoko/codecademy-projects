// Foursquare API Info
const clientId = 'XQLBL4UW5MG1AS3V2DXU0ZCTCFYKCHQKV3TNJY25B2CLYHRP';
const clientSecret = 'QVCCU0OV5C00H0QSJDRXICVCJTFT1UPARZ5GSO1JC1EML20J';
const url = 'https://api.foursquare.com/v2/venues/explore?limit=50&radius=100000&near=';

// OpenWeather Info
const openWeatherKey = 'c0f0a1f1f743d305e712f677b2fb5f8c';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4"), $('#venue5'), $('#venue6'), $('#venue7'), $('#venue8'), $('#venue9'), $('#venue10')];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = `${url}${city}&client_id=${clientId}&client_secret=${clientSecret}&v=20180101`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
          //  console.log(jsonResponseclear);
            const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
          return venues;
        }
    } catch (error) {
      console.log(error.message);
    }
}

const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
  try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = response.json();
        return jsonResponse;
      }
  } catch (error) {
    console.log(error);
  }
}



// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
      let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());

  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
    .then(venues => renderVenues(venues));
  getForecast()
    .then(forecast => renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)