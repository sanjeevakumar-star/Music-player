
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import MainContainer from '../components/MainPage/MainContainer';
import TopChatSongs from '../pages/TopChatSongs';
import AllSongs from '../pages/Songs';
import DiscoverdSongs from '../pages/DiscoverSongs/index';
function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<MainContainer />} />
                <Route path="/discoverdsongs" element={<DiscoverdSongs />} />
                <Route path="/allsongs" element={<AllSongs />} />
                <Route path="/topsongs" element={<TopChatSongs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter;
