// Function to handle form submission for creating new stamp
const newFormHandler = async (event) => {
  event.preventDefault();

  const destination_name = document.querySelector("#project-name").value.trim();
  // let photo = "";
  const destination_notes = document
    .querySelector("#project-desc")
    .value.trim();

  const photo_url = picUploadUrl;
  // Get the uploaded photo URL

  if (destination_name && destination_notes && photo_url) {
    const response = await fetch(`/api/stamps`, {
      method: "POST",
      body: JSON.stringify({ destination_name, photo_url, destination_notes }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create stamp");
    }
  }
};

// Function to handle deletion of stamps
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

let picUploadUrl = "";
// Function to handle photo upload
const uploadPhotoBtn = document.querySelector("#add-photo-btn");
const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "duaznt4wg",
    uploadPreset: "drty_nomads_upload",
    sources: ["local", "url", "facebook", "instagram", "google_drive"],
    multiple: true,
    maxfiles: 5,
    styles: {
      palette: {
        window: "#B55419",
        windowBorder: "#66350F",
        tabIcon: "#7519B5",
        menuIcons: "#7519B5",
        textDark: "#FFFFF",
        textLight: "#00000",
        link: "#0078FF",
        action: "#FF620C",
        inactiveTabIcon: "#0E2F5A",
        error: "#F44235",
        inProgress: "#0078FF",
        complete: "#20B832",
        sourceBg: "#E4EBF1",
      },
      frame: {
        background: "#7519B5",
      },
      fonts: {
        "'Cute Font', cursive":
          "https://fonts.googleapis.com/css?family=Cute+Font",
      },
    },
  },
  (err, result) => {
    if (!err && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      picUploadUrl = result.info.url;
      console.log("uploaded-pic-URL", picUploadUrl);
    }

    // console.log("Done! Here is the image info: ", result.info);
    // document
    //   .getElementById("card-img-top")
    //   .setAttribute("src", result.info.url);
  }
);
uploadPhotoBtn.addEventListener("click", function () {
  myWidget.open();
});

// Function to show/hide new stamp form
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

// Event listener for form submission
document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);

// google maps API
async function initMap() {
  const img = document.getElementById("ac-img");
  console.log("maps init!");
  const el = document.getElementById("project-name");
  const options = {
    types: ["locality", "country", "administrative_area_level_1"],
  };
  const autocomplete = new google.maps.places.Autocomplete(el, options);

  // Adds pictures
  // autocomplete.addListener("place_changed", (c) => {
  //   const place = autocomplete.getPlace();
  //   if (place.photos.length > 0) {
  //     const url = place.photos[0].getUrl({
  //       maxWidth: 800,
  //       maxHeight: 400,
  //     });
  //     img.removeAttribute("hidden");
  //     img.setAttribute("src", url);
  //     console.log(url);
  //   }
  // });
}
