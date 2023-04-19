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
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/sign-in" />} />
                    <Route path="sign-in">
                        <Route
                            path=""
                            element={<SignInPage />}
                        />
                    </Route>

                    <Route path="sign-up" element={<SignUpPage />}></Route>

                    <Route path="home">
                        <Route
                            path=""
                            element={<HomePage />}
                        />
                        <Route path="*" element={<div>Not Found</div>} />
                    </Route>

                    <Route
                        path="user/method"
                        element={<UserMethodPage />}
                    />

                    <Route path="*" element={<div>Not Found</div>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;