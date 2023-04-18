const homeHeader = document.getElementById("home-header");
const aboutHeader = document.getElementById("about-header");
const portfolioHeader = document.getElementById("portfolio-header");
const home = document.getElementById("home");
const about = document.getElementById("about");
const portfolio = document.getElementById("portfolio"); 
const homeMain = document.getElementById("home-main"); 
const aboutMain = document.getElementById("about-main"); 
const portfolioMain = document.getElementById("portfolio-main"); 
const askDiv = document.getElementById("ask");
const qa = document.getElementById("qa");
const header = document.querySelector("header"); 

//Transitions
let headers = [[home, homeHeader, homeMain], [about, aboutHeader, aboutMain], [portfolio, portfolioHeader, portfolioMain]];
window.addEventListener("scroll", changeHeader);

function changeHeader() {
    const triggerBottom = window.innerHeight/4;
    headers.forEach((index) => {
        const top = index[0].getBoundingClientRect().top;  
        if (top < triggerBottom) {
            index[1].classList.add("current");
            index[2].classList.add("show");
        } else {
            index[1].classList.remove("current");
            index[2].classList.remove("show");
        }
    });
}

//Ask me
let clicked = false;
qa.addEventListener("click", displayForm);

function displayForm() {
    if (clicked === false) {
        qa.textContent = "exit here";

        const form = document.createElement("form");
        const nameLabel = document.createElement("label");
        const nameBox = document.createElement("input");
        const emailLabel = document.createElement("label");
        const emailBox = document.createElement("input");
        const textLabel = document.createElement("label");
        const textBox = document.createElement("input");
        const submit = document.createElement("input");

        form.setAttribute("method", "post");
        form.setAttribute("action", "mailto:carinamariecarlos@gmail.com");

        nameBox.setAttribute("type", "text");
        emailBox.setAttribute("type", "text");
        textBox.setAttribute("type", "text");
        submit.setAttribute("type", "submit");

        nameBox.setAttribute("name", "name");
        emailBox.setAttribute("name", "email");
        textBox.setAttribute("name", "message");
        submit.setAttribute("value", "Send");

        nameBox.setAttribute("id", "name");
        emailBox.setAttribute("id", "email");
        textBox.setAttribute("id", "text");
        submit.setAttribute("id", "submit");

        nameLabel.setAttribute("for", "name");
        emailLabel.setAttribute("for", "email");
        textLabel.setAttribute("for", "text");

        nameLabel.textContent = "Name: ";
        emailLabel.textContent = "Email: ";
        textLabel.textContent = "Your Message: "

        form.appendChild(nameLabel);
        form.appendChild(nameBox);
        form.appendChild(emailLabel);
        form.appendChild(emailBox);
        form.appendChild(textLabel)
        form.appendChild(textBox);
        form.appendChild(submit);
        askDiv.prepend(form);
        clicked = true;
    } else {
        const form = document.querySelector("form");
        form.remove();
        qa.textContent="Say hi to us!";
        clicked=false;
    } 
}

//header transition
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 65) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }  
});