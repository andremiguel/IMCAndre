/* JavaScript Document */

var TableController = {

	table: null,

	setTable: function(table) {
		this.table = table;
	},

	addItem: function(item, editCallback, deleteCallback) {
		if(item) {
			var tbody = TableController.table.tBodies[0],
			    row = TableController.createNewRow(),
			    index = 0;
			
			row.cells[index++].innerHTML = item.name;
			row.cells[index++].innerHTML = item.resultimc;
			TableController.createActions(row.cells[index++], item, editCallback, deleteCallback);

			tbody.appendChild(row);
		}
	},

	addList: function(list, editCallback, deleteCallback) {
		if(list && list.length > 0) {
			for (var i = 0, leng = list.length; i < leng; i++) {
				TableController.addItem(list[i], editCallback, deleteCallback);
			}
		}
	},

	clearList: function() {
		TableController.table.tBodies[0].innerHTML = "";
	},
	
	createNewRow: function() {
		var row = document.createElement('tr');
		row.appendChild(document.createElement('td'));
		row.appendChild(document.createElement('td'));
		row.appendChild(document.createElement('td'));
		return row;
	},

	createActions: function(cell, item, editCallback, deleteCallback) {
		var editElement = document.createElement("span"),
		    deleteElement = document.createElement("span");

		editElement.innerHTML = "Edit ";
		editElement.setAttribute("data-resultimc", item.resultimc);
		editElement.className = "btn btn-success";

		deleteElement.innerHTML = "Delete";
		deleteElement.setAttribute("data-resultimc", item.resultimc);
		deleteElement.className = "btn btn-danger";

		if(editCallback) {
			editElement.onclick = function(){
				var resultimc = editElement.getAttribute('data-resultimc');
				editCallback(resultimc);
				window.location.replace('#name');
			};
		}

		if(deleteCallback) {
			deleteElement.onclick = function(){
				var resultimc = deleteElement.getAttribute('data-resultimc');
				deleteCallback(resultimc, deleteElement);
			};
		}

		cell.appendChild(editElement);
		cell.appendChild(deleteElement);
	}
};
