document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector('.beer-button')
    const rButton = document.querySelector('.random-beer')
    const tagLine = document.querySelector('.tag-line')
    const descriptionDisplay = document.querySelector('.description')
    const date = document.querySelector('.date')
    const button = document.querySelector('.button');
    const beerButton = document.querySelector('.beer-button');
    
    
    function getRandomBeer(beers) {
        const randomId = Math.floor(Math.random() * 25) + 1;
        return beers.find(beer => beer.id === randomId);
      }
    
    function getData() {
        fetch('https://api.punkapi.com/v2/beers')
            .then(response => {
            return response.json()
        })
            .then(data => {
            const randomBeer = getRandomBeer(data)
            rButton.innerHTML = "Beer Name - " + " " + randomBeer.name
            tagLine.innerHTML = "Tagline - " + " " + randomBeer.tagline 
            descriptionDisplay.innerHTML = randomBeer.description
            date.innerHTML = "First brewed in" + " " + randomBeer.first_brewed
        })

    }

    beerButton.addEventListener('mouseover', function() {
        button.style.backgroundColor = "transparent";
        button.innerHTML = "";
    });
    
    beerButton.addEventListener('mouseout', function() {
        button.style.backgroundColor = "white";
        button.innerHTML = "Click Me";
    });
    
    
startButton.addEventListener('click', getData)


})


