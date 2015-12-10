$(document).ready(function()
{   var score=0;
	var maxr=30;
	var maxc=30;
	var zoo=1;
	$(".butts").on("click",".set2",function(){
		score=0;
		maxr=30;
	    maxc=30;
	    zoo=1;
    	$('body').css('zoom',zoo);
	    $('tbody').empty();
	    $('.set4').text(0);
		printgrid();
	});
	$("tbody").on("mouseenter","td",function()
	{  
		if($(this).hasClass('highlight')==false)
			score++;
		$(this).addClass('highlight');
		var percen=score*100/(maxr*maxc);
		percen.toFixed(2);
		$('.set4').text(percen.toFixed(2)+'%');
	});
	$(".butts").on("click",".set1",function()
	{
		$("td").removeClass('highlight');
		$('.set4').text(0);
		score=0;

	});
    $(".butts2").on("click",".set3",function(){
    	if(maxr<40){
    	maxr*=2;
    	maxc*=2;
    	zoo*=0.8;
    	$('body').css('zoom',zoo);
		printgrid();}
		else 
		{
			alert("limit reached");
		}
	});
	function printgrid()
	{   
		$('tbody').empty();
		var table = $("tbody");
		var i= +0;
		var j= +0;
		for(i=0;i<maxr;i++)
		{
			var row=$("<tr></tr>");
			for(j=0;j<maxc;j++)
			{
				var cell=$("<td></td>");
				row.append(cell);
			}
			table.append(row);
		}
	}

});