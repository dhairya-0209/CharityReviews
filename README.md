# SatyaSachita - Decentralized Charity Reviews

*SatyaSachita* is a decentralized review platform built to ensure genuine, tamper-proof reviews for charities. By utilizing *IPFS* and *Pinata, this project provides a secure way to submit and fetch reviews stored on the blockchain. This platform is part of the **Sankalp* project, focused on leveraging Web3 for social good.

## Parent Repository: [Sankalp](https://github.com/LAKSHYA1509/HackIndia-Spark-3-Hackn-Roll)

---

## Technologies Used

### Frontend

- *HTML*: Defines the structure and content of the web page, including forms and layout.
- *CSS*: Styles the webpage for a clean, consistent look and feel.
- *Bootstrap*: Simplifies the creation of a responsive, mobile-friendly interface with form elements, grids, and buttons.

### JavaScript

- *Vanilla JavaScript*: Handles webpage interactivity, form submission, input validation, and dynamically updates the review list.
- *Asynchronous API Calls: Connects with **Pinata* to store review data in *IPFS*, ensuring secure and decentralized data storage.

### Pinata & IPFS

- *Pinata*: An IPFS pinning service that stores user reviews in a decentralized manner, ensuring reviews are secure and tamper-proof.
- *IPFS (InterPlanetary File System)*: A decentralized peer-to-peer file storage system used to store user reviews securely.

### Version Control

- *Git*: Used for version control and to track changes in the codebase.
- *GitHub*: Hosted the project repository, allowing for easy collaboration, sharing, and deployment.

---

## How to Use

### 1. Access the Website

Open a web browser and visit the live site:  
[SatyaSachita - Charity Reviews](https://dhairya-0209.github.io/CharityReviews/)

### 2. Submit a Review

- Enter your name, the charity name, a rating (1-5 stars), and a written review.
- Click the *"Submit Review"* button to submit your review to the decentralized network via Pinata.
  
### 3. View Past Reviews

- After submitting a review, click the *"Want to Review?"* button to display all past reviews fetched from IPFS.

### 4. Delete Reviews (Optional)

- Each review has a *"Delete"* button allowing you to remove it from the list.

## Steps to Clone and Run the Project Locally

Follow these steps to clone and run the *SatyaSachita* project from GitHub.

### 1. Clone the Repository

1. Open a terminal (Command Prompt, Git Bash, or terminal on macOS/Linux).
2. Run the following command:

   bash
   git clone https://github.com/dhairya-0209/CharityReviews.git
   

3. Navigate to the project directory:

   bash
   cd CharityReviews
   

### 2. Open the Project Locally

1. Open the project files using any text editor or IDE (e.g., VS Code).
2. In the terminal, run:

   bash
   code .
   

   This will open the project in Visual Studio Code (if installed).

### 3. Serve the Project Locally

1. You can directly open the index.html file in your browser, or
2. If using VS Code, right-click index.html and select *"Open with Live Server"* (requires the Live Server extension).

### 4. Install Dependencies (if needed)

1. Install *Node.js* and *npm* (if not installed).
2. If the project has a package.json file, run:

   bash
   npm install
   

### 5. Running the Project

Once you have the project set up:

1. Open the project in a browser.
2. The web app will be ready to submit reviews, store them on IPFS via Pinata, and display past reviews.

### 6. Making Changes (Optional)

After making changes, use the following Git commands to commit and push updates back to GitHub:

bash
git add .
git commit -m "Describe your changes"
git push origin main

## Conclusion

By following these steps, anyone can clone, modify, and run the *SatyaSachita* project locally, contributing to the decentralized charity review system.
