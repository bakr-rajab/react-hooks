import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Posts from "./components/posts/Index";
import SignIn from "./components/auth/SignIn";
import SignOut from "./components/auth/SignOut";

function App() {


    return (
        <div className="App">
            {/*<Posts />*/}
            {/*<CreatePost/>*/}

            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signOut" component={SignOut} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
