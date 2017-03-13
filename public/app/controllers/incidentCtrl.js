angular.module('incidentControllers',[])

.controller('createCtrl',function($scope){
    
    $scope.sev = ["Critical","High","Moderate","Low"];
    var app = this;
    this.create = function(data){
        console.log('form submitted')
        console.log(this.data);
        console.log(app.data.name)
        app.name = "Hi "+app.data.name+" You have raised a request";
    }
});