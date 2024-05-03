import { CompleteCourseButton } from "./CompleteCourseButton";
import { CourseName } from "./CourseNameTag";
import { DeleteCourseButton } from "./DeleteCourseButton";
import { EditCourse } from "./EditCourseButton";

export const CourseSection = (props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {props.courseList.map((course, index) => {
        return (
          <div
            key={`courseContainer_${index}`}
            className={`${
              props.editable ? "border-green-500" : "border-black"
            } border p-1 rounded flex gap-2 justify-between items-center w-1/4 duration-200`}
          >
            <CourseName course={course} editCourse={props.editable} />
            <EditCourse editCourse={props.editCourse} />
            <CompleteCourseButton
              course={course}
              completeCourse={props.completeCourse}
            />
            <DeleteCourseButton
              course={course}
              deleteCourse={props.deleteCourse}
            />
          </div>
        );
      })}
    </div>
  );
};
