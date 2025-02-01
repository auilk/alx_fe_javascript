const quotes = [
    { text: "The only way to do great work is to love what you do.", category: "Motivation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "Get busy living or get busy dying.", category: "Inspiration" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", category: "Self" }
];

function showRandomQuote()
{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `"${randomQuote.text}" — ${randomQuote.category}`;
}

function addQuote()
{
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;

    if (newQuoteText && newQuoteCategory)
    {
        const newQuote = {
            text: newQuoteText,
            category: newQuoteCategory
        };

        quotes.push(newQuote);

        document.getElementById("newQuoteText").value = "";
        document.getElementById("newQuoteCategory").value = "";

        showRandomQuote();
    }
    else
    {
        alert("Please fill out both the quote text and category.");
    }
}

function createAddQuoteForm()
{
    const formContainer = document.createElement("div");
    formContainer.id = "addQuoteForm";

    const textInput = document.createElement("input");
    textInput.id = "newQuoteText";
    textInput.type = "text";
    textInput.placeholder = "Enter a new quote";
    
    const categoryInput = document.createElement("input");
    categoryInput.id = "newQuoteCategory";
    categoryInput.type = "text";
    categoryInput.placeholder = "Enter quote category";

    const addButton = document.createElement("button");
    addButton.innerHTML = "Add Quote";
    addButton.onclick = addQuote;

    formContainer.appendChild(textInput);
    formContainer.appendChild(categoryInput);
    formContainer.appendChild(addButton);

    document.body.appendChild(formContainer);
}

document.addEventListener("DOMContentLoaded", function()
{
    showRandomQuote();

    createAddQuoteForm();
});
