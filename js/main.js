document.addEventListener("DOMContentLoaded", function(){
	document.querySelector( "#nav-toggle" )
		.addEventListener( "click", function(e) {
			e.preventDefault();
			var className = this.parentElement.className;
			this.parentElement.className = className.length > 0 ? "" : "active";
		});
	var i,
		otherLinks = document.querySelectorAll( "nav a:not(#nav-toggle)" ),
		len = otherLinks.length;

		for (i = 0; i < len; i++ ) {
			otherLinks[i].addEventListener( "click", function() {
				if(this.parentElement.className.length > 0) {
					this.parentElement.className = ""
				}
			});
		}
});