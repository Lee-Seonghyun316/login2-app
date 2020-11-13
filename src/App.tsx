import React, {useEffect, useState} from 'react';
//import UserList from "./UserList";
//import SignUp from "./SignUp";
//import Counter from "./Counter";
//import Hello from "./Hello";
//import PasswordConfirm from "./passwordConfirm";
import LoginComplement from "./LoginComplement";
import MyForm from './MyForm';


const App: React.FC = () => {
    const onSubmit = (form: { name: string; description: string; password: boolean}) => {
        //const[passwordOK, setPasswordOK] = useState(false);
        if(form.description == "1234" && form.name !=="") {
            form.password = true;
        }
        else {
            form.password = false;
        }
        {form.password ? document.write(form.name + '님 환영합니다.') : alert('아이디를 입력하지 않았거나 비밀번호가 틀렸습니다. ');

            console.log(form)}

        /*

        document.write(form.name + '님 환영합니다.')
        <LoginComplement />

        const[passwordOK, setPasswordOK] = useState(false);
        useEffect( () => {
            if(form.description == "1234" && form.name !=="") {
                setPasswordOK(true);
            }
            else {
                setPasswordOK(false);
            }


        }, [form.description]);
        */

    };


    return <MyForm onSubmit={onSubmit} />;
};

/*
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
*/
export default App;
