import { useState } from 'react'

export default function Whiteboard({ students }: { students:string[] }) {
  
  const [whiteboardStudent, setWhiteboardStudent] = useState('porter');
  console.log(whiteboardStudent)


  return (
    <>
      <h3>Whiteboard</h3>
      <button
        onClick={() => {
          const studentIndex = Math.floor(Math.random() * students.length);
          setWhiteboardStudent(students[studentIndex]);
          // console.log(whiteboardStudent) state updates are stored until rerender 
        }}
      >
        Select Student
      </button>
      <p>Today's whiteboard was performed by {whiteboardStudent}</p>
    </>
  );
}
