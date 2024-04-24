export const CompleteCourseButton = (props) => {
  return (
      <button onClick={() => props.completeCourse(props.course.id)}>Done</button>
  );
};