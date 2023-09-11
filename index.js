function deleteItem(event) {
    event.preventDefault();

    let name = event.target.userName.value;
    let email = event.target.email.value;
    let contactNumber = event.target.phoneNumber.value;

    let obj = {
        Name: name,
        Email: email,
        ContactNumber: contactNumber
    }

    localStorage.setItem(obj.Email, JSON.stringify(obj));
    showOnUserScreen(obj);

    event.target.reset();

}

function showOnUserScreen(obj) {
    let parentELement = document.getElementById('listOfItem');
    let childElement = document.createElement('li');
    childElement.textContent = obj.Name + '- ' + obj.Email + '- ' + obj.ContactNumber;
    parentELement.appendChild(childElement);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    childElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        removeList(childElement);
        localStorage.removeItem(obj.Email); // Remove from localStorage
    });


    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    childElement.appendChild(editBtn);

    editBtn.addEventListener('click', function () {
        editItem(childElement);
        localStorage.removeItem(obj.Email);
    });


}



function removeList(listItem) {
    let parentList = listItem.parentElement;
    parentList.removeChild(listItem);
}
function editItem(listItem) {
    let parentList = listItem.parentElement;
    parentList.removeChild(listItem);
}

