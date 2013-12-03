/* JavaScript */

var Index = {

	init: function() {
		Index.setForm();
		Index.listimcs();
	},

	setForm: function() {
		var form = document.getElementById('fb-imc');
		if(form) {
			form.onsubmit = function() {
				Index.saveimc(form);
				window.location.replace('index.html#drawer');
				return false; //to prevent the form submition

			};
		}
	},

	saveimc: function(form) {
		var imc = {};
		imc.name  = form.name.value;
		imc.resultimc = form.resultimc.value;
		
		if(IMCDAO.save(imc) == IMCDAO.NEW) {
			TableController.addItem(imc, Index.edit, Index.delete);
		}
		else {
			TableController.clearList();
			Index.listimcs();
		}

		form.name.value = form.resultimc.value = "";
		},

	setTable: function() {
		var table = document.getElementById('tb-imc');
		TableController.setTable(table);
	},

	listimcs: function() {
		Index.setTable();
		var imcList = IMCDAO.retrieve();
		if (imcList && imcList.length) {
			TableController.addList(imcList, Index.edit, Index.delete);
		}
	},

	edit: function(resultimc) {
		if(confirm("Do you want edit " + resultimc)) {
			var imc = IMCDAO.get(resultimc);
			if (imc) {
				var form = document.getElementById('fb-imc');
				form.name.value  = imc.name;
				form.resultimc.value = imc.resultimc;
			}
		}
	},

	delete: function(resultimc, element) {
		if(confirm("Are you sure about to delete " + resultimc)) {
			var imc = IMCDAO.get(resultimc);
			if (imc) {
				if(IMCDAO.delete(resultimc)) {
					var row = element.parentNode.parentNode;
					row.parentNode.removeChild(row);
				}
			}	
		}
	}
};

//initialization
IMCDAO.unserializeAndParse();
Index.init();