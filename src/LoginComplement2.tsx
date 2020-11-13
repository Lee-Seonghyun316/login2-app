import React from 'react';
import MyForm from "./MyForm";

type GreetingsProps = {
    name2: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name2 }) => (
    <div>
        {name2}님 환영합니다.
        <button>로그아웃</button>

    </div>
);

export default Greetings;