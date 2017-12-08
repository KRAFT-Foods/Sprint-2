$(()=>{
	console.log("detail loaded");
	$('#add-to-cart').click((self)=>{
		var size = $('input[name=size]:checked').val()
		var product = $('input[name=product]').val()

		if (size && product)
			window.location.href = hostUrl+'/'+'cart/add/'+product+'/'+size;

	})

	$('.disabled').unbind('click')
})
