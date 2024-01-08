window.membersData = [
    {
        "name": "Rio",
        "websiteTitle": "Nenrikido",
        "url": "https://nenrikido.neocities.org/",
        "description": "A multi-purpose personal site."
    },
    {
        "name": "Hors",
        "websiteTitle": "zucchini.cc",
        "url": "https://zucchini.cc/",
        "description": "Enthusiastic doll and pen blogging."
    },
    {
        "name": "Orin",
        "websiteTitle": "cable world",
        "url": "https://22yk01.neocities.org/",
        "description": "Personal blog"
    },
    {
        "name": "Jessy",
        "websiteTitle": "LittleCloud",
        "url": "https://littlecloud.neocities.org/",
        "description": "Personal, cute"
    },
    {
        "name": "Arunyi",
        "websiteTitle": "Arunyi",
        "url": "https://arunyi.art/",
        "description": "My personal website!"
    },
    {
        "name": "Lapin",
        "websiteTitle": "Lovesick",
        "url": " https://lovesick.cafe",
        "description": "a love letter to my interests"
    }
];        

function checkDeadLinks(data) {
    const timeout = 5000; // Timeout value for the fetch request

    data.forEach(member => {
        fetch(member.url, { method: 'HEAD' })
            .then(response => {
                // Check for successful response status
                if (response.ok) {
                    console.log(`Link is reachable: ${member.url}`);
                } else {
                    // Fallback using iframe if fetch indicates an issue
                    const iframe = document.createElement('iframe');
                    iframe.src = member.url;
                    iframe.style.display = 'none'; // Hide the iframe

                    // Listen for load/error events
                    iframe.onload = () => {
                        console.log(`Link is reachable: ${member.url}`);
                        document.body.removeChild(iframe);
                    };

                    iframe.onerror = () => {
                        console.log(`Dead link detected: ${member.url}`);
                        document.body.removeChild(iframe);
                    };

                    // Append the iframe to the document to trigger loading
                    document.body.appendChild(iframe);

                    // Set a timeout to remove the iframe after a delay
                    setTimeout(() => {
                        document.body.removeChild(iframe);
                    }, timeout);
                }
            })
            .catch(() => {
                console.log(`Dead link detected: ${member.url}`);
            });
    });
}

// Start checking dead links using the provided JSON data
checkDeadLinks(window.membersData);


class JournalRing extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Define default styles for the widget
        this.defaultStyles = `
            .widget-container {     
                margin: 0.3em;           
                max-width: 100%;
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

            // Use embedded JSON data directly
            const data = window.membersData;

            currentIndex = this.getIndexFromURL(data, window.location.href);

            if (currentIndex !== -1) {
                const member = data[currentIndex];

                // Create and style anchor elements for previous and next
                const prevLink = document.createElement('a');
                prevLink.classList.add('prev-button');
                prevLink.href = data[currentIndex === 0 ? data.length - 1 : currentIndex - 1].url;
                const prevArrowImage = document.createElement('img');
                prevArrowImage.src = this.getArrowImageSrc('prev', iconType);
                prevLink.appendChild(prevArrowImage);

                const nextLink = document.createElement('a');
                nextLink.classList.add('next-button');
                nextLink.href = data[(currentIndex + 1) % data.length].url;
                const nextArrowImage = document.createElement('img');
                nextArrowImage.src = this.getArrowImageSrc('next', iconType);
                nextLink.appendChild(nextArrowImage);

                // Create and style icon
                const iconLink = document.createElement('a');
                iconLink.href = 'https://nenrikido.neocities.org/webrings/journalring/'; // Change this to your specific page
                const buttonImage = document.createElement('img');
                buttonImage.src = this.getIconSrc(iconType);
                buttonImage.classList.add('icon', `icon-${iconType}`);
                iconLink.appendChild(buttonImage);

                // Create a div for buttons (prev, next, icon)
                const buttonDiv = document.createElement('div');
                buttonDiv.classList.add('button-container');
                buttonDiv.appendChild(prevLink);
                buttonDiv.appendChild(iconLink);
                buttonDiv.appendChild(nextLink);

                // Handle the previous and next link clicks
                prevLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    window.location.href = event.currentTarget.href;
                });

                nextLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    window.location.href = event.currentTarget.href;
                });

                const randomLink = document.createElement('a');
                randomLink.classList.add('random-button');
                randomLink.textContent = 'Random';

                // Handle the click on the random link
                randomLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    const randomIndex = Math.floor(Math.random() * data.length);
                    const randomWebsite = data[randomIndex];
                    window.location.href = randomWebsite.url;
                });

                // Create a div for the random button
                const randomDiv = document.createElement('div');
                randomDiv.appendChild(randomLink);

                // Append the buttonDiv and randomDiv to the widget container
                widgetContainer.appendChild(buttonDiv);
                widgetContainer.appendChild(randomDiv);

                // Append the container to the shadow DOM
                this.shadowRoot.appendChild(widgetContainer);

                // Apply default styles to the shadow DOM
                const style = document.createElement('style');
                style.textContent = this.defaultStyles;
                this.shadowRoot.appendChild(style);
            } else {
                const pendingMessage = document.createElement('p');
                pendingMessage.textContent = "This user's application to JournalRing is pending.";
                this.shadowRoot.appendChild(pendingMessage);
            }
        };

        fetchData(); // Call the fetchData function
    }


    getIndexFromURL(data, currentURL) {
        return data.findIndex(member => currentURL.includes(member.url));
    }

    getIconSrc(iconType) {
        // Define mapping for different icon types
        const iconMap = {
            default: 'https://s6.imgcdn.dev/fIgCo.png',
            green: 'https://s6.imgcdn.dev/fIeol.png',
            blue: 'https://s6.imgcdn.dev/fIbRd.png',
            pink: 'https://s6.imgcdn.dev/fIowg.png',
        };

        // Return the icon source based on the iconType
        return iconMap[iconType] || iconMap.default;
    }

    getArrowImageSrc(direction, iconType) {
        // Define arrow image sources based on direction and iconType
        const arrowImageMap = {
            prev: {
                default: 'https://s6.imgcdn.dev/fI8Ln.png',
                green: 'https://s6.imgcdn.dev/fIHHK.png',
                blue: 'https://s6.imgcdn.dev/fIqsh.png',
                pink: 'https://s6.imgcdn.dev/fIW3e.png',
            },
            next: {
                default: 'https://s6.imgcdn.dev/fIE7O.png',
                green: 'https://s6.imgcdn.dev/fIFxV.png',
                blue: 'https://s6.imgcdn.dev/fILUM.png',
                pink: 'https://s6.imgcdn.dev/fI3w0.png',
            },
        };

        // Return the arrow image source based on the direction and iconType
        return arrowImageMap[direction][iconType] || arrowImageMap[direction]['default'];
    }
}

window.customElements.define('journal-ring', JournalRing);