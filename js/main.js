jQuery(document).ready(function ($) {
	$('.upload-wrap input[type=file]').change(function () {
		var id = $(this).attr('id');
		var newimage = new FileReader();
		newimage.readAsDataURL(this.files[0]);
		newimage.onload = function (e) {
			$('.uploadpreview.' + id).css('background-image', 'url(' + e.target.result + ')');
		};
		$('<span class="close-btn">X</span>').insertAfter(this);
	});
	$(document).on('click', 'span.close-btn', function () {
		$($(this)[0].previousElementSibling.previousElementSibling).css('background-image', '');
		$(this).remove();
	});
	// function readURL(input, imgControlName) {
	//     if (input.files && input.files[0]) {
	//       var reader = new FileReader();
	//       reader.onload = function(e) {
	//         $(imgControlName).attr('src', e.target.result);
	//       }
	//       reader.readAsDataURL(input.files[0]);
	//     }
	// }
	// $("#removeImage1").click(function(e) {
	//     e.preventDefault();
	//     $("#imag").val("");
	//     $("#ImgPreview").attr("src", "");
	//     $('.preview1').removeClass('it');
	//     $('.btn-rmv1').removeClass('rmv');
	//   });

	// function readURL(input) {
	//     if (input.files && input.files[0]) {
	//         var reader = new FileReader();
	//         reader.onload = function(e) {
	//             $('#imagePreview1').css('background-image', 'url('+e.target.result +')');
	//             $('#imagePreview1').hide();
	//             $('#imagePreview1').fadeIn(650);
	//         }
	//         reader.readAsDataURL(input.files[0]);
	//     }
	// }
	// function readURL(input) {
	//     if (input.files && input.files[0]) {
	//         var reader = new FileReader();
	//         reader.onload = function(e) {
	//             $('#imagePreview2').css('background-image', 'url('+e.target.result +')');
	//             $('#imagePreview2').hide();
	//             $('#imagePreview2').fadeIn(650);
	//         }
	//         reader.readAsDataURL(input.files[0]);
	//     }
	// }
	/*
    $("#imageUpload").change(function() {
        readURL(this);
    });
    */
	//one
	// $("#imageUpload1").change(function() {
	//     // add your logic to decide which image control you'll use
	//     var imgControlName = "#removeImage1";
	//     readURL(this, imgControlName);
	//     $('.btn-rmv1').addClass('rmv');
	//   });
	// $("#removeImage1").click(function(e) {
	//     e.preventDefault();
	//     $("#imageUpload1").val("");
	//     $("#imageUpload1").attr("style", "");
	//     $('.btn-rmv1').removeClass('rmv');
	// });
	// // two
	// $("#imageUpload2").change(function() {
	//     // add your logic to decide which image control you'll use
	//     var imgControlName = "#removeImage2";
	//     readURL(this, imgControlName);
	//     $('.btn-rmv1').addClass('rmv');
	//   });
	// $("#removeImage2").click(function(e) {
	//     e.preventDefault();
	//     $("#imageUpload1").val("");
	//     $("#imageUpload1").attr("style", "");
	//     $('.btn-rmv1').removeClass('rmv');
	// });

	// function readURL(input, imgControlName) {
	//     if (input.files && input.files[0]) {
	//       var reader = new FileReader();
	//       reader.onload = function(e) {
	//         $(imgControlName).attr('style', e.target.result);
	//       }
	//       reader.readAsDataURL(input.files[0]);
	//     }
	//   }

	//   $("#imageUpload").change(function() {
	//     // add your logic to decide which image control you'll use
	//     var imgControlName = "#ImgPreview";
	//     readURL(this, imgControlName);
	//     $('.preview1').addClass('it');
	//     $('.btn-rmv1').addClass('rmv');
	//   });
	//   $("#imag2").change(function() {
	//     // add your logic to decide which image control you'll use
	//     var imgControlName = "#ImgPreview2";
	//     readURL(this, imgControlName);
	//     $('.preview2').addClass('it');
	//     $('.btn-rmv2').addClass('rmv');
	//   });
	//   $("#imag3").change(function() {
	//     // add your logic to decide which image control you'll use
	//     var imgControlName = "#ImgPreview3";
	//     readURL(this, imgControlName);
	//     $('.preview3').addClass('it');
	//     $('.btn-rmv3').addClass('rmv');
	//   });
	//   $("#imag4").change(function() {
	//     // add your logic to decide which image control you'll use
	//     var imgControlName = "#ImgPreview4";
	//     readURL(this, imgControlName);
	//     $('.preview4').addClass('it');
	//     $('.btn-rmv4').addClass('rmv');
	//   });
	//   $("#imag5").change(function() {
	//     // add your logic to decide which image control you'll use
	//     var imgControlName = "#ImgPreview5";
	//     readURL(this, imgControlName);
	//     $('.preview5').addClass('it');
	//     $('.btn-rmv5').addClass('rmv');
	//   });

	//   $("#removeImage1").click(function(e) {
	//     e.preventDefault();
	//     $("#imag").val("");
	//     $("#ImgPreview").attr("style", "");
	//     $('.preview1').removeClass('it');
	//     $('.btn-rmv1').removeClass('rmv');
	//   });
	//   $("#removeImage2").click(function(e) {
	//     e.preventDefault();
	//     $("#imag2").val("");
	//     $("#ImgPreview2").attr("src", "");
	//     $('.preview2').removeClass('it');
	//     $('.btn-rmv2').removeClass('rmv');
	//   });
	//   $("#removeImage3").click(function(e) {
	//     e.preventDefault();
	//     $("#imag3").val("");
	//     $("#ImgPreview3").attr("src", "");
	//     $('.preview3').removeClass('it');
	//     $('.btn-rmv3').removeClass('rmv');
	//   });
	//   $("#removeImage4").click(function(e) {
	//     e.preventDefault();
	//     $("#imag4").val("");
	//     $("#ImgPreview4").attr("src", "");
	//     $('.preview4').removeClass('it');
	//     $('.btn-rmv4').removeClass('rmv');
	//   });
	//   $("#removeImage5").click(function(e) {
	//     e.preventDefault();
	//     $("#imag5").val("");
	//     $("#ImgPreview5").attr("src", "");
	//     $('.preview5').removeClass('it');
	//     $('.btn-rmv5').removeClass('rmv');
	//   });
});
