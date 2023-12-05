class Article {
    title: string;
    author: string;
    body: string;
    timestampIsoString: string;
    images = [];
    imageLinks = [];

    constructor(title: string, author: string, body: string, timestampIsoString: string) {
        this.title = title;
        this.author = author;
        this.body = body;
        this.timestampIsoString = timestampIsoString;
    }
}

export default Article;