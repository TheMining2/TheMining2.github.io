const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
}
document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});


// Homepage introduction: the slider changes the strength and detail of the pitch.
const pitchSlider = document.querySelector("#pitch-slider");
if (pitchSlider) {
  const pitchHeading = document.querySelector("#pitch-heading");
  const pitchCopy = document.querySelector("#pitch-copy");
  const pitchLevel = document.querySelector("#pitch-level");
  const pitchOutput = document.querySelector("#pitch-output");

  const pitchVersions = [
    {
      label: "Simple",
      heading: "I’m Alan — just some guy who likes to build things.",
      copy: "Hi! Feel free to explore my website to see what I’ve built, and reach out if you’d like to connect. I think I've got promise and potential."
    },
    {
      label: "Detailed",
      heading: "I've got the drive, curiosity, and skills to contribute to your team.",
      copy: "Hello, I'm Alan Koh. I'm a CS student at UCSD. If you need someone who can learn quickly, contribute to your team, and build software that solves problems, I’d love to connect. Others have taken the chance, so I think I'm promising."
    },
    {
      label: "Confident",
      heading: "Delivering value through software and it's applications.",
      copy: "Hello. I’m Alan, a computer science student at UCSD who enjoys turning ideas into something tangible that others can use, experience, and connect with. From modernizing NKOK’s website to building software and machine-learning projects, I'm seeking experiences that challenge me to learn, contribute, and grow as a software engineer. Others have taken the chance, will you?"
    },
    {
      label: "Persuasive",
      heading: "I bring initiative, practical experience, and a creative mindset.",
      copy: "Hi, I'm Alan Koh. I've worked to help improve a business website’s functionality, search visibility, and user experience, while also supporting day-to-day technical needs. Through individual and team projects, I’ve learned to investigate unfamiliar problems, iterate on solutions, and collaborate with others. If you need somne who will contribute to your team, learn quickly, and build solutions, reach out!"
    },
    {
      label: "Full pitch",
      heading: "An emerging engineer who’s ready to learn, contribute, and grow together.",
      copy: "Hi. I'm Alan Koh, a Computer Science student at UC San Diego with experience applying technology in a real business environment and building projects across software development and machine learning. I approach problems by understanding the need, testing ideas, and refining what doesn’t land to others. I value thoughtful, interactive collaboration, enjoy working with others to solve technical challenges, and bring curiosity and perspective from interests beyond code. Call me if you’re looking for someone who’s eager to contribute and grow with your team."
    }
  ];

  const updatePitch = () => {
    const index = Number(pitchSlider.value) - 1;
    const version = pitchVersions[index];
    if (!version) return;

    pitchHeading.textContent = version.heading;
    pitchCopy.textContent = version.copy;
    pitchLevel.textContent = `${String(index + 1).padStart(2, "0")} / 05 · ${version.label.toUpperCase()}`;
    pitchOutput.textContent = version.label;
    pitchSlider.setAttribute("aria-valuetext", version.label);
  };

  pitchSlider.addEventListener("input", updatePitch);
  updatePitch();
}
