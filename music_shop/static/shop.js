jQuery(function($){

	// SEARCH FORMS /////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$(document).on('submit', '.search_form', function(e) {
		var searchQuery = $(this).find('input').val().replace(/ /g, '+');
		var placeHolder = $(this).find('input').attr('placeholder').replace(/ /g, '+');

		if ( !(searchQuery.length && searchQuery != placeHolder) ) {
			e.preventDefault();
			e.stopPropagation();
		};
	});




	// PRODUCT QUANTITY BOX /////////////////////////////////////////////////////////////////////////////////////////////////////
	$(document).on("focusout",".quantity_input",function(){var a=$(this).val();isNaN(parseFloat(a))&&!isFinite(a)||0==parseInt(a)||""==a?$(this).val(1):parseInt(a)<0?$(this).val(parseInt(a)-2*parseInt(a)):$(this).val(parseInt(a))}),$(document).on("click",".quantity_up",function(){var a=$(this).parent().find(".quantity_input");isNaN(parseFloat(a.val()))||!isFinite(a.val())||a.attr("disabled")?a.val(1):a.val(parseInt(a.val())+1)}),$(document).on("click",".quantity_down",function(){var a=$(this).parent().find(".quantity_input");!isNaN(parseFloat(a.val()))&&isFinite(a.val())&&a.val()>1&&!a.attr("disabled")?a.val(parseInt(a.val())-1):a.val(1)});

	// $(document).on('focusout', '.quantity_input', function() {
	// 	var N = $(this).val();

	// 	if ( ( isNaN(parseFloat( N )) && !isFinite( N ) ) || parseInt( N ) == 0 || N == '' ) {
	// 		$(this).val(1);
	// 	}
	// 	else if ( parseInt( N ) < 0 ) {
	// 		$(this).val( parseInt( N ) - parseInt( N )*2 );
	// 	}
	// 	else {
	// 		$(this).val( parseInt( N ) );
	// 	};
	// });

	// $(document).on('click', '.quantity_up', function() {
	// 	var N = $(this).parent().find('.quantity_input');

	// 	if ( !isNaN( parseFloat( N.val() ) ) && isFinite( N.val() ) && !N.attr('disabled') ) {
	// 		N.val( parseInt( N.val() ) + 1 );
	// 	}
	// 	else {
	// 		N.val(1);
	// 	};
	// });

	// $(document).on('click', '.quantity_down', function() {
	// 	var N = $(this).parent().find('.quantity_input');

	// 	if ( !isNaN( parseFloat( N.val() ) ) && isFinite( N.val() ) && ( N.val() > 1 ) && !N.attr('disabled') ) {
	// 		N.val( parseInt( N.val() ) - 1 );
	// 	}
	// 	else {
	// 		N.val(1);
	// 	};
	// });




	// RTE YOUTUBE WRAPPER //////////////////////////////////////////////////////////////////////////////////////////////////////
	$(document).ready(function() {
		if ( $('.rte').length ) {
			$('.rte iframe[src *= youtube]').wrap('<div class="rte_youtube_wrapper"></div>');
		};
	});




	// BACK TO TOP BUTTON ///////////////////////////////////////////////////////////////////////////////////////////////////////
	$(document).ready(function(){
		$(window).on('scroll', function(){
			if ( $(this).scrollTop() > 300 ) {
				$('#back_top').fadeIn("slow");
			}
			else {
				$('#back_top').fadeOut("slow");
			};
		});

		$('#back_top').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate( {scrollTop : 0}, 800 );
			$('#back_top').fadeOut("slow").stop();
		});

	});




	// FORM VALIDATION //////////////////////////////////////////////////////////////////////////////////////////////////////////
	$.fn.formValidation = function() {
		this.find('input[type=text], input[type=email], input[type=password], textarea').after('<p class="alert-inline" style="display: none;"></p>');

		this.on('submit', function(event) {
			$(this).find('input[type=text], input[type=email], input[type=password], textarea').each(function() {

				if ( $(this).val() == '' ) {
					$(this).addClass('alert-inline').next().html('Field can\'t be blank').slideDown();

					$(this).on('focus', function() {
						$(this).removeClass('alert-inline').next().slideUp();
					});

					event.preventDefault();

				};

			});

			if ( $(this).find('input[type=email]').length ) {
				var inputEmail = $(this).find('input[type=email]');

				if ( inputEmail.val().length > 0 && ( inputEmail.val().length < 6 || inputEmail.val().indexOf("@") == -1 || inputEmail.val().indexOf(".") == -1 ) ) {
					inputEmail.addClass('alert-inline').next().html('Incorrect email').slideDown();

					inputEmail.on('focus', function() {
						$(this).removeClass('alert-inline').next().slideUp();
					});

					event.preventDefault();

				};

			};

			if ( $(this).find('input[type=password]').length == 2 ) {
				var pwd1 = $(this).find('input[type=password]:eq(0)');
				var pwd2 = $(this).find('input[type=password]:eq(1)');

				if ( pwd1.val() != pwd2.val() ) {
					pwd1.addClass('alert-inline');
					pwd2.addClass('alert-inline').next().html('Passwords do not match').slideDown();

					pwd1.on('focus', function() {
						pwd1.removeClass('alert-inline');
						pwd2.removeClass('alert-inline').next().slideUp();
					});

					pwd2.on('focus', function() {
						pwd1.removeClass('alert-inline');
						pwd2.removeClass('alert-inline').next().slideUp();
					});

					event.preventDefault();

				};

			};

		});

	};



	// MAIN PRODUCT LISTING IMAGE CHANGE
	$('.product_item').each(function(){
		var self = $(this)
		if ( device.desktop() && self.find(".img__2").length > 0 ) {
			self.on({
				mouseenter: function(){
					self.find(".img__1").stop().animate({"opacity": 0});
					self.find(".img__2").stop().animate({"opacity": 1});
				},
				mouseleave: function(){
					self.find(".img__1").stop().animate({"opacity": 1});
					self.find(".img__2").stop().animate({"opacity": 0});
				}
			});
		}			
	});



