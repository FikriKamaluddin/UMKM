document.addEventListener("DOMContentLoaded", function() {
    // Function to increment the view count for a product
    function incrementViewCount(productId) {
        // Retrieve the current view count from local storage
        var currentViewCount = localStorage.getItem("viewCount" + productId) || 0;

        // Increment the view count
        currentViewCount++;
        
        // Update the view count display
        document.getElementById("viewCount" + productId).innerText = currentViewCount + " Views";

        // Save the updated view count to local storage
        localStorage.setItem("viewCount" + productId, currentViewCount);
    }

    // Function to track product views on page load
    function trackProductViews(productId, imageId) {
        // Increment view count when the page is loaded
        incrementViewCount(productId);

        // Optionally, track views based on whether the image is in the viewport (similar to the previous example)
        var productImage = document.getElementById(imageId);
        window.addEventListener("scroll", function() {
            if (isElementInViewport(productImage)) {
                incrementViewCount(productId);
            }
        });
    }

    // Check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Track views for each product
    trackProductViews(1, "product1Image");
    trackProductViews(2, "product2Image");

    // Add more products and track views as needed
});


// Reset View
localStorage.setItem("viewCount1", 0);