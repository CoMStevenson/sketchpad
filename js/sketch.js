

$(document).ready(function () {
	var color = "white";	
	addBlocks();
	$('.square').mouseenter(function(){
		changeBlock(color, $(this))		
	});
	$('#red').click(function(){
		color = "red";
	});
	$('#blue').click(function(){
		color = "blue";
	});
		$('#orange').click(function(){
		color = "orange";
	});
		$('#yellow').click(function(){
		color = "yellow";
	});
		$('#green').click(function(){
		color = "green";
	});
		$('#purple').click(function(){
		color = "purple";
	});
		$('#white').click(function(){
		color = "white";
	});
		$('#black').click(function(){
		color = "black";
	});
	
	$('.colorButton').mouseenter(function () {
		$('.colorButton').css('cursor', 'pointer');
	});
	
	$('.colorButton').mouseexit(function(){
		$('.colorButton').css('cursor', 'default');
	});
		
});

var i = 1;
var j = 1;

function changeBlock(color, $element){
	$element.css("background-color",color);
}

function addBlocks(){
	
	for(var i = 1; i < 101; i++)
	{
		for (var j=1; j < 71; j++)
		{
			$(".wrapper").append('<div class="square"></div>');	
		}
	} 
}

function resetBlocks(){
	$(".square").css("background-color", "white");
}

