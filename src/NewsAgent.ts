export interface NewsHeadline{
    Title: string;
    Link: string;
}

export interface HeadlineCallback{
    (headlines: NewsHeadline[]): void;
}

export class NewsAgent{

    private request: XMLHttpRequest;
    private headlines: NewsHeadline[];
    private index: number = 0;
    public HeadlineSetter: (news: NewsHeadline) => void;
    
    constructor(){
        this.request = new XMLHttpRequest();
    }

    public GetHeadlines(onComplete: HeadlineCallback): void{
        this.request.open("GET", "https://news.google.com/news/rss/headlines/section/topic/TECHNOLOGY?hl=ja&gl=JP&ceid=JP:ja");
        
        this.request.onreadystatechange = () => {
            if(this.request.readyState != 4){
                // requesting
            }else if(this.request.status != 200){
                // failed
                console.log("request is failed.");
            }
            else{
                const response = this.request.response;
                const parser: DOMParser = new DOMParser();

                const doms = parser.parseFromString(response, "application/xml");
                
                // parse XML to headline interfaces...
                const root = doms.getElementsByTagName("channel")[0];
                const items = root.getElementsByTagName("item");
                
                let headlines: NewsHeadline[] = [];
                for(let i = 0; i < items.length; i++){
                    let headline: NewsHeadline = {
                        Title: items[i].getElementsByTagName("title")[0].innerHTML,
                        Link: items[i].getElementsByTagName("link")[0].innerHTML
                    };
                    
                    headlines.push(headline);
                }

                onComplete(headlines);
                this.headlines = headlines;
            }
        }

        this.request.send(null);
    }

    public StartLoop(): void{
        console.log("Start headline loop.");

        this.GetHeadlines((headlines) => { });
        let loop = setInterval(() => this.updateNews(this.HeadlineSetter), 30000);
    }

    private updateNews(setter: (news: NewsHeadline) => void): void{
        console.log("Update news headline.");
        console.log(this.headlines[this.index]);

        setter(this.headlines[this.index]);
        this.index++;

        if(this.index > this.headlines.length){
            this.GetHeadlines((headlines) => { });
            this.index = 0;
        }
    }
}