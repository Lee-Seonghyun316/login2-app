import React,{useState} from 'react';
import UserList from "./UserList";
//import SignUp from "./SignUp";
//import Counter from "./Counter";
//import Hello from "./Hello";
//import PasswordConfirm from "./passwordConfirm";

function App() {
    const[toggle, setToggle] = useState(true);
    const ToggleModeChange = () =>setToggle(prev=>!prev);

    return (
        //<PasswordConfirm />
         //<Hello name="김지원" color="red" />
          //<Counter />
        // <SignUp />
        <div>
            <button onClick={ToggleModeChange}>toggle</button>
            {toggle ? <UserList/> : <div>이성현님 환영합니다. </div>}
        </div>
    );
}

export default App;
