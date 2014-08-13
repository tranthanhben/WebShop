mapp.controller('homeController', function($scope){
	$scope.message = "This is Home page";
});
mapp.directive('footerNav', function(){
	function link(scope, element, attrs) {

  	}
  	return {
	    restrict: 'E',
	    templateUrl: 'templates/com/footer.tpl.html',
	    link: link,
	    scope: true
  	};
})