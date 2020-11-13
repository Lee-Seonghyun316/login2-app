import React, { useEffect, useState } from "react";
import MyForm from "./MyForm";
import LoginComplement2 from "./LoginComplement2";
//import UserList from "./UserList";

const App: React.FC = () => {
    let login = null;
    const onSubmit = (form: {
        id: string,
        password: string,
        passwordOK: boolean,
    }) => {

        //const[passwordOK, setPasswordOK] = useState(false);
        if (form.password == "1234" && form.id !== "") {
            form.passwordOK = true;
        } else {
            form.passwordOK = false;
        }
        form.passwordOK
            ? document.write(form.id + '님 환영합니다.')//(login = <LoginComplement2  id2={form.id}/>)
            : alert("아이디를 입력하지 않았거나 비밀번호가 틀렸습니다. ");


        //     console.log(form)}

        /*

            document.write(form.name + '님 환영합니다.')
            <LoginComplement />

            */
    };

    return (
        <div>
            <MyForm onSubmit={onSubmit} />
            {login}
        </div>
    );
};

export default App;