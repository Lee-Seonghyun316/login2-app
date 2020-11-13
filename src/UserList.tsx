import React, {useEffect, useState} from "react";

const UserList = () =>{

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



    /*
        const onInsert = (e:any) => {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber(“);
        };


        <button onClick={onInsert}>로그인</button>


        componentDidUpdate(prevProps, prevState) {
    if (prevProps.value != = this.props.value) {
      doSomething();
    }
    }

    */
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

            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value + 1)}>+1</button>
            {passwordOK && <p style={{color:"red"}}>{password}님 환영합니다. </p>}



        </div>

    );
};

export default UserList;