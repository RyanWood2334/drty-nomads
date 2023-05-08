const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};


const deleteButtons = document.querySelectorAll('[data-id]');
deleteButtons.forEach(button => {
  button.addEventListener('click', async (event) => {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/stamps/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      console.log(response.status);
      alert('Failed to delete project');
    }
  });
});



const newStampBtn = document.querySelector('#new-stamp-btn');
  const newStampFormContainer = document.querySelector('#new-stamp-form-container');
  let n=0;
  const showNewStampForm = () => {
    if (n==0) {
      newStampFormContainer.style.display = 'block';
      n++;
    } else {
    newStampFormContainer.style.display = 'none';
    n--;
    }
  };
  
  newStampBtn.addEventListener('click', showNewStampForm);

document
  .querySelector('.new-stamp-form')
  .addEventListener('submit', newFormHandler);
