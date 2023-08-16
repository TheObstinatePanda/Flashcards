import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import NewQuizForm from "../Components/NewQuizForm";
import NewTopicForm from "../Components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import ROUTES from "./routes";

export default function App() {    
  return (
    
    <Router>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.topicsRoute()} className="active">
              Topics
            </Link>
          </li>
          <li>
            <Link to={ROUTES.quizzesRoute()} className="active">
              Quizzes
            </Link>
          </li>
          <li>
            <Link to={ROUTES.newQuizRoute()} className="active">
              New Quiz
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/topics" element={<Topics />}/>
        <Route path="/topics/new" element={<NewTopicForm />}/>
        <Route path="/topics/:topicId" element={<Topic />}/>
        <Route path="/quizzes" element={<Quizzes />}/>
        <Route path="/quizzes/new" element={<NewQuizForm />}/>
        <Route path="/quizzes/:quizId" element={<Quiz />}/>
      </Routes>
    </Router>
  );
}

