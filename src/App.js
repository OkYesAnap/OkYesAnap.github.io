import './App.css';
import React, { useState }  from 'react';
import axios from "axios";
import Turbo35 from "./Turbo3-5";

function App() {

    const [answers, setAnswers] = useState('')
    const [question, setQuestion] = useState('')

    const apiCall_davinci = (question) => {
        axios.post('http://localhost:8080/chat', {prompt: question}).then(res => {
            console.log(res.data);
            setAnswers(res.data.choices[0].text)
        }).catch(err => console.log(err))
    }

    const sendQuestion = async () => {
        apiCall_davinci(question);
    }

    return (
        <div className="App">
            <div>
                <p>{answers}</p>
            </div>
            <Turbo35 message={question}/>
            <input type={"text"} onChange={e => setQuestion(e.target.value)}/>
        </div>
    );
}

export default App;
