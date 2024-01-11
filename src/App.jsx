
import { useRef, useState } from 'react';
import './style.css';

//// Components
import ButtonSubmit from './components/ButtonSubmit';
import Input from './components/Input';
import Notecard from './components/Notecard';



export default function App() {  
  const [note, setNote] = useState("");
  const inputRef = useRef(null);
  const [notecards, setNotecards] = useState([]);

  ///*********** TEXT AREA   *********************///
  const focusInput = () => {
    inputRef.current.focus();
  };

  ///***********  BUTTON  *********************///
  function submitNote(e) {
    e.preventDefault();
    setNotecards((currentNotes) => {
      return [...currentNotes, note]
    })
    focusInput();
    setNote("");
  }

  ///***********  EDIT NOTE  *********************///
  function editNote(props) {
    const remove = notecards.splice(props.index, 1);
    setNote(props.note);
  }


  ///********     MAIN JSX    ***************///

    return (
    <>
      <div className="panel container">
        <h2>Notes</h2>
        <ul className="panel-notes container">          
            {notecards.map((note, index) => {
              return <Notecard 
                key={index} 
                index={index} 
                note={note}
                editNote={editNote}
                />
            })}
         
        </ul>
      </div>
      <main className='container'>
      <h1>Welcome to the NoteTaker!</h1>
          <Input 
            ref={inputRef}
            value={note} 
            onChange={e => {
              setNote(e.target.value)}
            }
            autoFocus
          />
        <ButtonSubmit onClick={submitNote} />
      </main>
    </>
  )
}







