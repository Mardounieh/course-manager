export const AddCourseButton = (props) => {
  return (
    <button
      className="border border-emerald-700 p-1 rounded-md text-[14px] md:text-base"
      onClick={props.addNewCourse}
    >
      Add Course
    </button>
  );
};
