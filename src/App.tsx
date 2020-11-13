import React, { useEffect, useState } from "react";
import MyForm from "./MyForm";
import LoginComplement2 from "./LoginComplement2";
//import UserList from "./UserList";

const App: React.FC = () => {
    let login = null;
    const onSubmit = (form: {
        name: string,
        description: string,
        password: boolean,
    }) => {

        //const[passwordOK, setPasswordOK] = useState(false);
        if (form.description == "1234" && form.name !== "") {
            form.password = true;
        } else {
            form.password = false;
        }
        form.password
            ? document.write(form.name + '님 환영합니다.')//(login = <LoginComplement2  name2={form.name}/>)
            : alert("아이디를 입력하지 않았거나 비밀번호가 틀렸습니다. ");
        // {
        //     form.password ? document.write(form.name + '님 환영합니다.') : alert('아이디를 입력하지 않았거나 비밀번호가 틀렸습니다. ');

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