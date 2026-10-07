function toggleProfile() {
    const content = document.getElementById("profileContent");
    const arrow = document.getElementById("arrow");

    content.classList.toggle("show");
    arrow.classList.toggle("rotate");
}

const socialImages = document.querySelectorAll(".social-media img");
const usernames = [
    "@lluvvzya",
    "kezyaputranti@gmail.com",
    "@kejjyya"
];

socialImages.forEach((img, index) => {

    const tooltip = document.createElement("span");

    tooltip.className = "social-tooltip";
    tooltip.textContent = usernames[index];

    document.querySelector(".social-media").appendChild(tooltip);

    img.addEventListener("mouseenter", () => {

        const imgPosition = img.offsetLeft;
        const imgWidth = img.offsetWidth;

        tooltip.style.left = (imgPosition + imgWidth / 2) + "px";
        tooltip.style.top = "52px";

        tooltip.classList.add("show");
    });

    img.addEventListener("mouseleave", () => {
        tooltip.classList.remove("show");
    });

});