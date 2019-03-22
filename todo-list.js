const $taskInput = document.querySelector('.task-input')
const $addButton = document.querySelector('.add-task')
const $list = document.querySelector('.tasks-list')


$addButton.onclick = function() {
  $list.innerHTML += `<li>${$taskInput.value}</li>`
  $taskInput.value = "" // Clear the input value
  $taskInput.focus()
}

// When the user type a key, that is enter, it adds a task
window.addEventListener('keydown', function(e) {
  console.log("Hello", e.keyCode)
  if (e.keyCode === 13) { // Enter
    $list.innerHTML += `<li>${$taskInput.value}</li>`
    $taskInput.value = "" // Clear the input value
    $taskInput.focus()
  }
})