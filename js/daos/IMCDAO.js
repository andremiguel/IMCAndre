/* JavaScript Document */

var IMCDAO = {

	DB_KEY: "imcs",
	NEW: 1,
	UPDATE: 2,

	list: [], 

	save: function(imc, tableController) {
		var list  = IMCDAO.list,
		    index = IMCDAO.getIndex(imc);
		
		if(index > -1) {
			list[index] = imc;
			return IMCDAO.UPDATE;
		}
		else {
			list.push(imc);
			if(tableController) {
				tableController.addItem(imc);
			}
		}
		
		IMCDAO.serializeAndSave();

		return IMCDAO.NEW;
	},

	retrieve: function() {
		var list = IMCDAO.list;
		if(list && list.length > 0) {
			return list;
		}
		return null;
	},

	get: function(resultimc) {
		var list  = IMCDAO.list,
		    index = IMCDAO.getIndex({'resultimc': resultimc});

		if (index > -1) {
			var imc = list[index];
			return imc;
		}

		return null;
	},

	getIndex: function(imc) {
		var list = IMCDAO.list,
		    item = {};

		for (var i = 0; i < list.length; i++) {
			item = list[i];
			if(item.resultimc == imc.resultimc) {
				return i;
			}
		}

		return -1;
	},

	delete: function(resultimc) {
		var list  = IMCDAO.list,
		    index = IMCDAO.getIndex({'resultimc': resultimc});

		if (index > -1) {
			//https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/splice
			list.splice(index, 1);
			return true;
		}

		return false;
	},

	serializeAndSave: function() {
		var list = IMCDAO.list;
		if(list && list.length > 0) {
			var json = JSON.stringify(IMCDAO.list);
			window.localStorage.setItem(IMCDAO.DB_KEY, json);
		}
	},

	unserializeAndParse: function() {
		var json = window.localStorage.getItem(IMCDAO.DB_KEY);
		if(json) {
			IMCDAO.list = JSON.parse(json);
		}
		else {
			IMCDAO.list = [];
		}
	}

};
