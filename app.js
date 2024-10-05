// Add Event Listener to the form
document.getElementById('reviewForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    console.log("Form submitted");

    // Get form values
    const name = document.getElementById('name').value.trim();
    const charity = document.getElementById('charity').value.trim();
    const rating = parseInt(document.getElementById('rating').value.trim(), 10);
    const review = document.getElementById('review').value.trim();

    // Validate form inputs
    if (rating < 1 || rating > 5) {
        alert("Rating must be between 1 and 5.");
        return; // Prevent form submission
    }

    // Create review object
    const newReview = {
        name: name,
        charity: charity,
        rating: rating,
        review: review
    };

    // Convert the review object to a JSON string
    const reviewData = JSON.stringify(newReview);

    // Pinata API endpoint for pinning JSON
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                pinata_api_key: '73b730a856c604322d86',  // Replace with actual API Key
                pinata_secret_api_key: '5ebcd76d17d82fa14053248bae2cf34ba1f1e8211ce996400350bdcddb2795f6' // Replace with actual Secret Key
            },
            body: reviewData
        });

        if (!response.ok) {
            throw new Error(`Failed to upload to Pinata: ${response.statusText}`);
        }

        const data = await response.json();

        // Pinata returns the IPFS hash (CID) after pinning
        const ipfsHash = data.IpfsHash;
        console.log("Successfully uploaded to IPFS:", ipfsHash);

        // Store the IPFS hash in localStorage or use it as needed
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push({ ipfsHash, ...newReview });
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Clear form fields
        document.getElementById('reviewForm').reset();

        // Update the list of reviews on the page
        displayReviews();

        // Show the "Want to Review?" button only after submission
        document.getElementById('reviewToggleBtn').style.display = 'block';

    } catch (error) {
        console.error("Error uploading to Pinata:", error);
        alert("Failed to submit review. Please try again.");
    }
});

// Function to display reviews
async function displayReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = ''; // Clear the list before re-rendering

    for (const review of reviews) {
        let ipfsReview = review; // Use the local data if IPFS fetch fails

        // Retrieve the review data from IPFS using the stored hash
        try {
            if (review.ipfsHash) {
                const response = await fetch(`https://gateway.pinata.cloud/ipfs/${review.ipfsHash}`);
                if (response.ok) {
                    ipfsReview = await response.json();
                } else {
                    console.error("Failed to fetch from IPFS:", response.statusText);
                }
            }
        } catch (error) {
            console.error("Error fetching from IPFS:", error);
        }

        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card', 'mb-3', 'shadow-sm');
        reviewCard.innerHTML = `
            <h4>${ipfsReview.name} reviewed ${ipfsReview.charity}</h4>
            <p><strong>Rating: ${'⭐'.repeat(ipfsReview.rating)}</strong></p>
            <p>"${ipfsReview.review}"</p>
            <button class="delete-btn" data-index="${reviews.indexOf(review)}">Delete</button>
        `;
        reviewList.appendChild(reviewCard);
    }

    // Attach delete event listeners
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            deleteReview(index);
        });
    });
}

// Add Event Listener to the "Want to Review?" button
document.getElementById('reviewToggleBtn').addEventListener('click', function () {
    const reviewSection = document.getElementById('reviewSection');
    reviewSection.style.display = reviewSection.style.display === 'none' ? 'block' : 'none';
    
    // If we are hiding the review section, clear the review list
    if (reviewSection.style.display === 'none') {
        document.getElementById('reviewList').innerHTML = ''; // Clear past reviews when hiding
    } else {
        displayReviews(); // Call to display reviews when section is shown
    }
});

// Function to delete review
function deleteReview(index) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.splice(index, 1); // Remove the review at the specified index
    localStorage.setItem('reviews', JSON.stringify(reviews)); // Update localStorage
    displayReviews(); // Re-display the reviews
}

// Initial call to display reviews when the page loads
displayReviews();
