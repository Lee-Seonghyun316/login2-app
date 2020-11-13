import React,{useState} from 'react';
import UserList from "./UserList";
//import SignUp from "./SignUp";
//import Counter from "./Counter";
//import Hello from "./Hello";
//import PasswordConfirm from "./passwordConfirm";

function App() {

    const[toggle, setToggle] = useState(true);
    const ToggleModeChange = () =>setToggle(prev=>!prev);


    const [visible, setVisible] = useState(true);

    return (
        //<PasswordConfirm />
         //<Hello name="이성현" color="red" />
          //<Counter />
        // <SignUp />
        <div>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? '로그인' : '로그아웃'}
            </button>
            <hr />

            {visible ? <UserList/> : <div>이성현님 환영합니다. </div>}
        </div>
    );
}

export default App;
