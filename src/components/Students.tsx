export default function Students(props: { studentArray:Array<string> } ) {
  
  return (
    <>
      <h4>Students: </h4>
      {props.studentArray.map((student: string, i: number) => {
        return <p key={i}>{student}</p>;
      })}
    </>
  );
}