// PRODUCT QUICK VIEW MINI
//jQuery(function(e){e(document.body).on("click",".quick_view_btn",function(i){i.preventDefault();e(document.body).append('<div id="product_quick_view" style="display: none;"><div class="product_quick_wrapper"><div class="quick_view__left"><div id="img_big"></div><div class="product_images"><div id="img_gallery" class="swiper-container"><div class="swiper-wrapper"></div><div id="img_gallery__prev" class="swiper_btn btn_prev"></div><div id="img_gallery__next" class="swiper_btn btn_next"></div></div></div></div><div class="quick_view__right"><form action="/cart/add" method="post" enctype="multipart/form-data" id="product-actions" class="quick_view_form"><p id="quick_view__name" class="product_name"></p><p id="quick_view__type"><label for="">Product type:</label> <span></span></p><p id="quick_view__vendor"><label for="">Vendor:</label> <span></span></p><p id="quick_view__variants"><label for="">Options:</label><select id="product-select" name="id" class="hidden"></select></p><p id="quick_view__price" class="product_price"></p><p id="quick_view__availability"><label for="">Availability:</label> <span></span></p><div id="quick_view__form"><label for="quantity">Choose quantity:</label><div class="quantity_box"><input min="1" type="text" name="quantity" value="1" class="quantity_input" /><span class="quantity_modifier quantity_down"><i class="fa fa-minus"></i></span><span class="quantity_modifier quantity_up"><i class="fa fa-plus"></i></span></div><button class="btn btn-cart" type="submit" id="quick_view__add">Add to cart</button></div></form></div></div></div>'),e.fancybox.showLoading(),e.fancybox.helpers.overlay.open({parent:e("body")});e.getJSON(e(this).attr("href")+".js",function(i){if(e(document).on("click","#img_gallery a",function(i){i.preventDefault();var a=e(this).attr("href");e("#product_quick_view #img_big img").attr("src",a)}),i.title.length<60)var a=i.title;else var a=e.trim(i.title).substring(0,75)+"...";e("#quick_view__name").html('<a href="'+i.url+'">'+a+"</a>"),e("#quick_view__type span").html(i.type),e("#quick_view__vendor span").html(i.vendor),e.each(i.variants,function(i,a){e("#product-select").append('<option value="'+a.id+'">'+a.title+" - "+a.price+"</option>")}),e("#quantity").on("focusout",function(){var i=e(this).val();e(this).val(isNaN(parseFloat(i))&&!isFinite(i)||0==parseInt(i)||""==i?1:parseInt(i)<0?parseInt(i)-2*parseInt(i):parseInt(i))}),e("#quantity_up").on("click",function(){var i=e("#quantity").val();e("#quantity").val(!isNaN(parseFloat(i))&&isFinite(i)?parseInt(i)+1:1)}),e("#quantity_down").on("click",function(){var i=e("#quantity").val();e("#quantity").val(!isNaN(parseFloat(i))&&isFinite(i)&&i>1?parseInt(i)-1:1)}),e.getScript("//cdn.shopify.com/shopifycloud/shopify/assets/themes_support/option_selection-9f517843f664ad329c689020fb1e45d03cac979f64b9eb1651ea32858b0ff452.js",function(){function a(i,a){var t=i.length;0===t&&a();var n=0;e(i).each(function(){e("<img>").attr("src",this).load(function(){n++,n===t&&a()})})}a(i.images,function(){if(i.images.length>0){e("#product_quick_view #img_big").append('<img src="'+i.images[0]+'" alt="" />'),e.each(i.images,function(i,a){e("#img_gallery .swiper-wrapper").append('<a class="swiper-slide" href="'+a+'"><img src="'+a+'" alt="" /></a>')})}else{e("#product_quick_view #img_big").append('<img src="//cdn.shopify.com/s/files/1/0076/0535/4609/t/2/assets/no_image.png?v=16438023895267530931541169045" alt="" />')}var a=(new Swiper("#img_gallery",{width:302,loop:!0,speed:500,slidesPerView:3,spaceBetween:10,prevButton:"#img_gallery__prev",nextButton:"#img_gallery__next"}),function(i,a){if(i&&i.available?(jQuery("#quick_view__add").removeAttr("disabled").removeClass("disabled"),i.price<i.compare_at_price?jQuery("#quick_view__price").html('<span class="money">'+Shopify.formatMoney(i.price,"")+'</span><span class="money compare-at-price money_sale">'+Shopify.formatMoney(i.compare_at_price,"")+'</span><span class="money_sale_percent">– '+parseInt(100-100*i.price/i.compare_at_price)+"%</span>"):jQuery("#quick_view__price").html('<span class="money">'+Shopify.formatMoney(i.price,"")+"</span>"),null!=i.inventory_management?jQuery("#quick_view__availability span").removeClass("notify_danger").addClass("notify_success").html("Available"):jQuery("#quick_view__availability span").removeClass("notify_danger").addClass("notify_success").html("Available")):(jQuery("#quick_view__add").addClass("disabled").attr("disabled","disabled"),jQuery("#quick_view__availability span").removeClass("notify_success").addClass("notify_danger").html("Unavailable"),jQuery("#quick_view__price").html('<span class="money">'+Shopify.formatMoney(i.price,"")+"</span>")),i&&i.featured_image){var t=e("#img_big img"),n=i.featured_image,s=t[0];Shopify.Image.switchImage(n,s,function(i,a,t){e("#img_big img").attr("src",i)})}currencyToggle("#quick_view__price .money")});new Shopify.OptionSelectors("product-select",{product:i,onVariantSelected:a,enableHistoryState:!1}),e.each(e("#quick_view__variants select option"),function(){"Default Title"==e(this).val()&&e("#quick_view__variants").hide()}),e.fancybox(e("#product_quick_view"),{openSpeed:500,closeSpeed:500,tpl:{wrap:'<div id="quick_view__wrap" class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',closeBtn:'<a title="Close" id="quick_view__close" class="fancybox-item fancybox-close" href="javascript:;"></a>'},afterClose:function(){e("#product_quick_view").remove()}})})}),e("#quick_view__add").on("click",function(){e.fancybox.close()})})})});



