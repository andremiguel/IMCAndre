function IMCController($scope) {
	$scope.result = 0.0;
	$scope.info = "aviso";
	$scope.description="";
	$scope.calculate = function(){
		if($scope.peso !== '' && $scope.altura !== ''){
			$scope.result = $scope.peso / ($scope.altura * $scope.altura);
		}
	$scope.sexo = $scope.sexo.replace(/m/gi, 1);
	$scope.sexo = $scope.sexo.replace(/f/gi, 2);
	var imc = $scope.result;

	if ($scope.sexo == 1){
		if(imc < 20.7 && imc > 17.5){
			$scope.info = "voce esta muito magro, CUIDADO com a alimentação";
			imgimc.src="css/imagem/magro.jpg";}
		else if(imc > 26.4 && imc < 27.8 ){
			$scope.info = "voce esta um pouco acima do peso, faça exercicios";
			imgimc.src="css/imagem/gordo.jpg";}
		else if(imc > 27.8 && imc < 31.1){
			$scope.info = "voce esta muito acima do peso, CUIDADO com a obesidade";
			imgimc.src="css/imagem/gordao.jpg";}
		else if(imc > 31.1) {
			$scope.info = "voce esta OBESO, procure um especialista";
			imgimc.src="css/imagem/gordao.jpg";}
		else if(imc >= 20.7 && imc < 26.4){
			$scope.info = "voce esta no peso ideal, parabens";
			imgimc.src="css/imagem/esbelto.jpg";}
		else if(imc < 17.5){
			$scope.info = "voce esta com ANOREXIA, procure um especialista";
			imgimc.src="css/imagem/branco.jpg";}
	}	

	else {
		if(imc < 19.1 && imc > 17.5){
			$scope.info = "voce esta muito magra, CUIDADO com a alimentação";
			imgimc.src="css/imagem/magra.jpg";}
		else if(imc > 25.8 && imc < 27.3 ){
			$scope.info = "voce esta um pouco acima do peso, faça exercicios";
			imgimc.src="css/imagem/gorda.jpg";}
		else if(imc > 27.3 && imc < 32.3){
			$scope.info = "voce esta muito acima do peso, CUIDADO com a obesidade";
			imgimc.src="css/imagem/gorda.jpg";}
		else if(imc > 32.3) {
			$scope.info = "voce esta OBESA, procure um especialista";
			imgimc.src="css/imagem/gorda.jpg";}
		else if(imc >= 19.1 && imc < 25.8){
			$scope.info = "voce esta no peso ideal, parabens";
			imgimc.src="css/imagem/esbelta.jpg";}
		else if(imc < 17.5){
			$scope.info = "voce esta com ANOREXIA, procure um especialista";
			imgimc.src="css/imagem/branco.jpg";}
	}
	};
}