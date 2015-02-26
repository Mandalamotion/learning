////////////////////////////// JQuery test stuff ////////////////////////////////////
//---------------------------------------------------------------------------------//

$(function() {
	var box = $("#box");
	var para = $("p");
	var i = 0;
	var countTo = 2;
	//alert($("p").length);  //How many paragraphs?
	para.text("value is 0");
	box.text("Supercalifrigilistc expialidocious Supercalifrigilistc expialidocious Supercalifrigilistc expialidocious");
	function toggleBox(i) {
		box.fadeToggle(500, function() {
			i = i + 1;
			if(i < countTo) {
				para.text("Value is now " + (i +1));
				toggleBox(i);
			};
		});
	};
	toggleBox(i);
	//box.fadeOut(3000, function() {
	//alert("box finished fading out");
//	});
});


/* Longer version of above
var main = function(){
    var box = $("#box");
    box.fadeOut("slow");

  });
};

$(document).ready(main);
*/

//////////////////////////////////////////////////////////////////////////////////////
////////////////////////// Normal Javascript testing   //////////////////////////////

 function mainFunc(){
 //Decide which functions to run
//	outputvar();
//	arrayTest();
var answer = 	findSolution(13);
console.log(answer);
}

function outputvar(){
	//Default variable values
	var val1 = 16;
	var powerOf = 2;
	var linelen = 16;
	/*Test ing input
	val1 = prompt("Base value: ","Value here");
	powerOf = prompt("Power of value: ","Value here");
	linelen = prompt("Line length: ","Value here");
  */	
	var myDate = new Date();
	document.write( "<h2 class =\"title\">","Start of numbers from 1 to ",Math.pow(val1,powerOf),". Line length is ", linelen); 
	document.write("</h2>");
	for( x = 1;  x <= Math.pow(val1,powerOf); x++){
		
	    if( x % 2 == 0){
			document.write("<span class=\"evencolor\">",x," ","</span>");
			
		}
		else
		{
			document.write("<span class=\"oddcolor\">",x," ","</span>");
			
	    }
	    //If line reaches break point then write to new line.  Set is displayed in Hex
	    if(x % linelen == 0)document.write("<span class=\"labelcolor\">"," (Set - ", (x /linelen).toString(16).toUpperCase()," Hex, ",(x /linelen).toString(2)," Bin, ",x /linelen," Dec).</span>","<p>","</p>");
	 
	}
	document.writeln( "<h3 class =\"title\">Completed. ",myDate,"</h3>");
	console.log("testing output to the console feature");

}

function arrayTest(){
	//Function to manipulate arrays
	var myFirstArray = ["Sean","Mel","Charli"];
	var secondArray = ["Tired","Happy","Other"];
	var counter = 0;
	
	while( counter < myFirstArray.length){
		document.writeln("<span class=\"oddcolor\">{",myFirstArray[counter] + " " + secondArray[counter],"}</span>");
	
		counter++;
	}
	//document.writeln( "<h3 class =\"title\">Completed. ",myDate,"</h3>");

}
// Get a solution for a number using x3 or +5 combinations
function findSolution(target) {
  function find(start, history) {
    if (start == target){
      console.log("start == target"+start+ " " +history);
	  return history;
	}
    else if (start > target){
     	console.log("Return null. start > target: "+start+" "+target +" " +history);
	    return null;
	}
    else{
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
			 
			 
	}
  }
  return find(1, "1");
}


///////////////////////////////////// END /////////////////////////////////////////////









