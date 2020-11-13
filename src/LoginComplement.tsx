import React, {useEffect, useState} from "react";
import MyForm from './MyForm';

//import LoginComplement from "./LoginComplement";


const LoginComplement = () => {
    const onSubmit = (form: { name: string; description: string; password: boolean}) => {


        document.write(form.name + '님 환영합니다.');

        console.log(form)

        /*

        document.write(form.name + '님 환영합니다.')
        <LoginComplement />

        */

    };


    return <div>환영합니다. </div>;

};

export default LoginComplement;