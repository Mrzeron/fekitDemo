var searchBox ={
	searchClick:function () {
		$(".search span input").on("focus",function () {
		$(".search span").css({"border-color":"#4791ff"});
		}).on("blur",function () {
			$(".search span").css({"border-color":"#b6b6b6"});	
		})
	
	
	}
}
module.exports=searchBox;