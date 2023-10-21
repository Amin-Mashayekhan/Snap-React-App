

export default function Instructors() {

  const instructors = {
    senior: 'dylan',
    associate: 'sean',
  };

  return (
    <div className="mb-4">
      <h3 className="pb-1">Instructors</h3>
      <p>Sr: {instructors.senior} Associate {instructors['associate']}</p>
    </div>
  )
}
