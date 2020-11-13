import React, {useEffect, useState } from 'react';
import './App.css';



type MyFormProps = {
    onSubmit: (form: { name: string; description: string; password:boolean}) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
    const [form, setForm] = useState({
        name: '',
        description: '',
        password: false
    });

    const { name, description, password:boolean} = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: '',
            password: false
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
            <input name="name" value={name} placeholder="아이디를 입력하세요" onChange={onChange} />
            </div>
            <br/>
            <div>
            <span >비밀번호 : </span>
            <input name="description" value={description} placeholder="비밀번호를 입력하세요" onChange={onChange} />
                <button type="submit">등록</button>
            </div>




        </form>
    );
}

export default MyForm;