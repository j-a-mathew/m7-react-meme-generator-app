import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Dashboard } from './components';
import { Provider } from 'react-redux';
import { store } from './redux/store';

let myTitle = "Meme Generator App"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/"
                    element={<Home title={myTitle}/>}>
                </Route>
                <Route path="/dashboard"
                    element={<Dashboard/>}>
                </Route>
                <Route path="/about"
                    element={<About/>}>
                </Route>
                <Route path="/contact"
                    element={<Contact/>}>
                </Route>
            </Routes>
        </Router>
    </Provider>
    </React.StrictMode>
);