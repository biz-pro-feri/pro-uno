const appHeight = () => {
	const doc = document.documentElement;
	doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", appHeight);
appHeight();

const headerShadow = document.querySelector(".header-shadow");

window.onscroll = () => {
	if (window.scrollY > 30) {
		headerShadow.classList.add("nav-bg-solid");
	} else {
		headerShadow.classList.remove("nav-bg-solid");
	}
};
