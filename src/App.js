import { Route, Routes } from "react-router-dom";
import { feedbacks } from "./constants/feedbacks";
import Feedback from "./view/Feedback";
import FeedbackView from "./view/FeedbackView";
import Main from "./view/Main";
import NotFound from "./view/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/view'} element={<FeedbackView/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
                {feedbacks.map(feedback => (
                    <Route key={feedback.path} path={feedback.path} element={<Feedback id={feedback.id}/>}/>
                ))}
            </Routes>
        </>
    );
}
  
export default App;
  