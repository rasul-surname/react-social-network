import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Blog from "./components/Blog/Blog";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import BlogContainer from "./components/Blog/BlogContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='App'>
                <div className='content'>

                    <Route path='/profile/:userID' render={() => <ProfileContainer />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/blog' render={() => <BlogContainer />} />
                    <Route path='/users' render={() => <UsersContainer />} />

                </div>
                <Navbar/>
            </div>
        </BrowserRouter>
    )
}

export default App;
