//container object for storing the tools. Functions to add new tools and select a tool
function Toolbox(){
	
	var self = this;

	this.tools = [];
	this.selectedTool = null;
	
	//when a side bar item is clicked extract the tools name
	//from the div's ID.
	$(".sidebar").on("click", ".sideBarItem", function(){
		//clear any border round items
		$(".sideBarItem").css("border", "0");
		toolName = split($(this).attr('id'), "sideBarItem")[0];
		//call selectTool to update the selectedTool property
		self.selectTool(toolName); 
	});

	//add a new tool icon to the html page
	var addToolIcon = function(icon, name){
		var itemHTML = "<div class='sideBarItem' id='"+ name + "sideBarItem'> <img src='" + icon +"'></div>"; 
		$(".sidebar").append(itemHTML);


	};

	//add a tool to the tools array
	this.addTool = function(tool){
		//check that the object tool has an icon and a name
		if(!tool.hasOwnProperty("icon") || !tool.hasOwnProperty("name")){
			alert("make sure your tool has both a name and an icon");
		}
		this.tools.push(tool);
		addToolIcon(tool.icon, tool.name);
		//if no tool is selected (ie. none have been added so far)
		//make this tool the selected one.
		if(this.selectedTool == null){
			this.selectTool(tool.name);
		}
	};

	this.selectTool = function(toolName){
		//search through the tools for one that's name matches
		//toolName
		for(var i = 0; i < this.tools.length; i++){
			if(this.tools[i].name == toolName){
				//if the tool has an unselectTool method run it.
				if(this.selectedTool != null && this.selectedTool.hasOwnProperty("unselectTool")) {
					this.selectedTool.unselectTool();
				}
				//select the tool and highlight it on the toolbar
				this.selectedTool = this.tools[i];
				$("#" + toolName + "sideBarItem").css("border", "2px solid blue");

				//if the tool has an options area. Populate it now.
				if(this.selectedTool.hasOwnProperty("populateOptions")){
					this.selectedTool.populateOptions();
				}
			}
		}
	};

	
}