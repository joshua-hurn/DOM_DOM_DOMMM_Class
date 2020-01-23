document.addEventListener('DOMContentLoaded', () => {
    // Create button right when the page loads.
    let btn = document.createElement("button");
    btn.innerText = "Add Square";
    document.body.appendChild(btn);

    // Making an id to track the number of squares.
    let squareID = 0;

    // Create a container div for all the squares.
    let squareContainer = document.createElement('div');
    squareContainer.classList.add('container');
    document.body.appendChild(squareContainer);

    // Set up event listener to create new squares.
    btn.addEventListener('click', function () {
        // Create square
        let nextDiv = document.createElement('div');

        // Add classname and id to square div
        nextDiv.classList.add('square');
        nextDiv.setAttribute('id', squareID);

        // Creating a span to place the square's id inside to make it easier to show/hide based on hover.
        let idDisplay = document.createElement('span');
        idDisplay.classList.add('id-display');
        idDisplay.innerText = squareID;
        squareID++

        // Attaching span into square div.
        nextDiv.appendChild(idDisplay);

        // Attaching square to the document.
        squareContainer.appendChild(nextDiv);

        // Adding event listener to change the background color.
        nextDiv.addEventListener('click', function () {
            let randomColor = random_bg_color();
            nextDiv.style.backgroundColor = randomColor;
        });

        // Another event listener to remove element
        nextDiv.addEventListener('dblclick', function () {
            let nextDivID = parseInt(nextDiv.id, 10);

            // First if statement to check if the id is even or odd.
            if (nextDivID % 2 === 0) {
                // Checking if the document currently holds the id after the selected id.
                let itemToRemove = document.getElementById(nextDivID + 1);
                if (document.body.contains(itemToRemove)) {
                    squareContainer.removeChild(itemToRemove);
                } else {
                    alert('element does not exist');
                }
            } else {
                // Checking if the document currently holds the id before the selected id.
                let itemToRemove = document.getElementById(nextDivID - 1);
                if (document.body.contains(itemToRemove)) {
                    squareContainer.removeChild(itemToRemove);
                } else {
                    alert('element does not exist');
                }
            }
        });
    });
});

// Create a random background color in rgb
function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

    return bgColor
}