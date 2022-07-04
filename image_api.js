class ImageApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com'
        this.clientID = 'Client-ID KwGumF3YXtXEWCmDbApFS6dKX5m3Uj-xwR_W7no5dr4'
        this.axiosObj = axios.create({
            baseURL: this.baseURL,
            headers : {
                Authorization: this.clientID
            },
            params: {
                query: 'joke',
                count: 1
            }            
        })
    }

    async getRandomImage() {
        try {
            const imageResponse = await this.axiosObj.get('/photos/random')
            console.log(imageResponse.data[0].urls.regular)
            return imageResponse.data[0].urls.regular
        } catch(error) {
            console.log(error)
            return "https://bulma.io/images/placeholders/1280x960.png"
        }
    }
}