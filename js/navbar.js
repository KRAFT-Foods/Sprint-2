var hostUrl = window.location.href.split(":8000")[0]+":8000";

$(()=>{

	// Page laoded
	$('#departments nav').toggleClass('slide-in')

	var current_gender = gender_get();
	var selected_gender = current_gender
	gender_refresh()

	$("nav label").click(function(){
		if (!this.htmlFor) return
		// if (gender_get() == this.htmlFor) 
		selected_gender = this.htmlFor
		gender_refresh()
		gender_set(selected_gender)
		window.location.href = hostUrl+'/'+selected_gender+'/';
	})

	$("nav#gender label").hover(function(){
		if (this.htmlFor == selected_gender) return
		gender_hover(this.htmlFor);
		$('nav#departments').toggleClass('slide-in')
		setTimeout(function () {
			$('nav#departments').toggleClass('slide-in')
		}, 50);
		gender_refresh()
	})

	// $('nav#gender label! :after').hover(()=>{})

	$('.department').on('mouseenter',(self)=>{
		$.post(hostUrl+'/'+selected_gender+'/'+self.target.id+'/',(data)=>{
			$('#categories').html(data)
		})
	})

	$('.department').click((self)=>{
		window.location.href = hostUrl+'/'+selected_gender+'/'+self.target.id;
	})

	$('#focus').hover(()=>{
		$('#categories').html("")
	})



	function gender_get() {
		return Cookies.get('gender');
	}

	function gender_hover(gender) {
		selected_gender = gender;
		return Cookies.set('gender_hover',selected_gender);
	}

	function gender_set(gender) {
		selected_gender = gender;
		current_gender = gender;
		return Cookies.set('gender',gender);
	}

	function gender_refresh() {
		$("#"+selected_gender).prop("checked", true)
	}
});
