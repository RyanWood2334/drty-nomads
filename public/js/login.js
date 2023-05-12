const aboutMeInput = document.querySelector("#about_me-signup");

aboutMeInput.addEventListener("input", () => {
  const maxLength = 80;
  if (aboutMeInput.value.length > maxLength) {
    aboutMeInput.value = aboutMeInput.value.slice(0, maxLength);
  }
});

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      alert(await response.text());
    }
  }
};
let profilePicUploadUrl = "";

const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector("#first_name-signup").value.trim();
  const last_name = document.querySelector("#last_name-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const user_age = document.querySelector("#user_age-signup").value.trim();
  const user_home = document.querySelector("#user_home-signup").value.trim();
  const about_me = document.querySelector("#about_me-signup").value.trim();
  const profile_pic = profilePicUploadUrl;

  if (
    first_name &&
    username &&
    password &&
    user_age &&
    user_home &&
    about_me &&
    profile_pic
  ) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        password,
        profile_pic,
        user_age,
        user_home,
        about_me,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("User created");
      document.location.replace("/profile");
      // document.location.replace('/stamps');
    } else {
      alert(await response.text());
    }
  }
};
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

// Function to handle photo upload
const profilePicBtn = document.querySelector("#profile-pic-btn");
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
      profilePicUploadUrl = result.info.url;
      console.log("uploaded-pic-URL", profilePicUploadUrl);
      window.alert("Picture uploaded!");
      document.getElementById("profile-pic-btn");
    }
  }
);

profilePicBtn.addEventListener("click", function () {
  myWidget.open();
});

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
