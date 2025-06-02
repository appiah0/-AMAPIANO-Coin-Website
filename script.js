// Hamburger & Drawer Toggle (NEW)
// DOM ELEMENT
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// 1. Toggle button + drawer with animations
hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// 2. Close menu when clicking links (optional but recommended)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.hamburger') && !e.target.closest('.nav-links')) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Keep your existing smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ 
      behavior: 'smooth' 
    });
    navLinks.classList.remove('active'); // Close drawer on click
    document.body.style.overflow = 'auto'; // Re-enable scroll
  });
});

// FAQ Accordion Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // Close all other answers first
    document.querySelectorAll('.faq-answer').forEach(answer => {
      if (answer !== question.nextElementSibling) {
        answer.classList.remove('active');
        // Optional: Also remove 'active' class from questions
        answer.previousElementSibling.classList.remove('active');
      }
    });
    
    // Toggle current answer
    const answer = question.nextElementSibling;
    answer.classList.toggle('active');
    // Optional: Toggle 'active' class on question
    question.classList.toggle('active');
  });
});

// Keep contract address copying (if exists)
// Contract Address Copy Functionality
const contractAddress = document.getElementById('contractAddress');
const copyButton = document.getElementById('copyButton');

// Create tooltip element
const tooltip = document.createElement('span');
tooltip.className = 'tooltiptext';
tooltip.textContent = 'Copied!';

// Add tooltip to button
copyButton.classList.add('tooltip');
copyButton.appendChild(tooltip);

// Copy action
copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(contractAddress.textContent.trim())
    .then(() => {
      copyButton.classList.add('show-tooltip');
      setTimeout(() => {
        copyButton.classList.remove('show-tooltip');
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
});