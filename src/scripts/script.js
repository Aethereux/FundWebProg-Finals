document.addEventListener('DOMContentLoaded', () => {
    const galleryWrapper = document.querySelector('.GalleryWrapper');
    const galleryItems = Array.from(document.querySelectorAll('.GalleryItem'));
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    const visibleItems = 3; // Number of items visible at a time
    const totalItems = galleryItems.length;
    const itemWidth = galleryItems[0].offsetWidth + 20; // Include margin
    let currentIndex = 0;

    // Function to update the slide position
    const updateGallery = () => {
        galleryWrapper.style.transition = 'transform 0.5s ease-in-out';
        galleryWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };

    // Event listener for the next button
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the start
        }
        updateGallery();
    });

    // Event listener for the previous button
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - visibleItems; // Loop back to the end
        }
        updateGallery();
    });

    // Auto-scroll functionality (optional)
    const autoScrollInterval = 3000; // Time in milliseconds (3 seconds)
    let autoScroll = setInterval(() => {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateGallery();
    }, autoScrollInterval);

    // Pause auto-scroll on hover
    galleryWrapper.addEventListener('mouseenter', () => {
        clearInterval(autoScroll);
    });

    // Resume auto-scroll when hover ends
    galleryWrapper.addEventListener('mouseleave', () => {
        autoScroll = setInterval(() => {
            if (currentIndex < totalItems - visibleItems) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateGallery();
        }, autoScrollInterval);
    });
});