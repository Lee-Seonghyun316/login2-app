import React from 'react';
import MyForm from "./MyForm";

type GreetingsProps = {
    id2: string;
};

const Greetings: React.FC<GreetingsProps> = ({ id2 }) => (
    <div>
        {id2}님 환영합니다.
        <button>로그아웃</button>

    </div>
);

export default Greetings;