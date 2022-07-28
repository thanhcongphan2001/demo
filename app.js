//==========start,get/renderCourse==========
var courseAPI = "http://localhost:3000";
fetch(courseAPI)
  .then(response => response.json())
  .then(data => console.log(data));