// PRODUCT QUICK VIEW FULL
	jQuery(function($){
		$(document.body).on('click', '.quick_view_btn', function(e) {
			e.preventDefault();

			// CONSTRUCTING QUICK VIEW MODAL
			$(document.body).append('<div id="product_quick_view" style="display: none;"><div class="product_quick_wrapper"><div class="quick_view__left"><div id="img_gallery__prev" class="swiper_btn btn_prev"></div><div id="img_gallery__next" class="swiper_btn btn_next"></div><div class="product_images"><div id="img_gallery" class="swiper-container"><div class="swiper-wrapper"></div></div></div><div id="img_big"></div></div><div class="quick_view__right"><form action="/cart/add" method="post" enctype="multipart/form-data" id="product-actions" class="quick_view_form"><p id="quick_view__name" class="product_name"></p><p id="quick_view__availability"><label for="">Availability:</label> <span></span></p><p id="quick_view__price" class="product_price"></p><p id="quick_view__description"></p><p id="quick_view__type"><label for="">Product type:</label> <span></span></p><p id="quick_view__vendor"><label for="">Vendor:</label> <span></span></p><p id="quick_view__variants"><label for="">Options:</label><select id="product-select" name="id" class="hidden"></select></p><div id="quick_view_colors"></div><div id="quick_view_size"></div><div id="quick_view__form"><label for="quantity">Choose quantity:</label><div class="quantity_box"><span class="quantity_modifier quantity_down"><i class="fa fa-minus"></i></span><input min="1" type="text" name="quantity" value="1" class="quantity_input" /><span class="quantity_modifier quantity_up"><i class="fa fa-plus"></i></span></div><button class="btn btn-cart" type="submit" id="quick_view__add">Add to cart</button></div></form><div id="product_info_link"><a href="#">View Full Info</a></div></div></div></div>');

			// SHOWING FANCYBOX LOADING ANIMATION
			$.fancybox.showLoading();
			$.fancybox.helpers.overlay.open({parent: $('body')});

			// GETTING PRODUCT INFO (JSON)
			$.getJSON( $(this).attr( 'href' ) + '.js', function( product ) {

				// TOGGLE BIG IMAGE WHEN CLICKING A THUMB
				$(document).on('click', '#img_gallery a', function(e) {
					e.preventDefault();
					var newHREF = $(this).attr('href');
					$('#product_quick_view #img_big img').attr('src', newHREF );
				});

				// PRODUCT TITLE
				if ( product.title.length < 60 ) {
					var productTitle = product.title;
				}
				else {
					var productTitle = $.trim( product.title ).substring(0, 75) + '...';
				};
				$('#quick_view__name').html( '<a href="' + product.url + '">' + productTitle + '</a>' );


				// PRODUCT DESCRIPTION
				var productDescription = $.trim( product.description ).substring(0, 150) + '...';
				$('#quick_view__description').html( productDescription );

				// PRODUCT TYPE
				$('#quick_view__type span').html( product.type );

				// PRODUCT VENDOR
				$('#quick_view__vendor span').html( product.vendor );

				// PRODUCT VARIANTS
				$.each(product.variants, function(i, variant) {
					$('#product-select').append('<option value="' + variant.id + '">' + variant.title + ' - ' + variant.price + '</option>')
				});

				// PRODUCT ALL INFO LINK
				$('#product_info_link a').attr( 'href', product.url );

				// QUANTITY FORM MINI
				$("#quantity").on("focusout",function(){var t=$(this).val();$(this).val(isNaN(parseFloat(t))&&!isFinite(t)||0==parseInt(t)||""==t?1:parseInt(t)<0?parseInt(t)-2*parseInt(t):parseInt(t))}),$("#quantity_up").on("click",function(){var t=$("#quantity").val();$("#quantity").val(!isNaN(parseFloat(t))&&isFinite(t)?parseInt(t)+1:1)}),$("#quantity_down").on("click",function(){var t=$("#quantity").val();$("#quantity").val(!isNaN(parseFloat(t))&&isFinite(t)&&t>1?parseInt(t)-1:1)});

				// UPLOADING option_selection.js TO MANAGE PRODUCT VARIANTS
				$.getScript( "//cdn.shopify.com/shopifycloud/shopify/assets/themes_support/option_selection-9f517843f664ad329c689020fb1e45d03cac979f64b9eb1651ea32858b0ff452.js", function() {

					// IMAGES PRELOADER (FUNCTION)
					function preloadImages(images, callback) {
						var count = images.length;
						if (count === 0) {
							callback();
						}
						var loaded = 0;
						$(images).each(function() {
							$('<img>').attr('src', this).load(function() {
								loaded++;
								if (loaded === count) {
									callback();
								}
							});
						});
					};

					// IMAGES PRELOADER (INIT)
					preloadImages( product.images, function() {

						// APPENDING BIG IMAGE
						var bigImgUrl = product.images[0].replace('.png', '_308x390_crop_center.png').replace('.jpg', '_308x390_crop_center.jpg');
						$('#product_quick_view #img_big').append( '<img src="' + bigImgUrl + '" alt="" />' );

						// APPENDING ALL IMAGES TO GALLERY
						$.each(product.images, function(i, src) {
							var smallSrc = src.replace('.png', '_90x90_crop_center.png').replace('.jpg', '_90x90_crop_center.jpg');
							var bigSrc = src.replace('.png', '_308x390_crop_center.png').replace('.jpg', '_308x390_crop_center.jpg');
							$('#img_gallery .swiper-wrapper').append( '<a class="swiper-slide" href="' + bigSrc + '"><img src="' + smallSrc + '" alt="" /></a>' );
						});

						// ADDING THUMBS SLIDER
						var quickViewGallery = new Swiper('#img_gallery', {
							direction: 'vertical',
							height: 390,
							speed: 500,
							slidesPerView: 4,
							spaceBetween: 10,
							prevButton: '#img_gallery__prev',
							nextButton: '#img_gallery__next',
						});

						// VARIANT CHANGE FUNCTION
						var selectCallback = function(variant, selector) {
							if ( variant && variant.available ) {

								jQuery('#quick_view__add').removeAttr('disabled').removeClass('disabled');

								// VARIANT PRICES
								if( variant.price < variant.compare_at_price ){
									jQuery('#quick_view__price').html('<span class="money">' + Shopify.formatMoney(variant.price, "") + '</span><span class="money compare-at-price money_sale">' + Shopify.formatMoney(variant.compare_at_price, "") + '</span><span class="money_sale_percent">– ' + parseInt( 100 - ( variant.price*100 )/variant.compare_at_price ) + '%</span>');
								}
								else {
									jQuery('#quick_view__price').html('<span class="money">' + Shopify.formatMoney(variant.price, "") + '</span>');
								};

								// PRODUCT QUANTITY
								if ( variant.inventory_management != null ) {
									jQuery('#quick_view__availability span').removeClass('notify_danger').addClass('notify_success').html('Available');
								}
								else {
									jQuery('#quick_view__availability span').removeClass('notify_danger').addClass('notify_success').html( 'Available' );
								};
							} else {
	
								jQuery('#quick_view__add').addClass('disabled').attr('disabled', 'disabled'); // set add-to-cart button to unavailable class and disable button

								jQuery('#quick_view__availability span').removeClass('notify_success').addClass('notify_danger').html( 'Unavailable' );

								jQuery('#quick_view__price').html('<span class="money">' + Shopify.formatMoney(variant.price, "") + '</span>');
							};




							// COLOR & SIZE OPTIONS
							for (var i = 0; i < selector.product.options.length; i++) {
								if ( selector.product.options[i].name.toLowerCase() == 'color' ) {
										var selectorNum = i;
										var selectorName = selector.product.options[i].name;

									renderColorOptions(selectorNum, selectorName);
								};
								if ( selector.product.options[i].name.toLowerCase() == 'size' ) {
										var selectorNum = i;
										var selectorName = selector.product.options[i].name;

									renderSizeOptions(selectorNum, selectorName);
								};
							};


							// CHANGING VARIANT IMAGE
							if ( variant && variant.featured_image ) {

    var originalImage = $("#img_big img");

    var newImage = variant.featured_image;

    var element = originalImage[0];

    Shopify.Image.switchImage(newImage, element, function (newImageSizedSrc, newImage, element) {

      var newBigImg = newImageSizedSrc.replace('.png', '_crop_center.png').replace('.jpg', '_crop_center.jpg');

  

        $('#img_big img').attr('src', newBigImg);

        quickViewGallery.slides.each(function(i) {

            var thumb = $(this).find('img').attr('src').replace('_90x90_crop_top', '').replace('_90x90_crop_center', '').replace('_90x90_crop_bottom', '').replace(/\?v=.*/ , '');

            var newImg = newImageSizedSrc.replace('_308x390', '').replace(/\?v=.*/ , '');

        

            if ( thumb == newImg ) {

                quickViewGallery.slideTo(i);

            };

        });

    });

};

							currencyToggle('#quick_view__price .money');
						};

						// VARIANT CHANGE FUNCTION (INIT)
						new Shopify.OptionSelectors( "product-select",
						{
							product: product,
							onVariantSelected: selectCallback,
							enableHistoryState: false
						});

						// HIDING DEFAULT VARIANT SELECTOR
						$.each( $('#quick_view__variants select option'), function() {
							if ( $(this).val() == 'Default Title' ) {
								$('#quick_view__variants').hide();
							};
						});

						// SHOWING QUICK VIEW MODAL
						$.fancybox( $('#product_quick_view'),
							{
								'openSpeed': 500,
								'closeSpeed': 500,
								'tpl': {
									wrap: '<div id="quick_view__wrap" class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
									closeBtn : '<a title="Close" id="quick_view__close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
								},
								'afterClose': function() {
									$('#product_quick_view').remove(); // REMOVING QUICK VIEW MODAL AFTER CLOSE
								}
							}
						);

					});

				});


				function renderColorOptions(num, name) {
					var colorSelect = $('#product_quick_view .single-option-selector').eq(num);
					var selectId = '#' + colorSelect.attr('id');
					var container = $('#product_quick_view #quick_view_colors');
					var content = '<label>' + name + ': </label>';

					colorSelect.parent('.selector-wrapper').addClass('hidden');

					if ( $('#product_quick_view .single-option-selector').length == 1 ) {
						$('#quick_view__variants label').hide();
					}

					$('#product_quick_view ' + selectId + ' option' ).each(function(){
						var value = $(this).val();
						if ( colorSelect.val() == value ) {
							return content = content + '<div class="color_item current" data-val="' + value + '" title="' + value + '"><span class="color_inner" style="background-color: ' + value + '"></span></div>';
						} else {
							return content = content + '<div class="color_item" data-val="' + value + '" title="' + value + '"><span class="color_inner" style="background-color: ' + value + '"></span></div>';
						}
					});

					container.html(content);

					$('#product_quick_view .color_item').on('click', function(e){
						colorSelect.val( $(this).data('val') ).trigger('change');
					});
				};

				// RENDER SIZE OPTION
				function renderSizeOptions(num, name){
					var sizeSelect = $('#product_quick_view .single-option-selector').eq(num);
					var selectId = '#' + sizeSelect.attr('id');
					var container = $('#product_quick_view #quick_view_size');
					var content = '<label>' + name + ': </label>';

					sizeSelect.parent('.selector-wrapper').addClass('hidden');

					if ( $('#product_quick_view .single-option-selector').length == 1 ) {
						$('#quick_view__variants label').hide();
					}

					$('#product_quick_view ' + selectId + ' option' ).each(function(){
						var value = $(this).val();
						if ( sizeSelect.val() == value ) {
							return content = content + '<div class="size_item current" data-val="' + value + '"><span class="size_inner">' + value + '</span></div>';
						} else {
							return content = content + '<div class="size_item" data-val="' + value + '"><span class="size_inner">' + value + '</span></div>';
						};
					});

					container.html(content);

					$('#product_quick_view .size_item').on('click', function(e){
						sizeSelect.val( $(this).data('val') ).trigger('change');
					});
					
				};




				// CLOSING QUICK VIEW MODAL AFTER ADDING TO CART
				$('#quick_view__add').on('click', function() {
					$.fancybox.close();
				});

			});

		});

	});





	function currencyToggle(target) {
		// SWITCH CURRENCY
		if ( typeof theme.shopCurrency != 'undefined' ) {
			var newCurrency = Currency.cookie.read();
			Currency.convertAll( theme.shopCurrency, newCurrency, target, 'money_format' ); 
		}
	};



	// CHOOSE OPTIONS BUTTON
		$(document.body).on('click', '.btn_options', function(e) {
			if ( $(window).width() >= 992 ) {
				$(this).parent().parent().parent().parent().find('.quick_view_btn').trigger('click');
				e.preventDefault();
			};
		});




	// AJAX CART  ////////////////////////////////////////////////////////////////////////////////
	function ajaxCartRender() {
		$('.cart_content_preloader').removeClass('off');
		jQuery.getJSON('/cart.js', function(data) {
			var newHtml = '';

			if ( data.items.length == 0 ) {
				newHtml += '<p class="alert alert-warning">' + theme.cartAjaxTextEmpty + '</p>';
			} else {
				data.items.forEach( function( item, i ) {
					var image_url = item.image.replace('.png','_90x90.png').replace('.jpg','_90x90.jpg');
					newHtml += '<li class="cart_items"><img class="item_img" src="' + image_url + '"  alt="' + item.title + '" /><div class="item_desc"><a class="product_title" href="' + item.url + '">' + item.title.slice(0,50) + '</a><span class="money">' + Shopify.formatMoney(item.price, theme.moneyFormat) + '</span><p class="product_quantity">x' + item.quantity + '</p><a class="item_remove_btn" href="#" item-id="' + item.id + '"><i class="fa fa-trash"></i></a></div></li>';
				});

				newHtml += '<div class="box_footer"><p class="cart_total"><b>' + theme.cartAjaxTextTotalPrice + ': </b><span class="money">' + Shopify.formatMoney(data.total_price, theme.moneyFormat)  + '</span></p><a id="clear_cart_all_items" class="cart_clear" href="/cart/clear"><i class="fa fa-refresh" title="' + theme.cartAjaxTextClearCart + '"></i></a><a class="btn cart_url" href="/cart">' + theme.cartAjaxTextGoCart + '</a></div>';
					
			}

			$('#cart_content_box').html(newHtml);
			$('.header_cart #cart_items').html(data.item_count);
			removeItemFromCart();
			clearAllItemsFromCart();
			$('.cart_content_preloader').addClass('off');
		});
	};

	// REMOVE AJAX CART ITEMS
	function removeItemFromCart(){
		$('.header_cart .item_remove_btn').on('click', function(e){
			e.preventDefault();
			console.log('klick');
			itemId = this.getAttribute('item-id');
			var postData = "updates[" + itemId + "]=0";
			jQuery.post('/cart/update.js', postData, function(){
				ajaxCartRender();
				
			});
		});
	};
	removeItemFromCart();

	// CLEAR AJAX CART 
	function clearAllItemsFromCart(){
		$('#cart_content_box #clear_cart_all_items').on('click', function(e){
			e.preventDefault();

			jQuery.post('/cart/clear.js', function(){
				ajaxCartRender();
			});
		});
	};
	clearAllItemsFromCart();


	// JQUERY.AJAX-CART.JS MINI
	jQuery(document).ready(function(t){var e={TOTAL_ITEMS:".cart-total-items",TOTAL_PRICE:".cart-total-price",SUBMIT_ADD_TO_CART:"input[type=image], input.submit-add-to-cart",FORM_UPDATE_CART:"form[name=cartform]",FORM_UPDATE_CART_BUTTON:"form[name=cartform] input[name=update]",FORM_UPDATE_CART_BUTTONS:"input[type=image], input.button-update-cart",LINE_ITEM_ROW:".cart-line-item",LINE_ITEM_QUANTITY_PREFIX:"input#updates_",LINE_ITEM_PRICE_PREFIX:".cart-line-item-price-",LINE_ITEM_REMOVE:".remove a",EMPTY_CART_MESSAGE:"#empty"},a=function(t){return Shopify.formatMoney(t,"${{ amount }}")};t(document).on("submit",'form[action*="/cart/add"]',function(e){e.preventDefault(),t(e.target).find(".btn-cart").attr("disabled",!0).addClass("disabled"),Shopify.addItemFromForm(e.target)}),t(document).on("click",".btn-cart",function(){t.fancybox.showLoading(),t.fancybox.helpers.overlay.open({parent:t("body")})}),t(e.FORM_UPDATE_CART_BUTTON).click(function(a){a.preventDefault(),t(a.target.form).find(e.FORM_UPDATE_CART_BUTTONS).attr("disabled",!0).addClass("disabled"),Shopify.updateCartFromForm(a.target.form)}),t(e.FORM_UPDATE_CART).delegate(e.LINE_ITEM_REMOVE,"click",function(a){a.preventDefault();var i=this.href.split("/").pop().split("?").shift();Shopify.removeItem(i),t(this).parents(e.LINE_ITEM_ROW).remove()}),Shopify.onItemAdded=function(e,a){t(a).find(".btn-cart").attr("disabled",!1).removeClass("disabled"),Shopify.getCart()},Shopify.onCartUpdate=function(i,n){t("#cart_items").html(i.item_count);if(theme.cartAjaxOn){ajaxCartRender();}var r=a(i.total_price);t(e.TOTAL_PRICE).html(r),t(e.EMPTY_CART_MESSAGE).length>0&&0==i.item_count&&(t(e.FORM_UPDATE_CART).hide(),t(e.EMPTY_CART_MESSAGE).show()),n=n||!1,n&&i.item_count>0&&(t.each(i.items,function(i,n){t(e.LINE_ITEM_PRICE_PREFIX+n.id).html(a(n.line_price)),t(e.LINE_ITEM_QUANTITY_PREFIX+n.id).val(n.quantity)}),t(n).find("input[value=0]").parents(e.LINE_ITEM_ROW).remove(),t(n).find(e.FORM_UPDATE_CART_BUTTONS).attr("disabled",!1).removeClass("disabled"))},Shopify.onError=function(){t("form").find(".btn-cart").attr("disabled",!1).removeClass("disabled")}});





