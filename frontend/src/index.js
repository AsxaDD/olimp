import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Graphs from "./lessons/graphs.jsx";
import Number_theory from './lessons/number_theory.jsx';
import Trees from './lessons/trees'
import Strings from './lessons/strings'
import DP from './lessons/dp'
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyCalendar from "./baza/MyCalendar";
import MyNews2 from "./baza/News";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="graphs" element={<Graphs />} />
              <Route path="number_theory" element={<Number_theory />} />
              <Route path="trees" element={<Trees />} />
              <Route path="strings" element={<Strings />} />    
              <Route path="dp" element={<DP />} />
              <Route path="calendar" element={<MyCalendar />} />
              <Route path="news" element={<MyNews2 />} />
              
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
