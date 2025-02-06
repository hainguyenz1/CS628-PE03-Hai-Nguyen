# CS628-PE03-Hai-Nguyen
# ToDo List App
This document describes the ToDo List App's functionality using the Input-Process-Output model.

## Input
The application accepts user input through a text field where users can type the description of a task.  This input is captured and stored as a string.  Additionally, button clicks ("Add Task" and "Delete") serve as input events, triggering specific actions within the application.

## Process
1.  **Adding a Task:** When the "Add Task" button is clicked, the entered task description is retrieved from the input field.  The application creates a new task object with a unique ID and the provided description. This object is then added to the application's state, which is an array of task objects.  Empty tasks are prevented from being added.
2.  **Deleting a Task:** When a "Delete" button associated with a specific task is clicked, the application identifies the task to be deleted based on its unique ID.  It then removes that task object from the application's state.
3.  **Rendering the List:** The application continuously monitors its state (the array of task objects). Whenever the state is modified (by adding or deleting a task), the application re-renders the list of tasks on the user interface.  It uses the `map()` function to iterate over the task array and create a visual representation of each task, including its description and a "Delete" button.

## Output
The application's primary output is a dynamic list of ToDo tasks displayed on the user interface. Each task is shown with its description.  For each task, a "Delete" button is also rendered, allowing users to remove tasks from the list.  The output is updated in real time as users interact with the application, providing immediate feedback on task additions and deletions.

## Key Points and Explanations:
State Management: useState is used to manage the input value (task) and the array of tasks (tasks).
Component Structure: The app is broken down into App (main), TaskList, and Task components for better organization.
Adding Tasks: handleAddTask adds a new task object (with a unique id and text) to the tasks array. It also clears the input field.
Deleting Tasks: handleDeleteTask filters the tasks array, removing the task with the matching id.
Rendering the List: tasks.map() dynamically renders the list of Task components in TaskList.
Styling: Basic CSS is provided to style the app
