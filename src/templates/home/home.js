mapp.controller('homeController', function($scope){
	$scope.message = "This is Home page";
});
mapp.directive('topNav', function(){
  function link(scope, element, attrs) {

    }
    return {
      restrict: 'E',
      templateUrl: 'templates/com/header.tpl.html',
      link: link,
      scope: true
    };
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
