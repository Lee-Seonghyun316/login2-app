import React, {useEffect, useState } from 'react';
import './App.css';



type MyFormProps = {
    onSubmit: (form: { id: string; password: string; passwordOK:boolean}) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
    const [form, setForm] = useState({
        id : '',
        password : '',
        passwordOK: false
    });

    const { id, password, passwordOK:boolean} = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm({
            ...form,
            [id]: value
        });
    };



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            id: '',
            password: '',
            passwordOK: false
        }); // 초기화
    };

    /*/--
    const[password, setPassword] = useState( "");
    const[confirmPassword, setConfirmPassword] = useState("");

    const[passwordOK, setPasswordOK] = useState(false);

    useEffect( () => {
        if(confirmPassword == "1234" && password !=="") {
            setPasswordOK(true);
        }
        else {
            setPasswordOK(false);
        }


    }, [confirmPassword]);

    const passwordChange = (e:any)=>{
        setPassword(e.target.value);
    };

    const confirmPasswordChange = (e:any) =>{
        setConfirmPassword(e.target.value);
    };

    const [value, setValue] = useState(0);

    //
    <input
                type="id"
                value={password}
                placeholder="아이디"
                onChange = {passwordChange}
            />

            <br/>
            <input
                type="password"
                value={confirmPassword}
                placeholder="비밀번호"
                onChange = {confirmPasswordChange}
            />

            {passwordOK && <p style={{color:"red"}}>{password}님 환영합니다. </p>}
            //


    */

    return (
        <form onSubmit={handleSubmit}>
            <h1>로그인 화면</h1>
            <hr/>
            <div>
            <span > 아이디 : </span>
            <input name="id" value={id} placeholder="아이디를 입력하세요" onChange={onChange} />
            </div>
            <br/>
            <div>
            <span >비밀번호 : </span>
            <input name="password" value={password} placeholder="비밀번호를 입력하세요" onChange={onChange} />
                <button type="submit">등록</button>
            </div>




        </form>
    );
}

export default MyForm;