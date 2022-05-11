function dict()
{
    let userInput = document.getElementById("search").value; // Get the users input from the search box
    
    if (userInput != "")
    {
        const url = "https://dictionary.cambrige.org/dictionary/english/" + userInput; // Generate a dictionary url from the user input

        let win = window.open(url, '_blank');
        win.focus;
    } else {
        const url = "https://dictionary.cambrige.org/dictionary/english/"; // Generate an empty dictionary url

        let win = window.open(url, '_blank');
        win.focus;
    }
}

function youtube()
{
    let userInput = document.getElementById("search").value; // Get the users input from the search box
    
    if (userInput != "")
    {
        const url = "https://www.youtube.com/results?search_query=" + userInput; // Generate a youtube url from the user input

        let win = window.open(url, '_blank');
        win.focus;
    } else {
        const url = "https://www.youtube.com/"; // Generate an empty youtube url

        let win = window.open(url, '_blank');
        win.focus;
    }
}

// When the user submits the search form a function is run which is the main function
// for searching
document.querySelector('.search-form').addEventListener('submit', e => {
    e.preventDefault();
    const userInput = e.currentTarget.search.value

    if (userInput != "")
    {
        const url = "https://www.synth.com/search/" + userInput
        window.location.replace(url);
    }
})