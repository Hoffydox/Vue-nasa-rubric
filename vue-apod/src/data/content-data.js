const imagePath = path => {
    return require("../assets/images/" + path);
}
const data = {
    "site": {
        "footer": {
            "address": "Søndre havnegade 74<br>9000 Aalborg",
            "email": "<a href='contact@mysite.com'>contact@mysite.com</a>"
        }
    },
    "pages": [
        {
            "metaData":
            {
                "name": "Home",
                "template": "page",
            },
            "content": {
                "header": "Welcome",
                "image": imagePath("img1.jpg"),
                "text":
                    "<p>Welcome to the ASTRONOMY Picture of the day Nasa website!!!</p>"

            }
        },
        {
            "metaData":
            {
                "name": "Picture of the day",
                "template": "APOD"
            },
            "content": {
                "header": "Astronomy Picture of the day",
                "text":
                    "<p>Here you can se the picture of the day.</p>"
            }
        },
        {
            "metaData":
            {
                "name": "Archive",
                "template": "Archive"
            },
            "content": {
                "header": "Archive",
                "text":
                    "<p>Here you can se the Archive.</p>"
            }
        }
    ],
    "archive": [
        {
            "metaData": {
                "date": "March 9 2019"
            },
            "content": {
                "header": "New employees",
                "teaser": "We've just hired more staff!",
                "text":
                    "<p>Due to a rapid increase in the amount of incoming orders, we are happy to announce that we have hired several new members of staff.</p>" +
                    "<p>Aliqceptoss imperdiet, nisi sapien tortor sit amet diam. Nullam et mi libero.</p>"
            }
        },
        {
            "metaData": {
                "date": "March 10 2019"
            },
            "content": {
                "header": "More color on the walls",
                "teaser": "We've been splashing about the place",
                "text":
                    "<p>White walls are boring, let's spice the place up a bit.</p>" +
                    "<p>Aliquas. Nu elementum sap ro.</p>"
            }
        }
    ]
};
export default data;