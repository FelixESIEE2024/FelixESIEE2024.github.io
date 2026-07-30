const placeholderLinks = document.querySelectorAll("[data-placeholder]");

placeholderLinks.forEach((link) => {
  link.setAttribute("aria-disabled", "true");
  link.setAttribute("title", "Link to be added before publication");
  link.addEventListener("click", (event) => event.preventDefault());
});

const ambientVideo = document.querySelector(".ambient-video");

if (ambientVideo) {
  ambientVideo.muted = true;

  const startAmbientVideo = () => {
    ambientVideo.play().catch(() => {
      // Muted autoplay may still be deferred until the page becomes active.
    });
  };

  startAmbientVideo();
  ambientVideo.addEventListener("canplay", startAmbientVideo, { once: true });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      startAmbientVideo();
    }
  });
}

const videos = document.querySelectorAll("video:not(.ambient-video)");

videos.forEach((video) => {
  video.addEventListener("play", () => {
    videos.forEach((otherVideo) => {
      if (otherVideo !== video && !otherVideo.paused) {
        otherVideo.pause();
      }
    });
  });
});