// JQUERY.API.JS MINI
function floatToString(t,a){var e=t.toFixed(a).toString();return e.match(/^\.\d+/)?"0"+e:e}function attributeToString(t){return"string"!=typeof t&&(t+="","undefined"===t&&(t="")),jQuery.trim(t)}"undefined"==typeof Shopify&&(Shopify={}),Shopify.money_format="$ ",Shopify.onError=function(XMLHttpRequest,textStatus){var data=eval("("+XMLHttpRequest.responseText+")");alert(data.message+"("+data.status+"): "+data.description)},Shopify.onCartUpdate=function(t){alert("There are now "+t.item_count+" items in the cart.")},Shopify.onItemAdded=function(t){alert(t.title+" was added to your shopping cart.")},Shopify.onProduct=function(t){alert("Received everything we ever wanted to know about "+t.title)},Shopify.formatMoney=function(t,a){var e="",r=/\{\{\s*(\w+)\s*\}\}/,o=a||this.money_format;switch(o.match(r)[1]){case"amount":e=floatToString(t/100,2).replace(/(\d+)(\d{3}[\.,]?)/,"$1 $2");break;case"amount_no_decimals":e=floatToString(t/100,0).replace(/(\d+)(\d{3}[\.,]?)/,"$1 $2");break;case"amount_with_comma_separator":e=floatToString(t/100,2).replace(/\./,",").replace(/(\d+)(\d{3}[\.,]?)/,"$1.$2")}return o.replace(r,e)},Shopify.resizeImage=function(t,a){try{if("original"==a)return t;var e=t.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);return e[1]+"_"+a+"."+e[2]}catch(r){return t}},Shopify.addItem=function(t,a,e){a=a||1;var r={type:"POST",url:"/cart/add.js",data:"quantity="+a+"&id="+t,dataType:"json",success:function(t){"function"==typeof e?e(t):Shopify.onItemAdded(t)},error:function(t,a){Shopify.onError(t,a)}};jQuery.ajax(r)},Shopify.addItemFromForm=function(t,o){var r={type:"POST",url:"/cart/add.js",data:jQuery(t).serialize(),dataType:"json",success:function(r){"function"==typeof o?o(r,t):Shopify.onItemAdded(r,t);$('body').append('<div id="cart_added"><h4>Product added to cart</h4><div class="cart_added__row"><div class="cart_added__1" id="cart_added__img"><img src="" alt="" /></div><div class="cart_added__2"><span id="cart_added__name" class="product_name"></span><p id="cart_added__quantity">Quantity: <span></span></p><a class="btn" href="/cart">Go to cart</a><a class="btn btn-alt" id="cart_added__close" href="#">Continue shopping</a></div></div></div>');if(r.title.length<60){var productTitle=r.title}else{var productTitle=$.trim(r.title).substring(0,60)+'...'};$('#cart_added__name').html(productTitle);$('#cart_added__quantity span').html(r.quantity);$('#cart_added__close').on('click',function(e){e.preventDefault();$('.fancybox-close').trigger('click')});if(r.image){$('#cart_added__img img').attr('src',r.image).load(function(){$.fancybox.open($('#cart_added'),{'openSpeed':500,'closeSpeed':300,'afterClose':function(){$('#cart_added').remove()}})})}else{$('#cart_added__img').hide();$.fancybox.open($('#cart_added'),{'openSpeed':500,'closeSpeed':300,'afterClose':function(){$('#cart_added').remove()}})}},error:function(t,o){Shopify.onError(t,o);var errorData=eval('('+t.responseText+')');$('body').append('<div id="cart_added" class="cart_error"><h4></h4><p class="alert alert-error"></p></div>');$('#cart_added h4').html(errorData.message);$('#cart_added p').html(errorData.description);$.fancybox.open($('#cart_added'),{'openSpeed':500,'closeSpeed':300,'afterClose':function(){$('#cart_added').remove()}})}};jQuery.ajax(r)},Shopify.getCart=function(t){jQuery.getJSON("/cart.js",function(a){"function"==typeof t?t(a):Shopify.onCartUpdate(a)})},Shopify.getProduct=function(t,a){jQuery.getJSON("/products/"+t+".js",function(t){"function"==typeof a?a(t):Shopify.onProduct(t)})},Shopify.changeItem=function(t,a,e){var r={type:"POST",url:"/cart/change.js",data:"quantity="+a+"&id="+t,dataType:"json",success:function(t){"function"==typeof e?e(t):Shopify.onCartUpdate(t)},error:function(t,a){Shopify.onError(t,a)}};jQuery.ajax(r)},Shopify.removeItem=function(t,a){var e={type:"POST",url:"/cart/change.js",data:"quantity=0&id="+t,dataType:"json",success:function(t){"function"==typeof a?a(t):Shopify.onCartUpdate(t)},error:function(t,a){Shopify.onError(t,a)}};jQuery.ajax(e)},Shopify.clear=function(t){var a={type:"POST",url:"/cart/clear.js",data:"",dataType:"json",success:function(a){"function"==typeof t?t(a):Shopify.onCartUpdate(a)},error:function(t,a){Shopify.onError(t,a)}};jQuery.ajax(a)},Shopify.updateCartFromForm=function(t,a){var e={type:"POST",url:"/cart/update.js",data:jQuery(t).serialize(),dataType:"json",success:function(e){"function"==typeof a?a(e,t):Shopify.onCartUpdate(e,t)},error:function(t,a){Shopify.onError(t,a)}};jQuery.ajax(e)},Shopify.updateCartAttributes=function(t,a){var e="";jQuery.isArray(t)?jQuery.each(t,function(t,a){var r=attributeToString(a.key);""!==r&&(e+="attributes["+r+"]="+attributeToString(a.value)+"&")}):"object"==typeof t&&null!==t&&jQuery.each(t,function(t,a){e+="attributes["+attributeToString(t)+"]="+attributeToString(a)+"&"});var r={type:"POST",url:"/cart/update.js",data:e,dataType:"json",success:function(t){"function"==typeof a?a(t):Shopify.onCartUpdate(t)},error:function(t,a){Shopify.onError(t,a)}};jQuery.ajax(r)},Shopify.updateCartNote=function(t,a){var e={type:"POST",url:"/cart/update.js",data:"note="+attributeToString(t),dataType:"json",success:function(t){"function"==typeof a?a(t):Shopify.onCartUpdate(t)},error:function(t,a){Shopify.onError(t,a)}};jQuery.ajax(e)};




	// WISHLIST ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







