import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

function App() {
  const [input, setInput] = useState(''); 
  const [detail, setDetail] = useState([
    { id: 1, detail: "리액트를 배워봅시다." },
    { id: 2, detail: "리액트를 배워봅시다." }
  ]);

  const clickAddButtonHandler = () => {
    const newDetail = {
      id: uuidv4(),
      detail: input, 
    };

    setDetail([...detail, newDetail]);
    setInput('');  
  }

  return (
    <div>
      <div className="input-style">
        <div className='input-container'>
          <input
            placeholder="내용을 입력해주세요"
            value={input} 
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={clickAddButtonHandler}>추가</button>
        </div>
        <h1>ToDo 목록</h1>
      </div>
      <div className='detail-style'>
        {detail.map((event) => (
          <div className="detail-card" key={event.id}>
            <h2>{event.detail}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
