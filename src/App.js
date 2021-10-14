import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Blog from "./components/Blog/Blog";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import BlogContainer from "./components/Blog/BlogContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='App'>
                <div className='content'>

                    <Route path='/profile' render={() => <Profile />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/blog' render={() => <BlogContainer />} />
                    {/*<Route path='/profile' render={() => <Profile store={props.store} />} />*/}
                    {/*<Route path='/dialogs' render={() => <DialogsContainer store={props.store} />}/>*/}

                    {/*<Route path='/blog' render={() => <Blog state={props.appState.blogPage.data} />} />*/}

                    <Route path='/users' render={() => <UsersContainer />} />

                </div>
                <Navbar/>
            </div>
        </BrowserRouter>
    )
}

export default App;
