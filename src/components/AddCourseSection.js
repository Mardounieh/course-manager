import { useState, useEffect } from "react";
import { CourseSection } from "./CourseSection";
import { CourseInput } from "./CourseInput";
import { AddCourseButton } from "./AddCourseButton";
export const AddCourse = () => {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const [editable, setEditable] = useState(false)
  useEffect(() => {
      localStorage.getItem("courseList") === null
        ? setCourseList([])
        : setCourseList(JSON.parse(localStorage.getItem("courseList")));
  }, []);
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
      localStorage.setItem(
        "courseList",
        JSON.stringify([...courseList, course])
      );
    }
  };
  const deleteCourse = (courseId) => {
    setCourseList(courseList.filter((course) => courseId !== course.id));
    const newSavedCourses = JSON.parse(localStorage.getItem("courseList"));
    newSavedCourses.map((savedCourse, index) => {
      if (savedCourse.id === courseId) newSavedCourses.splice(index, 1);
      localStorage.setItem("courseList", JSON.stringify(newSavedCourses));
    });
  };
  const completeCourse = (courseId) => {
    const newCourseList = courseList.map((course) => {
      if (course.id === courseId) {
        return { ...course, isCompleted: !course.isCompleted };
      } else return course;
    });
    localStorage.setItem("courseList", JSON.stringify(newCourseList));
    setCourseList(newCourseList);
  };
  const editCourse = () => {
    return setEditable(!editable);
  }
  return (
    <div className="flex flex-col justify-center gap-2 w-full">
      <div className="flex justify-center gap-2">
        <CourseInput handleChange={handleChange} />
        <AddCourseButton addNewCourse={addNewCourse} />
      </div>
      <CourseSection
        courseList={courseList}
        deleteCourse={deleteCourse}
        completeCourse={completeCourse}
        editCourse={editCourse}
        editable={editable}
      />
    </div>
  );
};
