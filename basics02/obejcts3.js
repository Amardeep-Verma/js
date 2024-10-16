const course = {
  coursename : "javascript",
  price : "999",
  courseInstructor : "hitesh"
}

//course.courseInstructor

const {courseInstructor : instructor} = course   // object destructuring
console.log(courseInstructor);
console.log(instructor);

