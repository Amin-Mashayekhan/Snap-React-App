import Body from "../components/Body";
import Instructors from "../components/Instructors";
import Students from "../components/Students";
import Whiteboard from "../components/Whiteboard";

export default function MatrixPage() {
  
 console.log(localStorage.getItem('token'), 'from landing page')

  const students = [
    'tim',
    'porter',
    'lyla',
    'toby',
    'raul',
    'josh',
    'milad',
    'tom',
    'senait',
    'mabel',
    'mel',
    'heather',
  ];

  return (
    <Body sidebar>
<div className="card shadow col-lg-9 col-md-10 col-sm-11 mx-auto">
        <Instructors />
        <Students studentArray={students} />
        <Whiteboard students={students} />
</div>
    </Body>
  )
}
