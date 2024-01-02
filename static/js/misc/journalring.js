class JournalRing extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Define default styles for the widget
        this.defaultStyles = `
            .widget-container {                
                max-width: 12em;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .button-container {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            .prev-button,
            .next-button,
            .random-button {                
                border: none;                
                cursor: pointer; 
                background-color: transparent;
                padding: 0.2em;                                            
            }         

            .random-button {
                font-family: inherit;
                font-size: inherit;
                color: inherit;
            }

            .icon {
                padding: 0 0.5em;
            }
        `;
    }

    connectedCallback() {
        const widgetContainer = document.createElement('div');
        widgetContainer.classList.add('widget-container');

        const fetchData = () => {
            const iconType = this.getAttribute('icon') || 'default'; // Define iconType within fetchData function scope
            let currentIndex; // Declare currentIndex in a wider scope to access it in event listeners

            // Fetch the JSON data
            fetch('/json/members.json')
                .then(response => response.json())
                .then(data => {
                    currentIndex = this.getIndexFromURL(data, window.location.href);

                    if (currentIndex !== -1) {
                        const member = data[currentIndex];

                        // Create and style buttons with arrow images
                        const prevButton = document.createElement('button');
                        prevButton.classList.add('prev-button');
                        const prevArrowImage = document.createElement('img');
                        prevArrowImage.src = this.getArrowImageSrc('prev', iconType); // Set arrow image for previous button
                        prevButton.appendChild(prevArrowImage);

                        const nextButton = document.createElement('button');
                        nextButton.classList.add('next-button');
                        const nextArrowImage = document.createElement('img');
                        nextArrowImage.src = this.getArrowImageSrc('next', iconType); // Set arrow image for next button
                        nextButton.appendChild(nextArrowImage);

                        // Create and style icon
                        const iconLink = document.createElement('a');
                        iconLink.href = '/webrings/journalring'; // Change this to your specific page
                        const buttonImage = document.createElement('img');
                        buttonImage.src = this.getIconSrc(iconType);
                        buttonImage.classList.add('icon', `icon-${iconType}`);
                        iconLink.appendChild(buttonImage);

                        // Create a div for buttons (prev, next, icon)
                        const buttonDiv = document.createElement('div');
                        buttonDiv.classList.add('button-container');
                        buttonDiv.appendChild(prevButton);
                        buttonDiv.appendChild(iconLink);
                        buttonDiv.appendChild(nextButton);

                        // Append the buttonDiv to the widget container
                        widgetContainer.appendChild(buttonDiv);

                        // Apply default styles to the shadow DOM
                        const style = document.createElement('style');
                        style.textContent = this.defaultStyles;
                        this.shadowRoot.appendChild(style);

                        return { prevButton, nextButton, currentIndex, data };
                    } else {
                        const pendingMessage = document.createElement('p');
                        pendingMessage.textContent = "This user's application to JournalRing is pending.";
                        this.shadowRoot.appendChild(pendingMessage);
                        return {};
                    }
                })
                .then(({ prevButton, nextButton, currentIndex, data }) => {
                    if (prevButton && nextButton && currentIndex !== undefined && data) {
                        // Event listeners for previous and next buttons
                        prevButton.addEventListener('click', () => {
                            currentIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
                            window.location.href = data[currentIndex].url;
                        });

                        nextButton.addEventListener('click', () => {
                            currentIndex = (currentIndex + 1) % data.length;
                            window.location.href = data[currentIndex].url;
                        });
                    }
                })
                .catch(error => {
                    console.error('Error fetching JSON:', error);
                    const errorMessage = document.createElement('p');
                    errorMessage.textContent = 'Error fetching JSON data.';
                    this.shadowRoot.appendChild(errorMessage);
                });
        };

        fetchData(); // Call the fetchData function
    }

    getIndexFromURL(data, currentURL) {
        return data.findIndex(member => currentURL.includes(member.url));
    }

    getIconSrc(iconType) {
        // Define mapping for different icon types
        const iconMap = {
            default: '/images/webrings/journalring/icons/lavender-icon.png',
            green: '/images/webrings/journalring/icons/green-icon.png',
            blue: '/images/webrings/journalring/icons/blue-icon.png',
            pink: '/images/webrings/journalring/icons/pink-icon.png',
        };

        // Return the icon source based on the iconType
        return iconMap[iconType] || iconMap.default;
    }

    getArrowImageSrc(direction, iconType) {
        // Define arrow image sources based on direction and iconType
        const arrowImageMap = {
            prev: {
                default: '/images/webrings/journalring/icons/lavender-prev-arrow.png',
                green: '/images/webrings/journalring/icons/green-prev-arrow.png',
                blue: '/images/webrings/journalring/icons/blue-prev-arrow.png',
                pink: '/images/webrings/journalring/icons/pink-prev-arrow.png',
            },
            next: {
                default: '/images/webrings/journalring/icons/lavender-next-arrow.png',
                green: '/images/webrings/journalring/icons/green-next-arrow.png',
                blue: '/images/webrings/journalring/icons/blue-next-arrow.png',
                pink: '/images/webrings/journalring/icons/pink-next-arrow.png',
            },
        };

        // Return the arrow image source based on the direction and iconType
        return arrowImageMap[direction][iconType] || arrowImageMap[direction]['default'];
    }
}

window.customElements.define('journal-ring', JournalRing);
