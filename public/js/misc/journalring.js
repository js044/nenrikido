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
            const iconType = this.getAttribute('icon') || 'default';

            fetch('/json/members.json')
                .then(response => response.json())
                .then(data => {
                    let currentIndex = this.getIndexFromURL(data, window.location.href);

                    if (currentIndex !== -1) {
                        const member = data[currentIndex];

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

                        const iconLink = document.createElement('a');
                        iconLink.href = '/webrings/journalring';
                        const buttonImage = document.createElement('img');
                        buttonImage.src = this.getIconSrc(iconType);
                        buttonImage.classList.add('icon', `icon-${iconType}`);
                        iconLink.appendChild(buttonImage);

                        const buttonDiv = document.createElement('div');
                        buttonDiv.classList.add('button-container');
                        buttonDiv.appendChild(prevLink);
                        buttonDiv.appendChild(iconLink);
                        buttonDiv.appendChild(nextLink);

                        prevLink.addEventListener('click', (event) => {
                            event.preventDefault();
                            window.location.href = prevLink.href;
                        });

                        nextLink.addEventListener('click', (event) => {
                            event.preventDefault();
                            window.location.href = nextLink.href;
                        });

                        const randomButton = document.createElement('button');
                        randomButton.classList.add('random-button');
                        randomButton.textContent = 'Random';
                        randomButton.addEventListener('click', () => {
                            fetch('/json/members.json')
                                .then(response => response.json())
                                .then(data => {
                                    const randomIndex = Math.floor(Math.random() * data.length);
                                    const randomWebsite = data[randomIndex];
                                    window.location.href = randomWebsite.url;
                                })
                                .catch(error => {
                                    console.error('Error fetching JSON:', error);
                                });
                        });

                        const randomDiv = document.createElement('div');
                        randomDiv.appendChild(randomButton);

                        widgetContainer.appendChild(buttonDiv);
                        widgetContainer.appendChild(randomDiv);

                        this.shadowRoot.appendChild(widgetContainer);

                        const style = document.createElement('style');
                        style.textContent = this.defaultStyles;
                        this.shadowRoot.appendChild(style);
                    } else {
                        const pendingMessage = document.createElement('p');
                        pendingMessage.textContent = "This user's application to JournalRing is pending.";
                        this.shadowRoot.appendChild(pendingMessage);
                    }
                })
                .catch(error => {
                    console.error('Error fetching JSON:', error);
                    const errorMessage = document.createElement('p');
                    errorMessage.textContent = 'Error fetching JSON data.';
                    this.shadowRoot.appendChild(errorMessage);
                });
        };

        fetchData();
    }

    getIndexFromURL(data, currentURL) {
        return data.findIndex(member => currentURL.includes(member.url));
    }

    getIconSrc(iconType) {
        const iconMap = {
            default: '/images/webrings/journalring/icons/lavender-icon.png',
            green: '/images/webrings/journalring/icons/green-icon.png',
            blue: '/images/webrings/journalring/icons/blue-icon.png',
            pink: '/images/webrings/journalring/icons/pink-icon.png',
        };

        return iconMap[iconType] || iconMap.default;
    }

    getArrowImageSrc(direction, iconType) {
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

        return arrowImageMap[direction][iconType] || arrowImageMap[direction]['default'];
    }

    checkDeadLinks(data) {
        setInterval(() => {
            data.forEach(member => {
                fetch(member.url, { method: 'HEAD' })
                    .then(response => {
                        if (!response.ok) {
                            this.handleDeadLink(member.url);
                        }
                    })
                    .catch(error => {
                        console.error('Error checking link:', error);
                    });
            });
        }, 60000);
    }

    handleDeadLink(deadURL) {
        console.log(`Dead link detected: ${deadURL}`);
    }
}

window.customElements.define('journal-ring', JournalRing);
