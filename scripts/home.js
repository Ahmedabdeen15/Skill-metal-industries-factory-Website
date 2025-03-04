document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const lottieElement = document.getElementById("lottieLogo");
        if (lottieElement) {
            lottieElement.style.transition = "opacity 1s";
            lottieElement.style.opacity = "0";
            setTimeout(() => {
                lottieElement.style.display = "none";
            }, 1000); // Wait for the fade-out transition to complete
        }
    }, 3000); // Start fade-out after 3 seconds
});
