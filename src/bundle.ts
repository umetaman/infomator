import { RenderMain } from "./RenderMain";
import { NewsAgent, NewsHeadline } from "./NewsAgent";

window.onload = () => {
    const renderMain: RenderMain = new RenderMain();
    renderMain.SetupDOMs();
    renderMain.StartClock();

    const newsAgent: NewsAgent = new NewsAgent();

    newsAgent.HeadlineSetter = (news) => renderMain.SetNewsContent(news.Title, [], news.Title);
    newsAgent.StartLoop();
};