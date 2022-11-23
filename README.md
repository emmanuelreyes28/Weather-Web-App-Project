Weather Web App

This web app utilizes the openweathermap api to fetch temperature data on the city being searched. My main goal for this project was functionality.

For every new search a new "CityWeather" component is rendered. If the page is refreshed then all data is removed
since this does not include a database to save all data.

In this project I was able to practice the following:

- Functional components
- useState
- useEffect
- useRef
- Handling changes and clicks
- Props

Biggest Challenge: useEffect

This was the first time I used and heard of useEffect as I was developing this project. I learned that useEffect can be used to perform side effects on components. In this case I used it to fetch data from the openweathermap api. I also learned that it renders on every render by default but can be handled differently if passed in an array dependency. With an array dependency the useEffect will render on the initial render and then only when the dependency is updated.

I also learned about useRef which I utilized to stop the useEffect from fetching data on the initial render which would return a 400 bad request since there was no city being searched yet. I was then able to set the state of the weatherContent within useEffect when a new city is searched by the user.
