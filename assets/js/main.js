const placeholderLinks = document.querySelectorAll("[data-placeholder]");

placeholderLinks.forEach((link) => {
  link.setAttribute("aria-disabled", "true");
  link.setAttribute("title", "Lien à compléter avant publication");
  link.addEventListener("click", (event) => event.preventDefault());
});

const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("play", () => {
    videos.forEach((otherVideo) => {
      if (otherVideo !== video && !otherVideo.paused) {
        otherVideo.pause();
      }
    });
  });
});
