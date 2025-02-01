let quotes = JSON.parse(localStorage.getItem("quotes")) || [
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

    sessionStorage.setItem("lastViewedQuote", JSON.stringify(randomQuote));
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

        localStorage.setItem("quotes", JSON.stringify(quotes));

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

function exportToJson()
{
    const jsonQuotes = JSON.stringify(quotes, null, 2);

    const blob = new Blob([jsonQuotes], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "quotes.json";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}


document.addEventListener("DOMContentLoaded", function()
{
    showRandomQuote();

    createAddQuoteForm();

    const lastViewedQuote = sessionStorage.getItem("lastViewedQuote");
    if (lastViewedQuote) {
        console.log("Last viewed quote:", JSON.parse(lastViewedQuote));
    }
});
