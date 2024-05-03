export const CourseName = (props) => {
  return (
    <h1
      className={`${
        props.course.isCompleted ? "text-emerald-500" : "text-black"
      }
      ${props.editCourse ? "bg-zinc-100" : ""}
      w-full duration-100 rounded`}
      contentEditable={props.editCourse}
    >
      {props.course.courseName}
    </h1>
  );
};
