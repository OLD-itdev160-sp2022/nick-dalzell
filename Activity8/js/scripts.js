//utility function
function get(element) {
    return document.getElementById(element);
}

//application functions
function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    //clear text
    title.value = '';
    text.value = '';

    //hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    //create content elements
    var newTitle = document.createElement('h2');
    var newTitleText = document.createElement(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createElement(text.value);

    //add elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

//wire event handlers
window.addEventListener('load', function() {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});