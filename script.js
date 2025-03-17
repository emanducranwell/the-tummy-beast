// document.addEventListener("DOMContentLoaded", function () {
//     const poemContainer = document.querySelector(".main-section"); // The container that scrolls
//     const spans = document.querySelectorAll(".poem span"); // Select spans inside the poem
//     const playButton = document.querySelector(".play-button");
//     const pauseButton = document.querySelector(".pause-button");
//     const restartButton = document.querySelector(".restart-button");

//     let scrollSpeed = 2; // Default scroll speed
//     let isScrolling = false;
//     let scrollPosition = 0;
//     let scrollInterval;

//     function scrollText() {
//         if (!isScrolling) return;

//         scrollInterval = setInterval(() => {
//             if (!isScrolling) {
//                 clearInterval(scrollInterval);
//                 return;
//             }

//             scrollPosition += scrollSpeed;
//             poemContainer.scrollLeft = scrollPosition; // Moves the text horizontally

//             // Stop scrolling if we reach the end
//             if (poemContainer.scrollLeft + poemContainer.clientWidth >= poemContainer.scrollWidth) {
//                 clearInterval(scrollInterval);
//                 isScrolling = false;
//             }

//             // Check if we're near a <span> to slow down
//             spans.forEach((span) => {
//                 const spanPosition = span.getBoundingClientRect().left + poemContainer.scrollLeft;
//                 const containerMiddle = poemContainer.scrollLeft + poemContainer.clientWidth / 2;

//                 if (Math.abs(containerMiddle - spanPosition) < 50) {
//                     clearInterval(scrollInterval); // Pause scrolling
//                     setTimeout(() => {
//                         scrollSpeed = 1; // Slow down
//                         scrollText(); // Resume scrolling after slowing down
//                         setTimeout(() => {
//                             scrollSpeed = 2; // Resume normal speed
//                         }, 2000);
//                     }, 500);
//                 }
//             });
//         }, 30);
//     }

//     playButton.addEventListener("click", () => {
//         if (!isScrolling) {
//             isScrolling = true;
//             scrollText();
//         }
//     });

//     pauseButton.addEventListener("click", () => {
//         isScrolling = false;
//         clearInterval(scrollInterval);
//     });

//     restartButton.addEventListener("click", () => {
//         isScrolling = false;
//         clearInterval(scrollInterval);
//         scrollPosition = 0;
//         poemContainer.scrollLeft = 0;
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const poemContainer = document.querySelector(".main-section"); // Scrollable area
    const playButton = document.querySelector(".play-button");
    const pauseButton = document.querySelector(".pause-button");
    const restartButton = document.querySelector(".restart-button");

    let scrollSpeed = 5; // Default scrolling speed
    let isScrolling = false;
    let scrollPosition = 0;
    let scrollInterval;

    function startScrolling() {
        if (!isScrolling) return;

        scrollInterval = setInterval(() => {
            if (!isScrolling) {
                clearInterval(scrollInterval);
                return;
            }

            // Move the text horizontally
            scrollPosition += scrollSpeed;
            poemContainer.scrollLeft = scrollPosition;

            // Stop scrolling when reaching the end
            if (poemContainer.scrollLeft + poemContainer.clientWidth >= poemContainer.scrollWidth) {
                clearInterval(scrollInterval);
                isScrolling = false;
            }
        }, 30);
    }

    playButton.addEventListener("click", () => {
        if (!isScrolling) {
            isScrolling = true;
            startScrolling();
        }
    });

    pauseButton.addEventListener("click", () => {
        isScrolling = false;
        clearInterval(scrollInterval);
    });

    restartButton.addEventListener("click", () => {
        isScrolling = false;
        clearInterval(scrollInterval);
        scrollPosition = 0;
        poemContainer.scrollLeft = 0;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hoverWords = document.querySelectorAll(".mummy, .tummy, .faint"); // Select words with images
    const hoverImage = document.createElement("img"); // Create floating image
    hoverImage.classList.add("floating-image");
    document.body.appendChild(hoverImage); // Add image to body

    hoverWords.forEach((word) => {
        word.addEventListener("mouseenter", function (event) {
            const imageSrc = word.getAttribute("data-image"); // Get image from data attribute
            if (imageSrc) {
                hoverImage.src = imageSrc;
                hoverImage.style.display = "block";
                hoverImage.style.position = "fixed"; // Keeps it independent from scrolling
                hoverImage.style.left = event.clientX + 20 + "px"; // Position near cursor
                hoverImage.style.top = event.clientY + 20 + "px"; 
            }
        });

        word.addEventListener("mousemove", function (event) {
            hoverImage.style.left = event.clientX + 20 + "px"; 
            hoverImage.style.top = event.clientY + 20 + "px"; 
        });

        word.addEventListener("mouseleave", function () {
            hoverImage.style.display = "none"; 
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const satWord = document.querySelector(".sat");
    const satContainer = satWord.parentElement; // Selects the container
    const poemContainer = document.querySelector(".main-section"); // The scrolling container

    function isInViewportHorizontally(element) {
        const rect = element.getBoundingClientRect();
        return rect.left >= 0 && rect.right <= window.innerWidth;
    }

    function checkVisibility() {
        if (isInViewportHorizontally(satWord)) {
            satWord.classList.add("visible");
            satContainer.style.visibility = "visible"; // Ensure it's always visible
        } else {
            satWord.classList.remove("visible");
            satContainer.style.visibility = "hidden"; // Hide if not in viewport
        }
    }

    satWord.addEventListener("mouseenter", function () {
        if (satWord.classList.contains("visible")) {
            satWord.classList.add("drop"); // Triggers the drop
            satContainer.classList.add("show-placeholder"); // Keeps placeholder visible
        }
    });

    poemContainer.addEventListener("scroll", checkVisibility);
    checkVisibility();
});







