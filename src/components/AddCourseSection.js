import { useState } from "react";
import { CourseSection } from "./CourseSection";

export const AddCourse = () => {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const handleChange = (event) => {
    setNewCourse(event.target.value);
  };
  const addNewCourse = () => {
    const course = {
      courseName: newCourse,
      id:
        courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
      isCompleted: false,
    };
    if (newCourse !== "") {
      setCourseList([...courseList, course]);
    }
  };
  const deleteCourse = (courseId) => {
    setCourseList(courseList.filter((course) => courseId !== course.id));
  };
  const completeCourse = (courseId) => {
    const newCourseList = courseList.map((course) => {
      if (course.id === courseId) return { ...course, isCompleted: !course.isCompleted };
      else return course;
    });
    setCourseList(newCourseList);
  };
  return (
    <div className="flex flex-col justify-center gap-2 w-full">
      <div className="flex justify-center gap-2">
        <input
          type="text"
          id="courseInput"
          placeholder="Add your course"
          className="border border-emerald-700 outline-none p-1 rounded-md"
          onChange={handleChange}
        />
        <button
          className="border border-emerald-700 p-1 rounded-md"
          onClick={addNewCourse}
        >
          Add Course
        </button>
      </div>
      <CourseSection
        courseList={courseList}
        deleteCourse={deleteCourse}
        completeCourse={completeCourse}
      />
    </div>
  );
};