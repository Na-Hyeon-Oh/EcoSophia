import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes,
} from 'react-router-dom';

import HomePage from './view/pages/home/HomePage';
import SignInPage from './view/pages/signIn/SignInPage';
import SignUpPage from './view/pages/signUp/SignUpPage';
import UserMethodPage from './view/pages/user/method/UserMethodPage';

function App() {
    const pagesURL = [
        '/home',
        '/sign-in',
        '/sign-up',
        '/user',
        '/user/method',
    ];

    return (
        <>
            {
                window.location.pathname !== '/home' && window.location.pathname !== '/'
                ? (<div></div>)
                : (<HomePage/>)
            }

            <Router>
                <Routes>
                    <Route path="sign-in" element={<SignInPage />}></Route>

                    <Route path="sign-up" element={<SignUpPage />}></Route>

                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="home">
                        <Route
                            path="home"
                            element={<HomePage />}
                        />
                        {/*<Route path=":id" element={<InternshipDetailPage info={info} />} />*/}
                        <Route path="*" element={<div>Not Found</div>} />
                    </Route>

                    <Route
                        path="user/method"
                        element={<UserMethodPage />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;