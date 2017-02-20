if(!Modernizr.input.placeholder){
	var input = document.getElementById("email");
	input.onfocus = function(){
		var text = this.placeholder || this.getAttribute("placeholder");
		if(this.value == text){
			this.value = "";
		}
	}
	input.onblur = function(){
		if(this.value == ""){
			this.value = this.placeholder || this.getAttribute("placeholder");
		}
	}
	input.onblur();
}