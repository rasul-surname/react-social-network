import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='App'>
                <div className='content'>
                    <Route path='/profile' render={() => <Profile
                        state={props.appState.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText} />}
                    />
                    <Route path='/dialogs' render={() => <Dialogs state={props.appState.dialogsPage}/>} />

                    {/*<Route path='/profile' component={Profile} />*/}
                    {/*<Route path='/dialogs' component={Dialogs} />*/}
                </div>

                <Navbar/>
            </div>
        </BrowserRouter>
    )
}

export default App;
