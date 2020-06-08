import { RenderMain } from "./RenderMain";
import { NewsAgent } from "./NewsAgent";

window.onload = () => {
    const renderMain: RenderMain = new RenderMain();
    renderMain.SetupDOMs();
    renderMain.StartClock();

    const newsAgent: NewsAgent = new NewsAgent();
    newsAgent.GetHeadlines((headlines) => {
        const first = headlines[0];

        renderMain.SetNewsContent(first.Title, [], first.Title);
    });
};