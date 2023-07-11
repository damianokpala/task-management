/*

1. Task Representation:
   - Each task should have properties like title, description, due date, and status (e.g., "pending," "completed," "in progress").


*/

let taskManage = [
  {
    title: "Coding A Task Manager Software",
    description: "This software is to help many that are having it difficult to manage their time. It will contain constant reminders of tasks beforehand for mind preparation and awareness.",
    due_date: "May 2nd, 2023",
    status: "progress"
  },
  {
    title: "Meeting with Clients",
    description: "Discuss project requirements and provide updates on progress.",
    due_date: "July 15th, 2023",
    status: "pending"
  },
  {
    title: "Prepare Presentation",
    description: "Create a presentation for the upcoming conference.",
    due_date: "August 5th, 2023",
    status: "completed"
  }
];

/*
2. Task Array:
   - Create an array to store the tasks. Each element of the array will represent a task.

*/

// Done

/*
3. Adding Tasks:
   - Implement a feature to add tasks to the task manager. Users should be able to provide the task details such as title, description, due date, etc., and the task should be added to the task array.
*/


function addTask(taskTitle, taskDescription, taskTarget, currentStatus) {
  taskManage.push({title: taskTitle, description: taskDescription, due_date: taskTarget, status: currentStatus});
}

addTask("Task Title", "Task Description", "Task Target", "Pending");
addTask("Task Title 2", "Task Description 2", "Task Target 2", "Online");
addTask("Task Title 5", "Task Description 5", "Task Target 2", "Online");

/*
4. Updating Tasks:
   - Allow users to update task details such as the title, description, due date, or status of a specific task.
   
*/


function updateTitle(index, newTitle) {
  taskManage[index].title = newTitle;
}

updateTitle(0, "Sweeping the coding workspace");




/*
5. Deleting Tasks:
   - Implement functionality to delete a task from the task array based on its index.
*/

function deleteTask(index) {
  taskManage.splice(index, 1)
}

deleteTask(0)
console.log(taskManage);

/*

6. Displaying Tasks:
   - Create options to display tasks based on different criteria, such as displaying all tasks, displaying tasks by status (e.g., pending, completed), or displaying tasks due on a specific date.
*/

function displayTask(criteria, value) {
  for (x of taskManage) {
    let obje = [];
    if (x[criteria] != value) {
      console.log("errroor");
    } else {
      obje.push(x)
    }
    
    console.log(obje);
  }
}

displayTask("status", "Online")

/*

7. Sorting Tasks:
   - Add functionality to sort tasks based on various criteria, such as sorting by due date, status, or title.
   
*/


function sortTasks(criteria) {
  let sortedTasks = [...taskManage]; // Create a copy of the array

  switch (criteria) {
    case 'dueDate':
      sortedTasks.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
      break;
    case 'status':
      sortedTasks.sort((a, b) => a.status.localeCompare(b.status));
      break;
    case 'title':
      sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      console.log('Invalid sorting criteria.');
  }

  return sortedTasks; // Return the sorted array
}

// Sorting tasks by due date
let sortedByDueDate = sortTasks('dueDate');
console.log(sortedByDueDate);
console.log(taskManage); // Original array remains unchanged

// Sorting tasks by status
let sortedByStatus = sortTasks('status');
console.log(sortedByStatus);
console.log(taskManage); // Original array remains unchanged

// Sorting tasks by title
let sortedByTitle = sortTasks('title');
console.log(sortedByTitle);
console.log(taskManage); // Original array remains unchanged

/*

8. Filtering Tasks:
   - Implement a feature to filter tasks based on user-defined criteria, such as filtering tasks by status or searching for tasks containing specific keywords in the title or description.


*/



function filterTask(item) {
  let filteredTasks = taskManage.filter((task) => task.status === item);
  console.log(filteredTasks);
}

filterTask("Online");



/*

9. Task Count and Statistics:
   - Provide statistics about the tasks, such as the total number of tasks, the number of pending tasks, the number of completed tasks, etc.
   
*/

function filterTaskCount(item) {
  let filteredTasks = taskManage.filter((task) => task.status === item);
  console.log(filteredTasks.length);
}

filterTaskCount("Online");

/*

10. Array Methods:
    - Utilize array methods such as push(), pop(), shift(), unshift(), splice(), etc., for adding, removing, or updating tasks in the task array.

*/
console.log(taskManage);

function removeLastTask(index) {
  taskManage.splice(index, 1)
}

removeLastTask(2)

console.log(taskManage);

/*
11. Error Handling:
    - Implement error handling to handle invalid input or edge cases, such as deleting a task that doesn't exist.


*/

function removeTask(index) {
  if (index >= 0 && index < taskManage.length) {
    taskManage.splice(index, 1);
  } else {
    console.log("Invalid index. Task does not exist.");
  }
}

    
/*

12. User Interface (optional):
    - For an additional challenge, create a user interface (UI) for the task manager program using HTML, CSS, and JavaScript. The UI can provide buttons, forms, and tables to interact with and display the tasks.

*/