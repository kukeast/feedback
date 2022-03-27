import { Route, Routes } from "react-router-dom";
import { feedbacks } from "./constants/feedbacks";
import Feedback from "./view/Feedback";
import FeedbackView from "./view/FeedbackView";
import Main from "./view/Main";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/view'} element={<FeedbackView/>}/>
                {feedbacks.map(route => (
                    <Route key={route.path} path={route.path} element={<Feedback id={route.id}/>}/>
                ))}
            </Routes>
        </>
    );
}
  
export default App;
  