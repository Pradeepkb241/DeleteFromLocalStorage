function deleteItem(event){
    event.preventDefault();

    let name = event.target.userName.value;
    let email = event.target.email.value;
    let contactNumber = event.target.phoneNumber.value;

    let obj = {
        Name: name,
        Email: email,
        ContactNumber:contactNumber
    }

    localStorage.setItem('obj' ,JSON.stringify(obj));
    showOnUserScreen(obj);

    event.target.reset();
    


}

function showOnUserScreen(obj){
    let parentELement = document.getElementById('listOfItem');
    let childElement = document.createElement('li');
    childElement.textContent = obj.Name +'- '+obj.Email+'- ' +obj.ContactNumber;
    parentELement.appendChild(childElement);

    let btn = document.createElement('button');
    btn.textContent = 'Delete';
    childElement.appendChild(btn);

    btn.addEventListener('click',removeItem)
    
}



function removeItem(event) {
  let listItem = event.target.parentElement;
  let parentList = listItem.parentElement;
  parentList.removeChild(listItem);
}
