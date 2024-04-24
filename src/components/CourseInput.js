export const CourseInput = (props) => {
  return (
    <input
      type="text"
      id="courseInput"
      placeholder="Add your course"
      className="border border-emerald-700 outline-none p-1 rounded-md"
      onChange={props.handleChange}
    />
  );
};
