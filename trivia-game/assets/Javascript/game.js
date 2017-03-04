$(document).ready(function(){ 
	  
	$("#results").click(function(){

		if(!$("input[name=q1]:checked").val() &&
		   !$("input[name=q2]:checked").val() &&
		   !$("input[name=q3]:checked").val() &&
		   !$("input[name=q4]:checked").val() &&
		   !$("input[name=q5]:checked").val() 
		   ) {

		} else {
			var c1 = "1";
			var c2 = "2";
			var c3 = "3";
			var c4 = "4";
			var c5 = "5";
		}
		

		var ct1 = $("input[name=q1]:checked".val() !='a');
    var ct2 = $("input[name=q2]:checked".val() !='b');
    var ct3 = $("input[name=q3]:checked".val() !='c');
    var ct4 = $("input[name=q4]:checked".val() !='d');
    var ct5 = $("input[name=q5]:checked".val() !='a');
    var catagories = [];

		if (ct1) {catagories.push(c1) };
		if (ct2) {catagories.push(c2) };
		if (ct3) {catagories.push(c3) };
		if (ct4) {catagories.push(c4) };
		if (ct5) {catagories.push(c5) };


		var star = 'Incorect: ' + catagories.join(',')+'';
		$("#catagorylist").text(star);
		$("#catagorylist").show("slow");

		if (ct1) { $("#catagory1").show("slow"); };
		if (ct2) { $("#catagory1").show("slow"); };
		if (ct3) { $("#catagory1").show("slow"); };
		if (ct4) { $("#catagory1").show("slow"); };
		if (ct5) { $("#catagory1").show("slow"); };

		});

      $("#start-button").click(function(){


				var number= 1:00;

				alert("GO!")

			$("#start-button").on("click", start);
			$("#submit").on("click", finish);
			$("#restart").on("click", restart);
		}



}
function stop(){
	clearInterval(counter);
	$("#results").show();
	$("#restart").show();
	$("#.question").hide();
	$("#.answers").hide();
	$("#submit").hide();
}

function finish(){
	number = 1;
	clearInterval(counter);
	timer();
}

function restart(){
	number = 60; 
	start();
}

function hideMe(e){
	$(e).show()
}



