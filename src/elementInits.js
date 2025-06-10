import pizzaImg from './images/pizza.jpg';
import pastaImg from './images/pasta.jpg';

// Inititalize content for homepage

function initHomepageContent(contentSection) {

    // Create Elements
    const welcomeBox = document.createElement("div");
    const headerText = document.createElement("h1");
    const welcomeText = document.createElement("p");
    const reservationText = document.createElement("p");
    const reservationBtn = document.createElement("button");

    // Assign IDs and classes
    welcomeBox.id = "welcome-box";
    headerText.classList.add("header-text");
    welcomeText.classList.add("welcome-text");
    reservationText.classList.add("reservation");
    reservationBtn.classList.add("reservation-btn");

    // Add text to elements
    headerText.textContent = "El Restuarante de Pizza-Pasta";
    welcomeText.textContent = "Welcome to our lovely restuarant, take a look around!";
    reservationText.textContent = "Or make a reservation:";
    reservationBtn.textContent = "Make Reservation";

    // Append welcomeBox as child of content div
    contentSection.appendChild(welcomeBox)

    // Append other elements as children of welcomeBox
    welcomeBox.appendChild(headerText);
    welcomeBox.appendChild(welcomeText);
    welcomeBox.appendChild(reservationText);
    welcomeBox.appendChild(reservationBtn);

}

// Inititalize content for menu

function initMenuContent(contentSection) {

    // Create Elements
    const menuBox = document.createElement("div");
    const headerText = document.createElement("h1");
    const descriptionText = document.createElement("p");
    const headerDiv = document.createElement("div")
    const pizzaDiv = document.createElement("div");
    const pastaDiv = document.createElement("div");
    const pizzaHeader = document.createElement("h2");
    const pizzaImage = document.createElement("img");
    const pizzaText = document.createElement("p");
    const pastaHeader = document.createElement("h2");
    const pastaImage = document.createElement("img");
    const pastaText = document.createElement("p");

    // Assign IDs and classes
    menuBox.id = "menu-box";
    headerText.classList.add("header-text");
    descriptionText.classList.add("description-text");
    headerDiv.classList.add("header-div")
    pizzaDiv.classList.add("food-div");
    pastaDiv.classList.add("food-div");
    pizzaHeader.classList.add("food-header");
    pastaHeader.classList.add("food-header");
    pizzaImage.classList.add("food-image");
    pastaImage.classList.add("food-image");
    pizzaText.classList.add("food-text");
    pastaText.classList.add("food-text");

    // Add text to elements
    headerText.textContent = "Menu";
    descriptionText.textContent = "Take a look at our menu";
    pizzaHeader.textContent = "Pizza 9.99,-";
    pizzaText.textContent = "Bold, spicy, and unforgettable. Layered with premium pepperoni, fiery Calabrian chilies, and bubbling mozzarella atop our signature tomato base.";
    pastaHeader.textContent = "Pasta 11.99,-";
    pastaText.textContent = "Creamy, rich, and just a little cheeky. Penne pasta in a velvety tomato vodka sauce with garlic, chili flakes, and a splash of cream. Topped with crispy pancetta and fresh parsley.";

    // Assign attributes to img elements
    pizzaImage.src = pizzaImg;
    pastaImage.src = pastaImg;
    pizzaImage.height = "300";
    pastaImage.height = "300";
    pizzaImage.width = "300";
    pastaImage.width = "300";

    // Append menuBox as child of content div
    contentSection.appendChild(menuBox)

    // Append header and food divs as children of menuBox
    menuBox.appendChild(headerDiv);
    menuBox.appendChild(pizzaDiv);
    menuBox.appendChild(pastaDiv);

    // Append header content as children of header div
    headerDiv.appendChild(headerText);
    headerDiv.appendChild(descriptionText);

    // Append food content as children of food divs
    pizzaDiv.appendChild(pizzaHeader);
    pizzaDiv.appendChild(pizzaImage);
    pizzaDiv.appendChild(pizzaText);
    pastaDiv.appendChild(pastaHeader);
    pastaDiv.appendChild(pastaImage);
    pastaDiv.appendChild(pastaText);

}


export { initHomepageContent, initMenuContent }