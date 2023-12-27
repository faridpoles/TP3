const iconSpin = [{ transform: "rotate(0) scale(1)"},{transform: "rotate(360deg) scale(1)"}];
const iconTime = {duration: 1000, iterations:1};
const icon = document.querySelector(".rose");

icon.addEventListener("mouseover", () => {
    icon.animate(iconSpin,iconTime);
});


