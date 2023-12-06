class Article {
    title: string;
    author: string;
    body: string;
    timestampIsoString: string;
    images: Uint8Array[];

    constructor(title: string, author: string, body: string, timestampIsoString: string, images: Uint8Array[]) {
        this.title = title;
        this.author = author;
        this.body = body;
        this.timestampIsoString = timestampIsoString;
        this.images = images;
    }
}

export default Article;