
function checkDeadLinks(data) {
  data.forEach(member => {
    fetch(`https://api.allorigins.win/get?url=${member.url}`, { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          handleDeadLink(member.url);
        }
      })
      .catch(error => {
        console.error('Error checking link:', error.message);
        handleDeadLink(member.url);
      });
  });
}

function handleDeadLink(deadURL) {
  console.log(`Dead link detected: ${deadURL}`);
}

// Start checking dead links using the provided JSON data
checkDeadLinks(window.membersData);

// Add page numbers and tabs
let leftPageNumber = 1; // Initialize the left page number
let rightPageNumber = 2; // Initialize the right page number
let currentPage = parseInt(localStorage.getItem('currentPage')) || 1;
// Add members to Members list from JSON
const data = window.membersData;
const pageSize = 10; // Number of items per page
const totalEntries = data.length; // Total entries from JSON

function showContent(tab) {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabs = document.querySelectorAll('.tab');

  tabContents.forEach((content) => {
    const isRightPage = content.id.includes('-right-');
    const display = isRightPage ? (content.id.includes(tab) ? 'block' : 'none') : (content.id === `${tab}-content` ? 'block' : 'none');
    content.style.display = display;
  });

  // Update active tab
  tabs.forEach((t) => t.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.add('active');

  // Update the page numbers
  updatePageNumbers();

  // Save selected tab to localStorage
  localStorage.setItem('selectedTab', tab);
}

// Function to update the page numbers in the .page-header
function updatePageNumbers() {
  const leftPageHeaders = document.querySelectorAll('.left-page .page-header');
  const rightPageHeaders = document.querySelectorAll('.right-page .page-header');

  // Set the page numbers for the first two pages
  leftPageHeaders[0].setAttribute('data-page-number', 1);
  rightPageHeaders[0].setAttribute('data-page-number', 2);

  // Calculate the left and right page numbers based on the current page
  let leftPageNumber = 3;
  let rightPageNumber = 4;

  // Update the page numbers in the headers starting from the second page
  for (let i = 1; i < leftPageHeaders.length; i++) {
    leftPageHeaders[i].setAttribute('data-page-number', leftPageNumber);
    leftPageNumber += 2;
  }

  for (let i = 1; i < rightPageHeaders.length; i++) {
    rightPageHeaders[i].setAttribute('data-page-number', rightPageNumber);
    rightPageNumber += 2;
  }
}

// Get the last selected tab from localStorage and set it as active
const lastTab = localStorage.getItem('selectedTab');
if (lastTab) {
  showContent(lastTab); // Set the last selected tab as active
} else {
  // If no tab is saved, default to 'about'
  showContent('about');
}


   // Update the HTML element to display the member count with a span
   const memberCountElement = document.querySelector('#memberCount');
   if (memberCountElement) {
     memberCountElement.innerHTML = `Member count: <span class="written highlight">${totalEntries}</span>`;
   }

   // Create boxes on members page
function createMemberBox(member) {
  const memberBox = document.createElement('div');
  memberBox.classList.add('member-box');

  function getFieldValue(field) {
    const fieldValue = member[field];
    
    switch (field) {
      case 'name':            
        return fieldValue ? `<span class="highlight">Name:</span> ${fieldValue}` : 'Name'; // Default placeholder text
      case 'url':
        if (fieldValue) {
          return `<span class="highlight">Site:</span> <a href="${fieldValue}">${member['websiteTitle'] || 'Website Title'}</a>`;
        } else {
          return 'Website Title'; // Placeholder for empty url fields
        }
      default:
        const formattedFieldName = field.replace(/([A-Z])/g, ' $1').trim();
        return fieldValue ? `<span class="highlight">${formattedFieldName.charAt(0).toUpperCase() + formattedFieldName.slice(1)}:</span> ${fieldValue}` : formattedFieldName.charAt(0).toUpperCase() + formattedFieldName.slice(1);
    }
  }

  memberBox.innerHTML = `
    <div class="field field--name">${getFieldValue('name')}</div>        
    <div class="field field--url">${getFieldValue('url')}</div>
    <div class="field field--description">${getFieldValue('description')}</div>
  `;

  return memberBox;
}


function displayMembersForPage(page) {
    // Function to display members for a specific page
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalEntries);
    const membersToDisplay = data.slice(startIndex, endIndex);

    leftMembersContainer.innerHTML = '';
    rightMembersContainer.innerHTML = '';

    let leftCount = 0;
    let rightCount = 0;

    membersToDisplay.forEach((member, index) => {
      const memberBox = createMemberBox(member);
      if (leftCount < 5) {
        leftMembersContainer.appendChild(memberBox);
        leftCount++;
      } else if (rightCount < 5) {
        rightMembersContainer.appendChild(memberBox);
        rightCount++;
      }
    });

    // Add empty placeholder boxes if needed
    const remainingEmptyBoxes = 10 - membersToDisplay.length;
    for (let i = 0; i < remainingEmptyBoxes; i++) {
      const emptyMemberBox = createMemberBox({});
      if (leftCount < 5) {
        leftMembersContainer.appendChild(emptyMemberBox);
        leftCount++;
      } else if (rightCount < 5) {
        rightMembersContainer.appendChild(emptyMemberBox);
        rightCount++;
      }
    }
    updatePageNumbers();
  }

  const leftMembersContainer = document.querySelector('.left-page .members-page');
  const rightMembersContainer = document.querySelector('.right-page .members-page');

  // Initial setup for displaying the first page
  displayMembersForPage(currentPage);
  
  // Navigation event listeners
  const totalPages = Math.ceil(totalEntries / pageSize);
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  
  updateButtonVisibility(); // Call this function to set initial button visibility
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayMembersForPage(currentPage);
      updateButtonVisibility();
      updatePageNumbers();
    }
  });
  
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayMembersForPage(currentPage);
      updateButtonVisibility();
      updatePageNumbers();
    }
  });
  
  
  function updateButtonVisibility() {
    if (currentPage === 1) {
      prevButton.style.display = 'none';
    } else {
      prevButton.style.display = 'block';
    }
  
    if (currentPage === totalPages) {
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = 'block';
    }

    // Store the current page in localStorage
    localStorage.setItem('currentPage', currentPage);
  }
  