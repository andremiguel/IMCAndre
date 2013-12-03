function Limpar($scope) {
	$scope.limpar = function(){
    	localStorage.clear();
    	alert("Tabela Limpa");
    	window.location.reload() 
	}
}