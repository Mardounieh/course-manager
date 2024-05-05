export const DeleteCourseButton = (props) => {
  return (
      <button
        className="px-2"
        onClick={() => props.deleteCourse(props.course.id)}
      >
        X
      </button>
  );
};