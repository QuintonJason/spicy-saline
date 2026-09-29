// JS scripts placed here
// who all is involved
const jsSubmitButton = document.querySelector('.js-submit-button');
const jsCloseButton = document.querySelector('.js-close-button');
const afterSubmission = document.querySelector('.after-submission');
const jsForm = document.querySelector('#js-form')

console.log('jsSubmitButton', jsSubmitButton);
console.log('jsCloseButton', jsCloseButton);
console.log('afterSubmission', afterSubmission);

// watches for clicks and does a thing
// jsSubmitButton.addEventListener('click', () => {
//     console.log('jsSubmitButton clicked');

//     afterSubmission.classList.add   ('show');
// });

// This needs to go on the form's submit event/button
jsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('jsSubmitButton clicked');

    afterSubmission.classList.add('show');
});

jsCloseButton.addEventListener('click', () => {
    afterSubmission.classList.remove('show');
});