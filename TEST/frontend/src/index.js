import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Graphs from "./lessons/graphs/graphs.js";
import App from './App';
import Userpage from "./baza/Userpage";
import reportWebVitals from './reportWebVitals';
import MyCalendar from "./baza/MyCalendar";
import CreateEvent from "./baza/Create_event_form";
import MyNews2 from "./baza/News2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="graphs" element={<Graphs />} />
              <Route path="calendar" element={<MyCalendar />} />
              <Route path="news" element={<MyNews2 />} />
              <Route path="accounts">
                  <Route path=":username" element={<Userpage />} />
              </Route>
              <Route path="admin/create_event" element={<CreateEvent />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
