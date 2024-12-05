let arrSrc = ["hongkong.jpg", "london.jpg", "new_york.jpg", "shanghai.jpg"];
let currentIndex = 0;
let intervalId;
document.addEventListener("DOMContentLoaded", () => {
  let image = document.getElementById("image");
  let prevButton = document.getElementById("prev");
  let nextButton = document.getElementById("next");
  const updateImage = () => {
    image.src = arrSrc[currentIndex];
  };
  const startSlideshow = () => {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % arrSrc.length;
      updateImage();
    }, 5000);
  };
  const stopSlideshow = () => {
    clearInterval(intervalId);
  };
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % arrSrc.length; 
    updateImage();
  });
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + arrSrc.length) % arrSrc.length;
    updateImage();
  });
  image.addEventListener("mouseenter", stopSlideshow);
  image.addEventListener("mouseleave", startSlideshow);
  updateImage();
  startSlideshow();
  console.log("linked");
});
