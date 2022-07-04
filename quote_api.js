class QuoteApi {
    constructor() {
        this.baseURL = 'https://api.chucknorris.io'
        this.axiosObj = axios.create({
            baseURL: this.baseURL
        })
    }

    async getRandomQuote() {
        try {
            const quoteResponse = await this.axiosObj.get('/jokes/random')
            console.log(quoteResponse.data.value)
            return quoteResponse.data.value
        } catch(error) {
            console.log(error)
        }
    }
}