$(()=>{
	// cart_update()
})

var cart = [];

function cart_get() {
	return new Promise(function(resolve, reject) {
		$.getJSON( "/cart/get/", (data)=>{
			if (!data) reject()
			else resolve(data)
		})
	})
}

function cart_add(product,size) {
	var id = cart.length
	console.log(id+":"+product+":"+size);
	$.post( "/cart/add/", {
			id: id,
			product:	product,
			size: size,
		});
		cart_update()
}

function cart_remove(item) {
	$.post( "/cart/del/", { name:	item });
}

function cart_reset() {
	$.post( "/cart/reset/");
}

function cart_update() {
	cart_get().then(function(data){
		console.log(data);
		$('#count').text(data.length)
	}).catch(()=>{
		$('#count').text('0')
		cart_reset()
		cart_update()
	})
	// console.log("cart updated");
}
