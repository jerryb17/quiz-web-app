/* TODO: 2. Select all elements needed
* The form element (has the id 'quiz-form' )
* The answer inputs (have the class )

* BONUS: The questions (have the class
question-item' )
* BONUS: The alert (has the id ) */

const form = document.getElementById('quiz-form');
const answers = Array.from(document.querySelectorAll('.answer'));
const questionItems = document.querySelectorAll('.question-item');
const alert = document.querySelector('#alert');
//tod03. Create a submit event listener for the form that does the following.

// 1. Prevent the default behavior
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // 6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the  incorrect class and removing the correct class from all question items before checking the correct answers
  questionItems.forEach((que) => {
    que.classList.add('incorrect');
    que.classList.remove('correct');
  });
  //2. Get all selected answers (use the •checked' property on the input to determine if it is selected or not)
  const checkedAns = answers.filter((answer) => answer.checked);
  // 3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
  checkedAns.forEach((answer) => {
    const isTrue = answer.value === 'true';
    const queItem = answer.closest('.question-item');
    // 4. For each correct answer add the class correct* to the parent with the class 'question-item* and remove the class incorrect
    if (isTrue) {
      queItem.classList.add('correct');
      queItem.classList.remove('incorrect');
    } else {
      // 5. For each incorrect answer add the class incorrect* to the parent with the class question-item* and remove the class 'correct* .
      queItem.classList.add('incorrect');
      queItem.classList.remove('correct');
    }
    // 7. BONUS: If all answers are correct show the element with the id *alert* and hide it after one second (look into set Timeout) (use the class active to show the alert and remove the class to hide it)
    const allTrue = checkedAns.every((answer) => {
      return answer.value === 'true';
    });
    const lenQue = checkedAns.length === questionItems.length;
    if (allTrue && lenQue) {
      alert.classList.add('active');
      setTimeout(() => {
        alert.classList.remove('active');
      }, 1000);
    }
  });
});
