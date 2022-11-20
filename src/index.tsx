import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Dashboard, SignIn } from './components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { firebaseConfig } from './firebaseConfig';

let myTitle = "Meme Database App"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
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
                <Route path="/signin"
                    element={<SignIn/>}>
                </Route>
            </Routes>
        </Router>
    </Provider>
    </FirebaseAppProvider>
    </React.StrictMode>
);