const newFormHandler = async (event) => {
  event.preventDefault();

  const destination_name = document.querySelector("#project-name").value.trim();
  const photo = document.querySelector("#project-funding").value.trim();
  const destination_notes = document
    .querySelector("#project-desc")
    .value.trim();

  if (destination_name && destination_notes) {
    const response = await fetch(`/api/stamps`, {
      method: "POST",
      body: JSON.stringify({ destination_name, photo, destination_notes }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const deleteButtons = document.querySelectorAll("[data-id]");
deleteButtons.forEach((button) => {
  button.addEventListener("click", async (event) => {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/stamps/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      console.log(response.status);
      alert("Failed to delete project");
    }
  });
});

const newStampBtn = document.querySelector("#new-stamp-btn");
const newStampFormContainer = document.querySelector(
  "#new-stamp-form-container"
);
let n = 0;
const showNewStampForm = () => {
  if (n == 0) {
    newStampFormContainer.style.display = "block";
    n++;
  } else {
    newStampFormContainer.style.display = "none";
    n--;
  }
};

newStampBtn.addEventListener("click", showNewStampForm);

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);

async function initMap() {
  const img = document.getElementById('ac-img');
  console.log('maps init!');
  const el = document.getElementById('project-name');
  const options = {
    types: ["locality", "country", "administrative_area_level_1"],
  }
  const autocomplete = new google.maps.places.Autocomplete(el, options);

  // Adds pictures
  autocomplete.addListener('place_changed', (c) => {
    const place = autocomplete.getPlace();
    if (place.photos.length > 0) {
      const url = place.photos[0].getUrl({
        maxWidth: 800,
        maxHeight: 400,
      })
      img.removeAttribute('hidden');
      img.setAttribute('src', url)
      console.log(url);
    }
  })
}