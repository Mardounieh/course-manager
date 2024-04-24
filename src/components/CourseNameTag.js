export const CourseName = (props) => {
  return (
    <h1 className={props.course.isCompleted ? "text-emerald-500" : "text-black"}>
      {props.course.courseName}
    </h1>
  );
};