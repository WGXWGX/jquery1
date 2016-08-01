$(function(){
	var $td = $('.td');
	$('tr:even').not('.thead').css({
		background: 'red'
	});
	$td.on('click',function(){
		if($(this).children('input').length > 0){
			return false;
		}
		var $input = $('<input type="text" value='+this.innerHTML+'>').css({
			width: $(this).width(),
			border: 0,
			background: 'red'
		});
		$(this).empty().append($input);
		$input.trigger('select');
	});
});
