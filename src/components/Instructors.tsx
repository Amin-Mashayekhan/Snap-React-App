

export default function Instructors() {

  const instructors = {
    senior: 'dylan',
    associate: 'sean',
  };

  return (
    <>
      <h3>Instructors</h3>
      <p>Sr: {instructors.senior} Associate {instructors['associate']}</p>
    </>
  )
}
