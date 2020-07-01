//Displays and handles the colour palette.
function ColourPalette(){
	//a list of web colour strings
	this.colours = ["black", "silver", "gray", "white", "maroon", "red", "purple", "orange", "pink", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"];
	//make the start colour be black
	this.selectedColour = "black";

	//load in the colours 
	this.loadColours = function(){
		//set the fill and stroke properties to be black at the start of the programme
		//running
		fill(this.colours[0]);
		stroke(this.colours[0]);

		//for each colour create a new div in the html for the colourSwatches
		for(var i = 0; i < this.colours.length; i++){
			var colourID = this.colours[i] + "Swatch";
			var colourHTML = "<div class='colourSwatches' id='"+ colourID + "'></div>";
			//using JQuery add the swatch to the palette and set its background colour
			//to be the colour value.
			$(".colourPalette").append(colourHTML);
			$("#" + colourID).css("background-color", this.colours[i]);
		}

		$(".colourSwatches").first().css("border", "2px solid blue");
	};
	//call the loadColours function now it is declared
	this.loadColours();

	//handle clicks on the colours.
	$(".colourPalette").on("click", ".colourSwatches", function(){
		//get the colour string back from the id
		var id = $(this).attr("id");
		var c = split(id, "Swatch")[0];
		//set the selected colour and the fill and stroke
		this.selectedColour = c;
		fill(c);
		stroke(c);
		//remove the boarder from the last selected swatch (check them all and remove it)
		$(".colourSwatches").css("border", "0");
		//add a border to the clicked swatch div.
		$(this).css("border", "2px solid blue");


	});
}