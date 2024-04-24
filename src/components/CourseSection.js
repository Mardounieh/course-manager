import { CompleteCourseButton } from "./CompleteCourseButton";
import { CourseName } from "./CourseNameTag";
import { DeleteCourseButton } from "./DeleteCourseButton";
export const CourseSection = (props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {props.courseList.map((course, index) => {
        return (
          <div
            key={`courseContainer_${index}`}
            className="flex gap-2 justify-between items-center w-1/4"
          >
            <CourseName course={course}/>
            <CompleteCourseButton course={course} completeCourse={props.completeCourse} />
            <DeleteCourseButton course={course} deleteCourse={props.deleteCourse} />
          </div>
        );
      })}
    </div>
  );
};
