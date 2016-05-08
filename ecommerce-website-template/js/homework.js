$(document).ready(function(){
	
	$(".twitter img").on("click", function(){
		$(this).attr({"src":"img/2_header/twitter_2.png", "alt":"twitter_2"});
		$(".faceBook img").attr({"src":"img/2_header/faceBook.png", "alt":"faceBook"});
		$(".wifi img").attr({"src":"img/2_header/wifi.png", "alt":"wifi"});
		$(".mail img").attr({"src":"img/2_header/mail.png", "alt":"mail"});
	});
	$(".faceBook img").on("click", function(){
		$(this).attr({"src":"img/2_header/faceBook_2.png", "alt":"faceBook_2"});
		$(".twitter img").attr({"src":"img/2_header/twitter.png", "alt":"twitter"});
		$(".wifi img").attr({"src":"img/2_header/wifi.png", "alt":"wifi"});
		$(".mail img").attr({"src":"img/2_header/mail.png", "alt":"mail"});
	});
	$(".wifi img").on("click", function(){
		$(this).attr({"src":"img/2_header/wifi_2.png", "alt":"wifi_2"});
		$("twitter img").attr({"src":"img/2_header/twitter.png", "alt":"twitter"});
		$(".faceBook img").attr({"src":"img/2_header/faceBook.png", "alt":"faceBook"});
		$(".mail img").attr({"src":"img/2_header/mail.png", "alt":"mail"});
	});
	$(".mail img").on("click", function(){
		$(this).attr({"src":"img/2_header/mail_2.png", "alt":"mail_2"});
		$("twitter img").attr({"src":"img/2_header/twitter.png", "alt":"twitter"});
		$(".faceBook img").attr({"src":"img/2_header/faceBook.png", "alt":"faceBook"});
		$(".wifi img").attr({"src":"img/2_header/wifi.png", "alt":"wifi"});
	});
	
	
	$(".pillMenu_2 img").eq(1).on("mouseenter", function(){
		$(this).attr({"src":"img/2_header/shop_2.png"});
	});
	$(".pillMenu_2 img").eq(1).on("mouseleave", function(){
		$(this).attr({"src":"img/2_header/shop.png"});
	});

	$(".specialsText img").on("click",function(){
		$(this).attr({"src":"img/3_navigation/specialsText_2.png", "alt":"specialsText_2"});
		$(".fruits img").attr({"src":"img/3_navigation/fruits.png", "alt":"fruits"});
		$(".food img").attr({"src":"img/3_navigation/food.png", "alt":"food"});
		$(".locate img").attr({"src":"img/3_navigation/locate.png", "alt":"locate"});
		$(".fan img").attr({"src":"img/3_navigation/fan.png", "alt":"fan"});
	});

	$(".fruits img").on("click",function(){
		$(this).attr({"src":"img/3_navigation/fruits_2.png", "alt":"fruits_2"});
		$(".specialsText img").attr({"src":"img/3_navigation/specialsText.png", "alt":"specialsText"});
		$(".food img").attr({"src":"img/3_navigation/food.png", "alt":"food"});
		$(".locate img").attr({"src":"img/3_navigation/locate.png", "alt":"locate"});
		$(".fan img").attr({"src":"img/3_navigation/fan.png", "alt":"fan"});
	});

	$(".food img").on("click",function(){
		$(this).attr({"src":"img/3_navigation/food_2.png", "alt":"food_2"});
		$(".specialsText img").attr({"src":"img/3_navigation/specialsText.png", "alt":"specialsText"});
		$(".fruits img").attr({"src":"img/3_navigation/fruits.png", "alt":"fruits"});
		$(".locate img").attr({"src":"img/3_navigation/locate.png", "alt":"locate"});
		$(".fan img").attr({"src":"img/3_navigation/fan.png", "alt":"fan"});
	});

	$(".locate img").on("click",function(){
		$(this).attr({"src":"img/3_navigation/locate_2.png", "alt":"locate_2"});
		$(".specialsText img").attr({"src":"img/3_navigation/specialsText.png", "alt":"specialsText"});
		$(".fruits img").attr({"src":"img/3_navigation/fruits.png", "alt":"fruits"});
		$(".food img").attr({"src":"img/3_navigation/food.png", "alt":"food"});
		$(".fan img").attr({"src":"img/3_navigation/fan.png", "alt":"fan"});
	});

	$(".fan img").on("click",function(){
		$(this).attr({"src":"img/3_navigation/fan_2.png", "alt":"fan_2"});
		$(".specialsText img").attr({"src":"img/3_navigation/specialsText.png", "alt":"specialsText"});
		$(".fruits img").attr({"src":"img/3_navigation/fruits.png", "alt":"fruits"});
		$(".food img").attr({"src":"img/3_navigation/food.png", "alt":"food"});
		$(".locate img").attr({"src":"img/3_navigation/locate.png", "alt":"locate"});
	});

	$(".search_2").on("click", function(){
		$(".details").css({"display":"none"});
	});
	
	var Mangos = 0;
	$(".shopMangos img").on("click", function(){
		++Mangos;
		if ( Mangos == 1)
		{ $(this).attr({"src":"img/5_contentsFirst/shopMangos_2.png", "alt":"shopMangos_2"});
		}else if ( Mangos ==2)
		{ $(this).attr({"src":"img/5_contentsFirst/shopMangos.png", "alt":"shopMangos"});
		  Mangos = 0;
		}
	});


	$(".leftMenu li img").eq(0).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/arts_2.png", "alt":"arts_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(1).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/beauty_2.png", "alt":"beauty_2"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(2).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/books_2.png", "alt":"books_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(3).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/software_2.png", "alt":"software_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(4).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/electronics_2.png", "alt":"electronics_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(5).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/fashion_2.png", "alt":"fashion_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(6).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/foodLeft_2.png", "alt":"foodLeft_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(7).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/furniture_2.png", "alt":"furniture_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(8).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/home_2.png", "alt":"home_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(9).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/jewelry_2.png", "alt":"jewelry_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(10).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/lingerie_2.png", "alt":"lingerie_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(11).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/music_2.png", "alt":"music_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(12).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/office_2.png", "alt":"office_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(13).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/printing_2.png", "alt":"printing_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
		$(".softwareLeft img").attr({"src":"img/6_contentsLeft/softwareLeft.png", "alt":"softwareLeft"});
	});

	$(".leftMenu li img").eq(14).on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/softwareLeft_2.png", "alt":"softwareLeft_2"});
		$(".beauty img").attr({"src":"img/6_contentsLeft/beauty.png", "alt":"beauty"});
		$(".books img").attr({"src":"img/6_contentsLeft/books.png", "alt":"books"});
		$(".software img").attr({"src":"img/6_contentsLeft/software.png", "alt":"software"});
		$(".electronics img").attr({"src":"img/6_contentsLeft/electronics.png", "alt":"electronics"});
		$(".fashion img").attr({"src":"img/6_contentsLeft/fashion.png", "alt":"fashion"});
		$(".foodLeft img").attr({"src":"img/6_contentsLeft/foodLeft.png", "alt":"foodLeft"});
		$(".furniture img").attr({"src":"img/6_contentsLeft/furniture.png", "alt":"furniture"});
		$(".home img").attr({"src":"img/6_contentsLeft/home.png", "alt":"home"});
		$(".jewelry img").attr({"src":"img/6_contentsLeft/jewelry.png", "alt":"jewelry"});
		$(".lingerie img").attr({"src":"img/6_contentsLeft/lingerie.png", "alt":"lingerie"});
		$(".music img").attr({"src":"img/6_contentsLeft/music.png", "alt":"music"});
		$(".office img").attr({"src":"img/6_contentsLeft/office.png", "alt":"office"});
		$(".printing img").attr({"src":"img/6_contentsLeft/printing.png", "alt":"printing"});
		$(".arts img").attr({"src":"img/6_contentsLeft/arts.png", "alt":"arts"});
	});

	$(".reviewsText_1 img").on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/reviewsText_2.png", "alt":"reviewsText_2"});
		$(".reviewsText img").attr({"src":"img/6_contentsLeft/reviewsText.png", "alt":"reviewsText"});		
	});

	$(".reviews li").eq(5).children("img").on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/reviewsText_2.png", "alt":"reviewsText_2"});
		$(".reviewsText_1 img").attr({"src":"img/6_contentsLeft/reviewsText.png", "alt":"reviewsText"});
		$(".reviews li").eq(8).children("img").attr({"src":"img/6_contentsLeft/reviewsText.png", "alt":"reviewsText"});
	});

	$(".reviews li").eq(8).children("img").on("click", function(){
		$(this).attr({"src":"img/6_contentsLeft/reviewsText_2.png", "alt":"reviewsText_2"});
		$(".reviewsText_1 img").attr({"src":"img/6_contentsLeft/reviewsText.png", "alt":"reviewsText"});		
		$(".reviews li").eq(5).children("img").attr({"src":"img/6_contentsLeft/reviewsText.png", "alt":"reviewsText"});
	});
	

	


	
		var countNumber = 1;
		if ( countNumber == 1)
		{ var number = 1;
		 $(".one_3").on("click", function(){
			++number;		
			$(".one_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
			$(".one_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number+".png)"});
			number = 1;
			$(".one_1").on("click", function(){
				$(".one_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
				
				if ( number == 1 )
				{var number_2 = 2;
				 $(".one_3").on("click", function(){
					 ++number_2;		
					 $(".one_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
					 $(".one_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_2+".png)"});
					 number_2 = 2;
					  $(".one_1").on("click", function(){
						$(".one_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
						
						if ( number_2 == 2 )
						{var number_3 = 3;
						 $(".one_3").on("click", function(){
							++number_3;		
							$(".one_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
							$(".one_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_3+".png)"});
							number_3 = 3;
							$(".one_1").on("click", function(){
								$(".one_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

								if ( number_3 == 3 )
								{var number_4 = 4;
								 $(".one_3").on("click", function(){
									++number_4;		
									$(".one_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
									$(".one_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_4+".png)"});
									number_4 = 4;
									$(".one_1").on("click", function(){
										$(".one_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

										if ( number_4 == 4 )
										{var number_5 = 5;
										 $(".one_3").on("click", function(){
											++number_5;		
											$(".one_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
											$(".one_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_5+".png)"});
											number_5 = 5;
											$(".one_1").on("click", function(){
												$(".one_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
												
												if ( number_5 == 5 )
												{var number_6 = 6;
												 $(".one_3").on("click", function(){
												 ++number_6;		
												 $(".one_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
												 $(".one_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_6+".png)"});
												 number_6 = 6;
												 $(".one_1").on("click", function(){
													$(".one_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
													
													if ( number_6 == 6 )
													{var number_7 = 7;
													 $(".one_3").on("click", function(){
													 ++number_7;		
													 $(".one_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
													 $(".one_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_7+".png)"});
													 number_7 = 7;
													 $(".one_1").on("click", function(){
														$(".one_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
														
														if ( number_7 == 7 )
														{var number_8 = 8;
														 $(".one_3").on("click", function(){
														 ++number_8;		
														 $(".one_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
														 $(".one_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_8+".png)"});
														 number_8 = 8;
														 $(".one_1").on("click", function(){
															$(".one_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
															$("li").removeClass("one_3"); });
															
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}
			});
		 });
		}
			});		
		 });		
		}
		
		var countNumber = 1;
		if ( countNumber == 1 )
		{ $(".two_1").on("click", function(){
			$(".two_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
			countNumber = 2;
			if ( countNumber == 2 )
			{var number = 1;
			 $(".two_3").on("click", function(){
		     ++number;		
			 $(".two_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
			 $(".two_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number+".png)"});
			 number = 1;
			 $(".two_1").on("click", function(){
				$(".two_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
				
				if ( number == 1 )
				{var number_2 = 2;
				 $(".two_3").on("click", function(){
					 ++number_2;		
					 $(".two_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
					 $(".two_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_2+".png)"});
					 number_2 = 2;
					  $(".two_1").on("click", function(){
						$(".two_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
						
						if ( number_2 == 2 )
						{var number_3 = 3;
						 $(".two_3").on("click", function(){
							++number_3;		
							$(".two_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
							$(".two_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_3+".png)"});
							number_3 = 3;
							$(".two_1").on("click", function(){
								$(".two_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

								if ( number_3 == 3 )
								{var number_4 = 4;
								 $(".two_3").on("click", function(){
									++number_4;		
									$(".two_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
									$(".two_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_4+".png)"});
									number_4 = 4;
									$(".two_1").on("click", function(){
										$(".two_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

										if ( number_4 == 4 )
										{var number_5 = 5;
										 $(".two_3").on("click", function(){
											++number_5;		
											$(".two_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
											$(".two_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_5+".png)"});
											number_5 = 5;
											$(".two_1").on("click", function(){
												$(".two_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
												
												if ( number_5 == 5 )
												{var number_6 = 6;
												 $(".two_3").on("click", function(){
												 ++number_6;		
												 $(".two_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
												 $(".two_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_6+".png)"});
												 number_6 = 6;
												 $(".two_1").on("click", function(){
													$(".two_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
													
													if ( number_6 == 6 )
													{var number_7 = 7;
													 $(".two_3").on("click", function(){
													 ++number_7;		
													 $(".two_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
													 $(".two_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_7+".png)"});
													 number_7 = 7;
													 $(".two_1").on("click", function(){
														$(".two_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
														
														if ( number_7 == 7 )
														{var number_8 = 8;
														 $(".two_3").on("click", function(){
														 ++number_8;		
														 $(".two_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
														 $(".two_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_8+".png)"});
														 number_8 = 8;
														 $(".two_1").on("click", function(){
															$(".two_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
															$("li").removeClass("two_3"); });
													
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}
			});
		 });
		}
			});		
		 });		
		}
		});
		}
		 
		
		var countNumber = 1;
		if ( countNumber == 1)
		{ var number = 1;
		 $(".three_3").on("click", function(){
			++number;		
			$(".three_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
			$(".three_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number+".png)"});
			number = 1;
			$(".three_1").on("click", function(){
				$(".three_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
				
				if ( number == 1 )
				{var number_2 = 2;
				 $(".three_3").on("click", function(){
					 ++number_2;		
					 $(".three_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
					 $(".three_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_2+".png)"});
					 number_2 = 2;
					  $(".three_1").on("click", function(){
						$(".three_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
						
						if ( number_2 == 2 )
						{var number_3 = 3;
						 $(".three_3").on("click", function(){
							++number_3;		
							$(".three_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
							$(".three_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_3+".png)"});
							number_3 = 3;
							$(".three_1").on("click", function(){
								$(".three_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

								if ( number_3 == 3 )
								{var number_4 = 4;
								 $(".three_3").on("click", function(){
									++number_4;		
									$(".three_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
									$(".three_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_4+".png)"});
									number_4 = 4;
									$(".three_1").on("click", function(){
										$(".three_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

										if ( number_4 == 4 )
										{var number_5 = 5;
										 $(".three_3").on("click", function(){
											++number_5;		
											$(".three_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
											$(".three_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_5+".png)"});
											number_5 = 5;
											$(".three_1").on("click", function(){
												$(".three_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
												
												if ( number_5 == 5 )
												{var number_6 = 6;
												 $(".three_3").on("click", function(){
												 ++number_6;		
												 $(".three_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
												 $(".three_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_6+".png)"});
												 number_6 = 6;
												 $(".three_1").on("click", function(){
													$(".three_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
													
													if ( number_6 == 6 )
													{var number_7 = 7;
													 $(".three_3").on("click", function(){
													 ++number_7;		
													 $(".three_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
													 $(".three_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_7+".png)"});
													 number_7 = 7;
													 $(".three_1").on("click", function(){
														$(".three_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
														
														if ( number_7 == 7 )
														{var number_8 = 8;
														 $(".three_3").on("click", function(){
														 ++number_8;		
														 $(".three_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
														 $(".three_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_8+".png)"});
														 number_8 = 8;
														 $(".three_1").on("click", function(){
															$(".three_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
															$("li").removeClass("three_3"); });
															
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}
			});
		 });
		}
			});		
		 });		
		}
		var countNumber = 1;
		if ( countNumber == 1)
		{ var number = 1;
		 $(".four_3").on("click", function(){
			++number;		
			$(".four_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
			$(".four_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number+".png)"});
			number = 1;
			$(".four_1").on("click", function(){
				$(".four_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
				
				if ( number == 1 )
				{var number_2 = 2;
				 $(".four_3").on("click", function(){
					 ++number_2;		
					 $(".four_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
					 $(".four_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_2+".png)"});
					 number_2 = 2;
					  $(".four_1").on("click", function(){
						$(".four_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
						
						if ( number_2 == 2 )
						{var number_3 = 3;
						 $(".four_3").on("click", function(){
							++number_3;		
							$(".four_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
							$(".four_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_3+".png)"});
							number_3 = 3;
							$(".four_1").on("click", function(){
								$(".four_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

								if ( number_3 == 3 )
								{var number_4 = 4;
								 $(".four_3").on("click", function(){
									++number_4;		
									$(".four_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
									$(".four_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_4+".png)"});
									number_4 = 4;
									$(".four_1").on("click", function(){
										$(".four_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

										if ( number_4 == 4 )
										{var number_5 = 5;
										 $(".four_3").on("click", function(){
											++number_5;		
											$(".four_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
											$(".four_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_5+".png)"});
											number_5 = 5;
											$(".four_1").on("click", function(){
												$(".four_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
												
												if ( number_5 == 5 )
												{var number_6 = 6;
												 $(".four_3").on("click", function(){
												 ++number_6;		
												 $(".four_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
												 $(".four_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_6+".png)"});
												 number_6 = 6;
												 $(".four_1").on("click", function(){
													$(".four_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
													
													if ( number_6 == 6 )
													{var number_7 = 7;
													 $(".four_3").on("click", function(){
													 ++number_7;		
													 $(".four_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
													 $(".four_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_7+".png)"});
													 number_7 = 7;
													 $(".four_1").on("click", function(){
														$(".four_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
														
														if ( number_7 == 7 )
														{var number_8 = 8;
														 $(".four_3").on("click", function(){
														 ++number_8;		
														 $(".four_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
														 $(".four_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_8+".png)"});
														 number_8 = 8;
														 $(".four_1").on("click", function(){
															$(".four_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
															$("li").removeClass("four_3"); });
															
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}
			});
		 });
		}
			});		
		 });		
		}
		var countNumber = 1;
		if ( countNumber == 1)
		{ var number = 1;
		 $(".five_3").on("click", function(){
			++number;		
			$(".five_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
			$(".five_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number+".png)"});
			number = 1;
			$(".five_1").on("click", function(){
				$(".five_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
				
				if ( number == 1 )
				{var number_2 = 2;
				 $(".five_3").on("click", function(){
					 ++number_2;		
					 $(".five_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
					 $(".five_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_2+".png)"});
					 number_2 = 2;
					  $(".five_1").on("click", function(){
						$(".five_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
						
						if ( number_2 == 2 )
						{var number_3 = 3;
						 $(".five_3").on("click", function(){
							++number_3;		
							$(".five_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
							$(".five_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_3+".png)"});
							number_3 = 3;
							$(".five_1").on("click", function(){
								$(".five_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

								if ( number_3 == 3 )
								{var number_4 = 4;
								 $(".five_3").on("click", function(){
									++number_4;		
									$(".five_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
									$(".five_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_4+".png)"});
									number_4 = 4;
									$(".five_1").on("click", function(){
										$(".five_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

										if ( number_4 == 4 )
										{var number_5 = 5;
										 $(".five_3").on("click", function(){
											++number_5;		
											$(".five_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
											$(".five_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_5+".png)"});
											number_5 = 5;
											$(".five_1").on("click", function(){
												$(".five_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
												
												if ( number_5 == 5 )
												{var number_6 = 6;
												 $(".five_3").on("click", function(){
												 ++number_6;		
												 $(".five_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
												 $(".five_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_6+".png)"});
												 number_6 = 6;
												 $(".five_1").on("click", function(){
													$(".five_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
													
													if ( number_6 == 6 )
													{var number_7 = 7;
													 $(".five_3").on("click", function(){
													 ++number_7;		
													 $(".five_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
													 $(".five_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_7+".png)"});
													 number_7 = 7;
													 $(".five_1").on("click", function(){
														$(".five_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
														
														if ( number_7 == 7 )
														{var number_8 = 8;
														 $(".five_3").on("click", function(){
														 ++number_8;		
														 $(".five_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
														 $(".five_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_8+".png)"});
														 number_8 = 8;
														 $(".five_1").on("click", function(){
															$(".five_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
															$("li").removeClass("five_3"); });
															
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}
			});
		 });
		}
			});		
		 });		
		}
		var countNumber = 1;
		if ( countNumber == 1)
		{ var number = 1;
		 $(".six_3").on("click", function(){
			++number;		
			$(".six_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
			$(".six_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number+".png)"});
			number = 1;
			$(".six_1").on("click", function(){
				$(".six_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
				$("li").removeClass("six_1");

				if ( number == 1 )
				{var number_2 = 2;
				 $(".six_3").on("click", function(){
					 ++number_2;		
					 $(".six_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
					 $(".six_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_2+".png)"});
					 number_2 = 2;
					  $(".six_1").on("click", function(){
						$(".six_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
						
						if ( number_2 == 2 )
						{var number_3 = 3;
						 $(".six_3").on("click", function(){
							++number_3;		
							$(".six_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
							$(".six_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_3+".png)"});
							number_3 = 3;
							$(".six_1").on("click", function(){
								$(".six_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

								if ( number_3 == 3 )
								{var number_4 = 4;
								 $(".six_3").on("click", function(){
									++number_4;		
									$(".six_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
									$(".six_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_4+".png)"});
									number_4 = 4;
									$(".six_1").on("click", function(){
										$(".six_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

										if ( number_4 == 4 )
										{var number_5 = 5;
										 $(".six_3").on("click", function(){
											++number_5;		
											$(".six_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
											$(".six_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_5+".png)"});
											number_5 = 5;
											$(".six_1").on("click", function(){
												$(".six_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
												
												if ( number_5 == 5 )
												{var number_6 = 6;
												 $(".six_3").on("click", function(){
												 ++number_6;		
												 $(".six_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
												 $(".six_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_6+".png)"});
												 number_6 = 6;
												 $(".six_1").on("click", function(){
													$(".six_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
													
													if ( number_6 == 6 )
													{var number_7 = 7;
													 $(".six_3").on("click", function(){
													 ++number_7;		
													 $(".six_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
													 $(".six_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_7+".png)"});
													 number_7 = 7;
													 $(".six_1").on("click", function(){
														$(".six_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
														
														if ( number_7 == 7 )
														{var number_8 = 8;
														 $(".six_3").on("click", function(){
														 ++number_8;		
														 $(".six_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
														 $(".six_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_8+".png)"});
														 number_8 = 8;
														 $(".six_1").on("click", function(){
															$(".six_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
															$("li").removeClass("six_3"); });
															
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}
			});
		 });
		}
			});		
		 });		
		}
		var countNumber = 1;
		if ( countNumber == 1)
		{ var number = 1;
		 $(".seven_3").on("click", function(){
			++number;		
			$(".seven_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
			$(".seven_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number+".png)"});
			number = 1;
			$(".seven_1").on("click", function(){
				$(".seven_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
				
				if ( number == 1 )
				{var number_2 = 2;
				 $(".seven_3").on("click", function(){
					 ++number_2;		
					 $(".seven_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
					 $(".seven_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_2+".png)"});
					 number_2 = 2;
					  $(".seven_1").on("click", function(){
						$(".seven_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
						
						if ( number_2 == 2 )
						{var number_3 = 3;
						 $(".seven_3").on("click", function(){
							++number_3;		
							$(".seven_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
							$(".seven_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_3+".png)"});
							number_3 = 3;
							$(".seven_1").on("click", function(){
								$(".seven_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

								if ( number_3 == 3 )
								{var number_4 = 4;
								 $(".seven_3").on("click", function(){
									++number_4;		
									$(".seven_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
									$(".seven_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_4+".png)"});
									number_4 = 4;
									$(".seven_1").on("click", function(){
										$(".seven_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

										if ( number_4 == 4 )
										{var number_5 = 5;
										 $(".seven_3").on("click", function(){
											++number_5;		
											$(".seven_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
											$(".seven_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_5+".png)"});
											number_5 = 5;
											$(".seven_1").on("click", function(){
												$(".seven_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
												
												if ( number_5 == 5 )
												{var number_6 = 6;
												 $(".seven_3").on("click", function(){
												 ++number_6;		
												 $(".seven_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
												 $(".seven_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_6+".png)"});
												 number_6 = 6;
												 $(".seven_1").on("click", function(){
													$(".seven_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
													
													if ( number_6 == 6 )
													{var number_7 = 7;
													 $(".seven_3").on("click", function(){
													 ++number_7;		
													 $(".seven_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
													 $(".seven_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_7+".png)"});
													 number_7 = 7;
													 $(".seven_1").on("click", function(){
														$(".seven_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
														
														if ( number_7 == 7 )
														{var number_8 = 8;
														 $(".seven_3").on("click", function(){
														 ++number_8;		
														 $(".seven_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
														 $(".seven_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_8+".png)"});
														 number_8 = 8;
														 $(".seven_1").on("click", function(){
															$(".seven_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
															$("li").removeClass("seven_3"); });
															
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}
			});
		 });
		}
			});		
		 });		
		}
		var countNumber = 1;
		if ( countNumber == 1)
		{ var number = 1;
		 $(".eight_3").on("click", function(){
			++number;		
			$(".eight_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
			$(".eight_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number+".png)"});
			number = 1;
			$(".eight_1").on("click", function(){
				$(".eight_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
				
				if ( number == 1 )
				{var number_2 = 2;
				 $(".eight_3").on("click", function(){
					 ++number_2;		
					 $(".eight_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
					 $(".eight_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_2+".png)"});
					 number_2 = 2;
					  $(".eight_1").on("click", function(){
						$(".eight_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
						
						if ( number_2 == 2 )
						{var number_3 = 3;
						 $(".eight_3").on("click", function(){
							++number_3;		
							$(".eight_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
							$(".eight_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_3+".png)"});
							number_3 = 3;
							$(".eight_1").on("click", function(){
								$(".eight_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

								if ( number_3 == 3 )
								{var number_4 = 4;
								 $(".eight_3").on("click", function(){
									++number_4;		
									$(".eight_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
									$(".eight_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_4+".png)"});
									number_4 = 4;
									$(".eight_1").on("click", function(){
										$(".eight_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});

										if ( number_4 == 4 )
										{var number_5 = 5;
										 $(".eight_3").on("click", function(){
											++number_5;		
											$(".eight_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
											$(".eight_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_5+".png)"});
											number_5 = 5;
											$(".eight_1").on("click", function(){
												$(".eight_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
												
												if ( number_5 == 5 )
												{var number_6 = 6;
												 $(".eight_3").on("click", function(){
												 ++number_6;		
												 $(".eight_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
												 $(".eight_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_6+".png)"});
												 number_6 = 6;
												 $(".eight_1").on("click", function(){
													$(".eight_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
													
													if ( number_6 == 6 )
													{var number_7 = 7;
													 $(".eight_3").on("click", function(){
													 ++number_7;		
													 $(".eight_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
													 $(".eight_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_7+".png)"});
													 number_7 = 7;
													 $(".eight_1").on("click", function(){
														$(".eight_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
														
														if ( number_7 == 7 )
														{var number_8 = 8;
														 $(".eight_3").on("click", function(){
														 ++number_8;		
														 $(".eight_3").css({"background-image":"url(img/7_contentsRight/heart_2.png)"});
														 $(".eight_2").css({"background-image":"url(img/7_contentsRight/heartNumber_"+number_8+".png)"});
														 number_8 = 8;
														 $(".eight_1").on("click", function(){
															$(".eight_3").css({"background-image":"url(img/7_contentsRight/heart.png)"});
															$("li").removeClass("eight_3"); });
															
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}	
			});
		 });
		}
			});
		 });
		}
			});
		 });
		}
			});		
		 });		
		}



		var dollarNumber = 1;
		if (dollarNumber == 1)
		{var dollar = 0;
			$(".buyBtn, .buy img").on("click", function(){
				++dollar;
				if ( dollar == 1)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_23.png", "alt":"dollar_23"});
				}else if (dollar == 2)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_46.png", "alt":"dollar_46"});
				}else if (dollar == 3)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_69.png", "alt":"dollar_69"});
				}else if (dollar == 4)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_92.png", "alt":"dollar_92"});
				}else if (dollar == 5)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_115.png", "alt":"dollar_115"});
				}else if (dollar == 6)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_138.png", "alt":"dollar_138"});
				}else if (dollar == 7)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_161.png", "alt":"dollar_161"});
				}else if (dollar == 8)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_184.png", "alt":"dollar_184"});
				}else if (dollar == 9)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_207.png", "alt":"dollar_207"});
				}else if (dollar == 10)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_230.png", "alt":"dollar_230"});
				}else if (dollar == 11)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_253.png", "alt":"dollar_253"});
				}else if (dollar == 12)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_276.png", "alt":"dollar_276"});
				}else if (dollar == 13)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_299.png", "alt":"dollar_299"});
				}else if (dollar == 14)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_322.png", "alt":"dollar_322"});
				}				
			});
			$(".pillMenu_2 img").eq(1).on("click",function(){		
				$(this).attr({"src":"img/2_header/shop_2.png", "alt":"shop_2"});
				$(this).attr({"src":"img/2_header/shop.png", "alt":"shop"});
				$(".pillMenu img").attr({"src":"img/2_header/dollar.png", "alt":"dollar"});				
				if (dollarNumber == 1)
				{var dollar = 0;
				$(".buyBtn, .buy img").on("click", function(){
				++dollar;
				if ( dollar == 1)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_23.png", "alt":"dollar_23"});
				}else if (dollar == 2)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_46.png", "alt":"dollar_46"});
				}else if (dollar == 3)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_69.png", "alt":"dollar_69"});
				}else if (dollar == 4)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_92.png", "alt":"dollar_92"});
				}else if (dollar == 5)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_115.png", "alt":"dollar_115"});
				}else if (dollar == 6)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_138.png", "alt":"dollar_138"});
				}else if (dollar == 7)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_161.png", "alt":"dollar_161"});
				}else if (dollar == 8)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_184.png", "alt":"dollar_184"});
				}else if (dollar == 9)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_207.png", "alt":"dollar_207"});
				}else if (dollar == 10)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_230.png", "alt":"dollar_230"});
				}else if (dollar == 11)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_253.png", "alt":"dollar_253"});
				}else if (dollar == 12)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_276.png", "alt":"dollar_276"});
				}else if (dollar == 13)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_299.png", "alt":"dollar_299"});
				}else if (dollar == 14)
				{$(".pillMenu img").attr({"src":"img/2_header/dollar_322.png", "alt":"dollar_322"});
				}
				});
				}	
			});	
		}
		
	
		
	



	$(".two_3 img").on("click", function(){	
		$(this).attr({"src":"img/7_contentsRight/heart_2.png", "alt":"heart_2"});
		$(".two_2 img").attr({"src":"img/7_contentsRight/heartNumber_"+number+".png", "alt":"heartNumber_2"});		
	});
	$(".two_1").on("click", function(){
		$(".two_3 img").attr({"src":"img/7_contentsRight/heart.png", "alt":"herat"});
	});

	$(".three_3 img").on("click", function(){	
		$(this).attr({"src":"img/7_contentsRight/heart_2.png", "alt":"heart_2"});
		$(".three_2 img").attr({"src":"img/7_contentsRight/heartNumber_"+number+".png", "alt":"heartNumber_2"});		
	});
	$(".three_1").on("click", function(){
		$(".three_3 img").attr({"src":"img/7_contentsRight/heart.png", "alt":"herat"});
	});

	$(".four_3 img").on("click", function(){	
		$(this).attr({"src":"img/7_contentsRight/heart_2.png", "alt":"heart_2"});
		$(".four_2 img").attr({"src":"img/7_contentsRight/heartNumber_"+number+".png", "alt":"heartNumber_2"});		
	});
	$(".four_1").on("click", function(){
		$(".four_3 img").attr({"src":"img/7_contentsRight/heart.png", "alt":"herat"});
	});
	
	$(".five_3 img").on("click", function(){	
		$(this).attr({"src":"img/7_contentsRight/heart_2.png", "alt":"heart_2"});
		$(".five_2 img").attr({"src":"img/7_contentsRight/heartNumber_"+number+".png", "alt":"heartNumber_2"});		
	});
	$(".five_1").on("click", function(){
		$(".five_3 img").attr({"src":"img/7_contentsRight/heart.png", "alt":"herat"});
	});
	
	$(".six_3 img").on("click", function(){	
		$(this).attr({"src":"img/7_contentsRight/heart_2.png", "alt":"heart_2"});
		$(".six_2 img").attr({"src":"img/7_contentsRight/heartNumber_"+number+".png", "alt":"heartNumber_2"});		
	});
	$(".six_1").on("click", function(){
		$(".six_3 img").attr({"src":"img/7_contentsRight/heart.png", "alt":"herat"});
	});

	$(".seven_3 img").on("click", function(){	
		$(this).attr({"src":"img/7_contentsRight/heart_2.png", "alt":"heart_2"});
		$(".senve_2 img").attr({"src":"img/7_contentsRight/heartNumber_"+number+".png", "alt":"heartNumber_2"});		
	});
	$(".seven_1").on("click", function(){
		$(".seven_3 img").attr({"src":"img/7_contentsRight/heart.png", "alt":"herat"});
	});

	$(".eight_3 img").on("click", function(){	
		$(this).attr({"src":"img/7_contentsRight/heart_2.png", "alt":"heart_2"});
		$(".eight_2 img").attr({"src":"img/7_contentsRight/heartNumber_"+number+".png", "alt":"heartNumber_2"});		
	});
	$(".eight_1").on("click", function(){
		$(".eight_3 img").attr({"src":"img/7_contentsRight/heart.png", "alt":"herat"});
	});






	if ($(".Noone").is(".numberBox1"))
		{ var count = 0;		  
			$(".next").on("click", function(){				
				++count;				
				if (count==1)
				{ $(".Notwo").css({"background-color":"#c2be67"});
			 	  $(".Notwo img").attr({"src":"img/7_contentsRight/Notwo_2.png", "alt":"Notwo_2"});
				  $(".Noone").css({"background":"none"});
				  $(".Noone img").attr({"src":"img/7_contentsRight/Noone.png", "alt":"Noone"});
				  $(".Noone").on("click", function(){count=0;});				  
				  $(".Nothree").on("click", function(){count=2;});
				  $(".Nofour").on("click", function(){count=3;});
				}else if (count==2)
				{ $(".Nothree").css({"background-color":"#c2be67"});
				  $(".Nothree img").attr({"src":"img/7_contentsRight/Nothree_2.png", "alt":"Nothree_2"});
		          $(".Notwo").css({"background":"none"});
		          $(".Notwo img").attr({"src":"img/7_contentsRight/Notwo.png", "alt":"Notwo"});
				  $(".Noone").on("click", function(){count=0;});				  
				  $(".Notwo").on("click", function(){count=1;});
				  $(".Nofour").on("click", function(){count=3;});
				}else if (count==3)
				{ $(".Nofour").css({"background-color":"#c2be67"});
				  $(".Nofour img").attr({"src":"img/7_contentsRight/Nofour_2.png", "alt":"Nofour_2"});
			      $(".Nothree").css({"background":"none"});
				  $(".Nothree img").attr({"src":"img/7_contentsRight/Nothree.png", "alt":"Nothree"});
				  $(".Noone").on("click", function(){count=0;});				  
				  $(".Notwo").on("click", function(){count=1;});
				  $(".Nothree").on("click", function(){count=2;});
				}else if (count==4)
				{ $(".Nofive").css({"background-color":"#c2be67"});
				  $(".Nofive img").attr({"src":"img/7_contentsRight/Nofive_2.png", "alt":"Nofive_2"});
				  $(".Nofour").css({"background":"none"});
				  $(".Nofour img").attr({"src":"img/7_contentsRight/Nofour.png", "alt":"Nofour"});	
				  count=9;
				}
				
			}); 
		}

		
	$(".Noone img").on("click", function(){
		$(this).attr({"src":"img/7_contentsRight/Noone_2.png", "alt":"Noone_2"});
		$(".Noone").css({"background-color":"#c2be67"});
		$(".number li").eq(1).css({"background":"none"});
		$(".number li").eq(2).css({"background":"none"});
		$(".number li").eq(3).css({"background":"none"});
		$(".number li").eq(4).css({"background":"none"});
		$(".Notwo img").attr({"src":"img/7_contentsRight/Notwo.png", "alt":"Notwo"});
		$(".Nothree img").attr({"src":"img/7_contentsRight/Nothree.png", "alt":"Nothree"});
		$(".Nofour img").attr({"src":"img/7_contentsRight/Nofour.png", "alt":"Nofour"});
		$(".Nofive img").attr({"src":"img/7_contentsRight/Nofive.png", "alt":"Nofive"});		
	});

	$(".Notwo img").on("click", function(){
		$(this).attr({"src":"img/7_contentsRight/Notwo_2.png", "alt":"Notwo_2"});
		$(".Notwo").css({"background-color":"#c2be67"});
		$(".number li").eq(0).css({"background":"none"});
		$(".number li").eq(2).css({"background":"none"});
		$(".number li").eq(3).css({"background":"none"});
		$(".number li").eq(4).css({"background":"none"});
		$(".Noone img").attr({"src":"img/7_contentsRight/Noone.png", "alt":"Noone"});
		$(".Nothree img").attr({"src":"img/7_contentsRight/Nothree.png", "alt":"Nothree"});
		$(".Nofour img").attr({"src":"img/7_contentsRight/Nofour.png", "alt":"Nofour"});
		$(".Nofive img").attr({"src":"img/7_contentsRight/Nofive.png", "alt":"Nofive"});
		$(".Noone").on("click", function(){count=0;});				  
		$(".Notwo").on("click", function(){count=1;});
		$(".Nothree").on("click", function(){count=2;});
		$(".Nofour").on("click", function(){count=3;});	
	});

	$(".Nothree img").on("click", function(){
		$(this).attr({"src":"img/7_contentsRight/Nothree_2.png", "alt":"Nothree_2"});
		$(".Nothree").css({"background-color":"#c2be67"});
		$(".number li").eq(0).css({"background":"none"});
		$(".number li").eq(1).css({"background":"none"});
		$(".number li").eq(3).css({"background":"none"});
		$(".number li").eq(4).css({"background":"none"});
		$(".Notwo img").attr({"src":"img/7_contentsRight/Notwo.png", "alt":"Notwo"});
		$(".Noone img").attr({"src":"img/7_contentsRight/Noone.png", "alt":"Noone"});
		$(".Nofour img").attr({"src":"img/7_contentsRight/Nofour.png", "alt":"Nofour"});
		$(".Nofive img").attr({"src":"img/7_contentsRight/Nofive.png", "alt":"Nofive"});
		$(".Noone").on("click", function(){count=0;});				  
		$(".Notwo").on("click", function(){count=1;});
		$(".Nothree").on("click", function(){count=2;});
		$(".Nofour").on("click", function(){count=3;});		
	});

	$(".Nofour img").on("click", function(){
		$(this).attr({"src":"img/7_contentsRight/Nofour_2.png", "alt":"Nofour_2"});
		$(".Nofour").css({"background-color":"#c2be67"});
		$(".number li").eq(0).css({"background":"none"});
		$(".number li").eq(1).css({"background":"none"});
		$(".number li").eq(2).css({"background":"none"});
		$(".number li").eq(4).css({"background":"none"});
		$(".Notwo img").attr({"src":"img/7_contentsRight/Notwo.png", "alt":"Notwo"});
		$(".Nothree img").attr({"src":"img/7_contentsRight/Nothree.png", "alt":"Nothree"});
		$(".Noone img").attr({"src":"img/7_contentsRight/Noone.png", "alt":"Noone"});
		$(".Nofive img").attr({"src":"img/7_contentsRight/Nofive.png", "alt":"Nofive"});	
		$(".Noone").on("click", function(){count=0;});				  
		$(".Notwo").on("click", function(){count=1;});
		$(".Nothree").on("click", function(){count=2;});
		$(".Nofour").on("click", function(){count=3;});		
	});

	$(".Nofive img").on("click", function(){
		$(this).attr({"src":"img/7_contentsRight/Nofive_2.png", "alt":"Nofive_2"});
		$(".Nofive").css({"background-color":"#c2be67"});
		$(".number li").eq(0).css({"background":"none"});
		$(".number li").eq(1).css({"background":"none"});
		$(".number li").eq(2).css({"background":"none"});
		$(".number li").eq(3).css({"background":"none"});
		$(".Notwo img").attr({"src":"img/7_contentsRight/Notwo.png", "alt":"Notwo"});
		$(".Nothree img").attr({"src":"img/7_contentsRight/Nothree.png", "alt":"Nothree"});
		$(".Nofour img").attr({"src":"img/7_contentsRight/Nofour.png", "alt":"Nofour"});
		$(".Noone img").attr({"src":"img/7_contentsRight/Noone.png", "alt":"Noone"});
		count = 9;
		$(".Noone").on("click", function(){count=0;});				  
		$(".Notwo").on("click", function(){count=1;});
		$(".Nothree").on("click", function(){count=2;});
		$(".Nofour").on("click", function(){count=3;});
	});

	$(".end img").on("click", function(){
		$(".Nofive img").attr({"src":"img/7_contentsRight/Nofive_2.png", "alt":"Nofive_2"});
		$(".Nofive").css({"background-color":"#c2be67"});
		$(".number li").eq(0).css({"background":"none"});
		$(".number li").eq(1).css({"background":"none"});
		$(".number li").eq(2).css({"background":"none"});
		$(".number li").eq(3).css({"background":"none"});		
		$(".Notwo img").attr({"src":"img/7_contentsRight/Notwo.png", "alt":"Notwo"});
		$(".Nothree img").attr({"src":"img/7_contentsRight/Nothree.png", "alt":"Nothree"});
		$(".Nofour img").attr({"src":"img/7_contentsRight/Nofour.png", "alt":"Nofour"});
		$(".Noone img").attr({"src":"img/7_contentsRight/Noone.png", "alt":"Noone"});
		count=9;
		$(".Noone").on("click", function(){count=0;});				  
		$(".Notwo").on("click", function(){count=1;});
		$(".Nothree").on("click", function(){count=2;});
		$(".Nofour").on("click", function(){count=3;});
	});

	$(".search_3").on("click", function(){
		$(".enterEmail img").css({"display":"none"});		
	});


	$(".topBtn img,.topBtn_2 img").on("click", function (){
		$(window).scrollTop(0);
	});
});