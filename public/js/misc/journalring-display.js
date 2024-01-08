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
  
  leftPageNumber = 1; // Reset the left page number
  rightPageNumber = 2; // Reset the right page number

  leftPageHeaders.forEach((header) => {
    header.setAttribute('data-page-number', leftPageNumber);
    leftPageNumber += 2; // Increment by 2 for the left pages
  });

  rightPageHeaders.forEach((header) => {
    header.setAttribute('data-page-number', rightPageNumber);
    rightPageNumber += 2; // Increment by 2 for the right pages
  });
}

// Get the last selected tab from localStorage and set it as active
const lastTab = localStorage.getItem('selectedTab');
if (lastTab) {
  showContent(lastTab); // Set the last selected tab as active
} else {
  // If no tab is saved, default to 'about'
  showContent('about');
}

// Add members to Members list from JSON file
const data = window.membersData;
const pageSize = 10; // Number of items per page
let currentPage = 1; // Current page
const totalEntries = data.length; // Total entries from JSON

   // Update the HTML element to display the member count with a span
   const memberCountElement = document.querySelector('#memberCount');
   if (memberCountElement) {
     memberCountElement.innerHTML = `Member count: <span class="written highlight">${totalEntries}</span>`;
   }

  // Function to format the date as "1/1/24"
function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based
  const year = date.getFullYear().toString().slice(2); // Get last 2 digits of the year

  return `${month}/${day}/${year}`;
}

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
  }

  const leftMembersContainer = document.querySelector('.left-page .members-page');
  const rightMembersContainer = document.querySelector('.right-page .members-page');

  

  // Initial setup for displaying the first page
  displayMembersForPage(currentPage);
  
  // Navigation event listeners
  const totalPages = Math.ceil(totalEntries / pageSize);
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  if (totalPages > 1) {
    // Show the buttons if there are more than 10 entries
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  } else {
    // Hide the buttons if there are 10 or fewer entries
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
  }

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayMembersForPage(currentPage);
    }
  });

  nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(totalEntries / pageSize);
    if (currentPage < totalPages) {
      currentPage++;
      displayMembersForPage(currentPage);
    }
  });
  


