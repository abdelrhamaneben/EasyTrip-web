var SearchBar = {
	state: "init",

	showBar: function () {
		if(this.state == "init") {
			this.state = "active",
			$('#formRecherche').show(300);
	    	$('#btnDisplayForm').hide();
		}
		else {
			throw "Need Init State";
		}
	},
	search:function () {
		
	}

};