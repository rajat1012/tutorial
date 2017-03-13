angular.module('userApp', ['appRoutes', 'userControllers', 'incidentControllers','userServices', 'ngAnimate', 'mainController', 'authServices', 'emailController', 'managementController'])

.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});
