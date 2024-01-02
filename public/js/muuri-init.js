var grid; // Declare grid in the global scope

// Muuri Initialization
function initMuuri() {
    grid = new Muuri('.grid', {
        dragEnabled: true,
        dragHandle: '.cardsHeader',
        showDuration: 600,
        showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        visibleStyles: {
            opacity: '1',
            transform: 'scale(1)'
        },
        hiddenStyles: {
            opacity: '0',
            transform: 'scale(0.5)'
        },
        layout: {
            fillGaps: true,
        }
    });
    window.addEventListener('load', function () {
        grid.refreshItems().layout();
        });
}

// Function to handle Muuri filtering
function handleMuuriFiltering() {
    $('.sort-btn li').on('click', function() {
        $('.sort-btn li').removeClass('active'); // Remove 'active' class from all tags
        $(this).addClass('active'); // Add 'active' class to the clicked tag

        var className = $(this).attr('class').split(' ')[0]; // Get the class name of the clicked tag
        if (className === 'sort00') {
            grid.filter('*'); // Show all elements if 'Show all' is clicked
        } else {
            grid.filter('.' + className); // Filter elements based on the clicked tag class
        }
    });
}


// Fetch XML and build microblog feed only on the index page
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    window.addEventListener("DOMContentLoaded", (event) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                buildPage(this); // Function to build the microblog feed
                initMuuri(); // Call Muuri initialization after the microblog feed is built
                handleMuuriFiltering(); // Call function to handle Muuri filtering
            }
        };
        xhttp.open("GET", RSSLink, true);
        xhttp.send();
    });
} else {
    window.addEventListener("DOMContentLoaded", (event) => {
        initMuuri(); // Call Muuri initialization on other pages
        handleMuuriFiltering(); // Call function to handle Muuri filtering
    });
}