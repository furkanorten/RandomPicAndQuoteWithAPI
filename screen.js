class Screen {
    constructor() {
        this.makeQuoteButton = document.querySelector('.make-quote-button')
        this.makeQuoteButton.addEventListener('click', () => this.makeQuote())
    }

    async makeQuote() {
        const randomImage = await new ImageApi().getRandomImage()
        const randomQuote = await new QuoteApi().getRandomQuote()

        const allResults = {
            randomImage,
            randomQuote
        }

        this.printResults(allResults)
    }

    printResults(results) {
        document.querySelector('.result').innerHTML = `                <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="${results.randomImage}" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-danger pb-4">${results.randomQuote}</p>
            </div>
          </div>
        </div>
    </div>`
    }
}