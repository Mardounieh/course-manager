export const DeleteCourseButton = (props) => {
  return (
      <button
        className="border border-emerald-600 px-1 rounded"
        onClick={() => props.deleteCourse(props.course.id)}
      >
        X
      </button>
  );
};