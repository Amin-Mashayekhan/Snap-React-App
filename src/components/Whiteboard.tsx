import { useState } from 'react'

export default function Whiteboard({ students }: { students:string[] }) {
  
  const [whiteboardStudent, setWhiteboardStudent] = useState('porter');
  console.log(whiteboardStudent)


  return (
    <div>
      <h3 className='pb-1'>Whiteboard</h3>
      <button className='mb-2 btn btn-primary'
        onClick={() => {
          const studentIndex = Math.floor(Math.random() * students.length);
          setWhiteboardStudent(students[studentIndex]);
          // console.log(whiteboardStudent) state updates are stored until rerender 
        }}
      >
        Select Student!
      </button>
      <p>Today's whiteboard was performed by {whiteboardStudent}</p>
    </div>
  );
}
