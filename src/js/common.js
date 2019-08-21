const doc = document;
const ioCallback = entries => {
  entries.forEach(({ intersectionRatio, target }) => {
    if (intersectionRatio > 0) {
      target.classList.add("observed");
    }
  });
};

const intersectionObserver = new IntersectionObserver(ioCallback);

window.addEventListener("scroll", _ => {
  const header = doc.querySelector("header");
  if (window.scrollY > 0) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    return;
  }
  header.style.backgroundColor = "transparent";
});

window.addEventListener("load", _ => {
  const lists = doc.querySelectorAll("#nav-bar ul li");
  for (let item of lists) {
    item.addEventListener("mouseover", ({ currentTarget }) => {
      const target = currentTarget.querySelector(".text");
      target.style.transform = "translateY(-100%)";
    });

    item.addEventListener("mouseout", ({ currentTarget }) => {
      const target = currentTarget.querySelector(".text");
      target.style.transform = "translateY(0%)";
    });
  }

  const animatedImages = doc.getElementsByClassName("animated-image");
  for (let item of animatedImages) {
    intersectionObserver.observe(item);
  }
});
