$(document).ready(function(){
    console.log("ready hoe");
    //ok i wanna make anime buttons
    //let's make five and make them appear on main div
    var animestuff = ["my hero academia", "dragon ball z", "fairy tail", "food wars" ]

    for (let i =0; i < animestuff.length; i++){

        console.log(animestuff[i]);
        var newButton = $("<button>"); //new button jquery'd up
        newButton.attr("data-search", animestuff[i]); //adding an attribute of data-search and setting that to the string because it's a search
        newButton.text(animestuff[i]);
        $("#main").append(newButton);
    }
    
    
    //alright fam first we need variable for everything we might need
    
    $("button").on("click", function(){
        var APIKey = "Dr6TBCHZn8wG7C8MBsXK3xCyFDsppfVU"; //key provided 
        
        var search = $(this).attr("data-search"); //static search variable WILL UPDATE TO RECEIVE FROM SEARCH FORM
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+search+"&api_key="+APIKey+"&limit=10" // basic setup for a querysearch on GIPHY
        
        var grabDiv = $("#main"); //grab success
        
        // ajax call lets see if it works
        $.ajax({
            url : queryURL,
            method: "GET"
        })
        .then(function(response){
            console.log(response) //this is where you get all url stuff for your gifs
            //make new div
            for (let i = 0; i<response.data.length; i++){
                var gif = $("<div class = 'whatever' >");
                gif.html(`<img src= ${response.data[i].images.fixed_height.url}>`); // this all works
                grabDiv.append(gif);
            }
    
        });
    });
   












})