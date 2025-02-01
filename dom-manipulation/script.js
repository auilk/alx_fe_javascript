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

    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = `"${randomQuote.text}" — ${randomQuote.category}`;
}

function createAddQuoteForm(newQuoteText, newQuoteCategory)
{
    if (newQuoteText && newQuoteCategory)
    {
        const newQuote = {
            text: newQuoteText,
            category: newQuoteCategory
        };

        quotes.push(newQuote);

        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';

        showRandomQuote();
    }
    else
    {
        alert("Please fill out both the quote text and category.");
    }
}

function addQuote()

{
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    createAddQuoteForm(newQuoteText, newQuoteCategory);
}

document.addEventListener('DOMContentLoaded', showRandomQuote);
