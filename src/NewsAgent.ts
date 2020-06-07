export interface NewsHeadline{
    Title: string;
    Link: string;
}

export interface HeadlineCallback{
    (headlines: NewsHeadline[]): void;
}

export class NewsAgent{

    private request: XMLHttpRequest;
    
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
            }
        }

        this.request.send(null);
    }
}