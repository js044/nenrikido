window.membersData = [
    {
        "name": "Rio",
        "websiteTitle": "Nenrikido",
        "url": "https://nenrikido.neocities.org/",
        "description": "A multi-purpose personal site with free-to-use code, an art gallery, a library, and anything else I like."
    },
    {
        "name": "Hors",
        "websiteTitle": "zucchini.cc",
        "url": "https://zucchini.cc/",
        "description": "Enthusiastic doll and pen blogging."
    },
    {
        "name": "Lapin",
        "websiteTitle": "Lovesick",
        "url": "https://lovesick.cafe/",
        "description": "a love letter to my interests"
    },
    {
        "name": "Orin",
        "websiteTitle": "cable world",
        "url": "https://22yk01.neocities.org/",
        "description": "Personal blog"
    },
    {
        "name": "Mima",
        "websiteTitle": "sylum's asylum",
        "url": "https://sylum.web.fc2.com/",
        "description": "A place to talk about whatever I want to!"
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
        "name": "Yeger",
        "websiteTitle": "Yeger",
        "url": "https://yeger.neocities.org/",
        "description": "Blog about my life, thoughts and passions (technology and languages)!"
    },  
    {
        "name": "Naila Moonsi",
        "websiteTitle": "starlit seas",
        "url": "https://starlitseas.neocities.org/",
        "description": "a site with notes about and artwork involving OCs"
    },
    {
        "name": "Whiona",
        "websiteTitle": "whiona.me",
        "url": "https://whiona.me/",
        "description": "A personal website that contains my creative works and other fun stuff!"
    },
    {
        "name": "Sarah",
        "websiteTitle": "Inkcaps",
        "url": "https://inkcaps.neocities.org/",
        "description": "A cottage tucked away in fairyland."
    },    
    {
        "name": "des",
        "websiteTitle": "doqmeat",
        "url": "https://doqmeat.neocities.org/",
        "description": "personal website full of things i enjoy and love."
    },
    {
        "name": "chronodove",
        "websiteTitle": "post-apocalyptic dove",
        "url": "https://chronodove.neocities.org/",
        "description": "a personal damp cave, spooky 👻"
    },
    {
        "name": "Liz",
        "websiteTitle": "LizOnline",
        "url": "https://lizonline.neocities.org/",
        "description": "A red and white, mobile-friendly crash pad on the 'net. Stop by anytime for optimism and fandom commentary."
    },
    {
        "name": "Krish",
        "websiteTitle": "Princess Diaries",
        "url": "https://blog.sanguineroyal.com/",
        "description": "Princess Diaries is my (Krish's) subsite for my personal blog. It exists separately from my personal site to allow my inconsistent ramblings to breathe."
    },
    {
        "name": "Beeku",
        "websiteTitle": "Beeku's Arcade",
        "url": "https://digibun.neocities.org/",
        "description": "A personal site filled with my art, hobbies, and written & photo blogs. Interests include bunnies, rhythm games, journal&planner spreads, and all things cute."
    },
    {
        "name": "mala",
        "websiteTitle": "ophanimkei",
        "url": "https://ophanimkei.com/",
        "description": "A personal website filled with artworks, musings, and various other things."
    },
    {
        "name": "M",
        "websiteTitle": "the garden of madeline",
        "url": "https://thegardenofmadeline.neocities.org/",
        "description": "a personal website & little cyber sanctuary full of art, vintage archives, literature, & a myriad of random little joys."
    },
    {
        "name": "Margot",
        "websiteTitle": "Fairygore",
        "url": "https://fairygore.neocities.org/",
        "description": "a cute place for me to host my thoughts. re:this ring, i have a journal on the site as well as a section for my writing! i am a notebook lover <3"
    },
    {
        "name": "Matt",
        "websiteTitle": "Saddleblasters",
        "url": "https://saddleblasters.neocities.org/",
        "description": "Descriptions of Shanghai, people, weather, and Chinese experimental music."
    },
];        

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
            default: 'https://nenrikido.neocities.org/images/webrings/journalring/icons/lavender-icon.png',
            green: 'https://nenrikido.neocities.org/images/webrings/journalring/icons/green-icon.png',
            blue: 'https://nenrikido.neocities.org/images/webrings/journalring/icons/blue-icon.png',
            pink: 'https://nenrikido.neocities.org/images/webrings/journalring/icons/pink-icon.png',
        };

        // Return the icon source based on the iconType
        return iconMap[iconType] || iconMap.default;
    }

    getArrowImageSrc(direction, iconType) {
        // Define arrow image sources based on direction and iconType
        const arrowImageMap = {
            prev: {
                default: 'https://nenrikido.neocities.org/images/webrings/journalring/icons/lavender-prev-arrow.png',
                green: 'https://nenrikido.neocities.org/images/webrings/journalring/icons/green-prev-arrow.png',
                blue: 'https://nenrikido.neocities.org/images/webrings/journalring/icons/blue-prev-arrow.png',
                pink: 'https://nenrikido.neocities.org/images/webrings/journalring/icons/pink-prev-arrow.png',
            },
            next: {
                default: 'https://nenrikido.neocities.org/images/webrings/journalring/icons/lavender-next-arrow.png',
                green: 'https://nenrikido.neocities.org/images/webrings/journalring/icons/green-next-arrow.png',
                blue: 'https://nenrikido.neocities.org/images/webrings/journalring/icons/blue-next-arrow.png',
                pink: 'https://nenrikido.neocities.org/images/webrings/journalring/icons/pink-next-arrow.png',
            },
        };

        // Return the arrow image source based on the direction and iconType
        return arrowImageMap[direction][iconType] || arrowImageMap[direction]['default'];
    }
}

window.customElements.define('journal-ring', JournalRing);