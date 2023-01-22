document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector('.beer-button')
    const beerButton = document.querySelector('.random-beer')
    const tagLine = document.querySelector('.tag-line')
    function getRandomBeer(beers) {
        const randomId = Math.floor(Math.random() * 25) + 1
        let randomBeer
        beers.forEach(beer => {
            if (beer.id === randomId) {
                randomBeer = beer;
                return;
            }
        })
        return randomBeer
    }
    
    function getData() {
        fetch('https://api.punkapi.com/v2/beers')
            .then(response => {
            return response.json()
        })
            .then(data => {
            const randomBeer = getRandomBeer(data)
            beerButton.innerHTML = randomBeer.name
            tagLine.innerHTML = randomBeer.tagline 
            console.log(randomBeer)
           
           
        })

    }



})


