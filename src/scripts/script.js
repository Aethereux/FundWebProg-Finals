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


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    const checkbox = document.querySelector('#checkbox');
    const nameInput = document.querySelector('#name');
    const lastNameInput = document.querySelector('#lastname');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');

    // Form validation
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        if (!name) {
            alert('First Name is required.');
            return;
        }

        if (!lastName && !checkbox.checked) {
            alert('Last Name is required.');
            return;
        }

        if (!email || !validateEmail(email)) {
            alert('A valid Email is required.');
            return;
        }

        if (!phone || !validatePhone(phone)) {
            alert('A valid Phone number is required.');
            return;
        }

        alert('Form submitted successfully!');
        form.submit(); 
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10,15}$/; 
        return phoneRegex.test(phone);
    }

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            nameInput.placeholder = 'COMPANY NAME';
            lastNameInput.placeholder = 'FIRST NAME';
        } else {
            nameInput.placeholder = 'FIRST NAME';
            lastNameInput.placeholder = 'LAST NAME';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.QuoteSlide');
    let currentSlide = 0;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds
});