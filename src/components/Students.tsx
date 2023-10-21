export default function Students(props: { studentArray:Array<string> } ) {
  
  return (
    <div className="text-start mb-4">
      <h4 className="mb-3">Students: </h4>
      <div className="d-flex flex-wrap">
        {props.studentArray.map((student: string, i: number) => {
          return <p className="badge fs-6 bg-info me-2 text-black " key={i}>{student}</p>;
        })}
      </div>
    </div>
  );
}
