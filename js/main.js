document.addEventListener('DOMContentLoaded', function(){
	document.querySelector( "#nav-toggle" )
		.addEventListener( "click", function() {
		this.parentElement.classList.toggle( "active" );
	});
	var i,
		otherLinks = document.querySelectorAll( "nav a:not(#nav-toggle)" ),
		len = otherLinks.length;

		for (i = 0; i < len; i++ ) {
			otherLinks[i].addEventListener( "click", function() {
				console.log('test');
				if(this.parentElement.className.length > 0) {
					this.parentElement.className = ""
				}
			});
		}
});