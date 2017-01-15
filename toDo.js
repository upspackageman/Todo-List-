  1 //Check off Specific Todos by clicking
  
 $("ul").on("click","li",function(){
	 //if li is gray
	
	$(this).toggleClass("completed");
	 
 });
 
 //click on X to delete
 
$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
})

$("input[type='text'").on("keypress", function(e){
	if(e.which===13){
		var todoText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"</li>");
	}
});$(".fa-plus-square").click(500,function(){
	$("input[type='text'").fadeToggle();
})