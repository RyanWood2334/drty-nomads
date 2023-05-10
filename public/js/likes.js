function likeStamp () {
    const stampId = this.attributes["data-id"].nodeValue;

    console.log(this.attributes);
    
    // make put request
    fetch(`/api/stamps/${stampId}/like`, {
        method: "PUT",
      }).then((response) => {
        console.log(response);
      }).catch((err) => {
        console.log(err);
      })
      
}


const likeBtns = document.getElementsByClassName("stamp-like-btn");

for (let i=0; i<likeBtns.length; i++) {
    console.log(likeBtns[i]);
    likeBtns[i].addEventListener("click", likeStamp);
}
