import * as React from 'react';
import Login from "./Login";
import {User} from "../types";
import Chat from "./Chat";
import './index.sass'

function ChatApp(props) {
    const {width ,height} = props
    const [user, setUser] = React.useState<User>(null);

    return (
        <div className='app-container' style={{width, height}}>
            <h1>Aweosome chat app!</h1>
            {
                user ? <Chat user={user}/> : <Login onLogin={(user)=>setUser(user)}/>
            }
        </div>
    );
}

export default ChatApp;