// COUNTDOWN TIMER //////////////////////////////////////////////////////////////////////////////////////////////////////////
$.fn.ccountdown = function(_yr, _m, _d, _t, callback) {
	var $this = this;
	var interval;
	var _montharray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
	var _today = new Date();
	// calling function first time so that it wll setup remaining time
	var _changeTime = function() {
		var _today = new Date();
		var _todayy = _today.getYear();
		if (_todayy < 1000)
			_todayy += 1900;
		var _todaym = _today.getMonth();
		var _todayd = _today.getDate();
		var _todayh = _today.getHours();
		var _todaymin = _today.getMinutes();
		var _todaysec = _today.getSeconds();
		_todaysec = "0" + _todaysec;
		_todaysec = _todaysec.substr(_todaysec.length - 2);
		var _todaystring = _montharray[_todaym] + " " + _todayd + ", " + _todayy + " " + _todayh + ":" + _todaymin + ":" + _todaysec;
		var _futurestring = _montharray[_m - 1] + " " + _d + ", " + _yr + " " + _t;
		/* calculation of remaining days, hrs, min, and secs */
		_dd = Date.parse(_futurestring) - Date.parse(_todaystring);
		_dday = Math.floor(_dd / (60 * 60 * 1000 * 24) * 1);
		_dhour = Math.floor((_dd % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
		_dmin = Math.floor(((_dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
		_dsec = Math.floor((((_dd % (60 * 60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);
		var el = $($this);
		var $ss = el.find(".second"), $mm = el.find(".minute"), $hh = el.find(".hour"), $dd = el.find(".days");
		$ss.val(_dsec).trigger("change");
		$mm.val(_dmin).trigger("change");
		$hh.val(_dhour).trigger("change");
		$dd.val(_dday).trigger("change");
		if (_dd <= 0){
			$ss.val('0');
			$mm.val('0');
			$hh.val('0');
			$dd.val('0');
			window.clearInterval(interval);
			if (typeof callback == 'function'){
				callback.call(this);
			}
		}
	};
	
	_changeTime();

	interval = setInterval(_changeTime, 1000);
};





// INSTAGRAM /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$.fn.homeSections = function() {
	sectionInstagram = function(target) {
		var feedWrap = target.find('.instafeed_wrap');
		var feedID = feedWrap.attr('id');
		var feedUser = feedWrap.data('user');
		var feedToken = feedWrap.data('token');
		var feedLimit = feedWrap.data('limit');

		window[feedID] = function() {
			var feed = new Instafeed({
				target: feedID,
				get: 'user',
				userId: feedUser,
				accessToken: feedToken,
				limit: feedLimit,
				template: '<div class="col-xs-2 instagram_item swiper-slide"><a href="{{link}}"><img src="{{image}}" alt=""><div class="info"><span class="likes"><i class="fa fa-heart" aria-hidden="true"></i>{{likes}}</span><span class="comments"><i class="fa fa-comment" aria-hidden="true"></i>{{comments}}</span></div></a></div>',
				resolution: 'low_resolution',
				error: function( data ) {
					document.getElementById(feedID).innerHTML = '<p class="alert alert-danger"><b>Instagram error</b><br>' + data + '</p>';
				},
				after: function() {
					instagramCarouselInit();
				}
			});
			feed.run();
		};

		window[feedID]();
	};

	if ( this.hasClass('section_instagram') ) {
		sectionInstagram(this);
	};
};

// function instagramCarouselInit() {
instagramCarouselInit = function() {
	$('.instagram_feed').each(function(i) {
		var sectionId = $(this).find('.instafeed_wrap').attr('id').replace('instafeed_', '');
		var sliderPrev = '#instagram_prev_' + sectionId;
		var sliderNext = '#instagram_next_' + sectionId;

		var insCarou = new Swiper( '.instagram_feed', {
			effect: 'slide',
			loop: true,
			slidesPerView: 5,
			spaceBetween: 30,
			
			prevButton: sliderPrev,
			nextButton: sliderNext,
			breakpoints: {
				1199: {
					slidesPerView: 4
				},
				992: {
					slidesPerView: 3
				},
				768: {
					slidesPerView: 2
				},
				480: {
					slidesPerView: 1
				}
			},

		});  

		insCarou.onResize();

	});
};

$(window).on('load', function() {
	$('.section_instagram').homeSections();
	//instagramCarouselInit();
});

$(document).on('shopify:section:load shopify:section:select', '.section_instagram', function() {
	$(this).homeSections();
});



// MOBILE MENU SHOW/HIDE BANNER
$(window).on('load', function() {
	if ( $(window).width() < 768 ) {
		$('.banner_menu_item').each(function(i) {
			var item = $(this);
			var trigger = item.find('.menu_trigger');
			var menu = item.find('ul')
			menu.hide(0);

			trigger.on('click', function(e){
				if ( item.hasClass('open') ) {
					item.removeClass('open');
					menu.hide(500);
				} else {
					item.addClass('open');
					menu.show(500);
				};
			});
		});
	};
});


// MOBILE MENU SLIDESHOW 
$(window).on('load', function() {
	if ( $(window).width() < 992 ) {
		$('.section_slideshow .linklist_menu_item').each(function(i) {
			var item = $(this);
			var trigger = item.find('.menu_trigger');
			var menu = item.find('ul')
			menu.hide(0);

			trigger.on('click', function(e){
				if ( item.hasClass('open') ) {
					item.removeClass('open');
					menu.hide(500);
				} else {
					item.addClass('open');
					menu.show(500);
				};
			});
		});
	};
});




// TABS //////////////////////////////////////////////////////////////////////////////////////////////////////////////
$('.tab_content_wrapper').each(function(i) {
	var navItem = $(this).find('.tab_nav');
	var tabItem = $(this).find('.tab_item')
	navItem.on('click',function(e){
		navItem.removeClass('active');
		$(this).addClass('active');
		tabItem.removeClass('active');
		tabItem.eq($(this).data('tab')).addClass('active');
	});
});




// TITLE ANIMATION
titleAnimationScrollTrack = function(id, effect){
	$(window).on('load scroll',function(){
		if ( $(window).width() > 992 ) {
			var position = $(id).offset();
			if ( $(this).scrollTop() >= position.top - 500  ) {
			
				if ( effect !== 'none' ){
					$(id).textillate({
						in: {
							effect: effect,
							initialDelay: 0,
						}
					});
					$(id).removeAttr("id");
				}
			}
		}
	});
};


// SHOW TITLE ANIMATION
$(window).on('load', function() {
	$('.title_animation').each(function() {
		var elemId = "#" + $(this).attr('id');
		var elemEffect = $(this).data('in-effect');
		
		titleAnimationScrollTrack(elemId, elemEffect);
	});	
});








});



