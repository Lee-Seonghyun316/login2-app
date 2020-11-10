import React, {useEffect, useState} from "react";

const UserList = () =>{

    const[password, setPassword] = useState( "");
    const[confirmPassword, setConfirmPassword] = useState("");

    const[passwordOK, setPasswordOK] = useState(false);



    useEffect( () => {
        if(confirmPassword !== "1234") {
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

    return (
        <div>
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

            {passwordOK && <p style={{color:"red"}}>비밀번호가 다릅니다. </p>}

        </div>

    );
};

export default UserList;