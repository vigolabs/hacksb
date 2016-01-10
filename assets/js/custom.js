$(document).ready(function(){
	var $udoo_bg = $('#udoo_bg');
	var $udoo_video = $('#udoo_video');

	$udoo_bg.on('click', function(){
		$udoo_video.css('display','block');
		$udoo_bg.css('display','none');
	});
});