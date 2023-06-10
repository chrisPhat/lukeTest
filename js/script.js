const videoModal = document.querySelector(".videoModal");
const aboutModal = document.querySelector(".aboutModal");
const triggers = document.querySelectorAll(".trigger");
const aboutTrigger = document.querySelector(".aboutTrigger");
// const modalInfo = document.querySelector("#modalInfo");
const videoContainer= document.querySelector("#videoContainer");

function populateModal(e){
    var currentVideoURL = e.currentTarget.getAttribute("data-info");
    videoContainer.innerHTML = `<iframe src="https://player.vimeo.com/video/${currentVideoURL}?h=858944ab9f&title=false&byline=false&portrait=false" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`
    toggleModal();
}

aboutTrigger.addEventListener('click', ()=>{
    aboutModal.classList.toggle("show-modal");
})

function toggleModal() {
    videoModal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === videoModal) {
        videoContainer.innerHTML = "";
        toggleModal();
    } else if (event.target === aboutModal){
        aboutModal.classList.toggle('show-modal');
    }
}

triggers.forEach((trigger)=>{
    trigger.addEventListener("click", populateModal);
    window.addEventListener("click", windowOnClick);
})

