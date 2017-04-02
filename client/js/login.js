var login = function($scope, $http) {
    $scope.login = function() {
        $http({
            method: 'POST',
            data: { name: $scope.name, password: $scope.password },
            url: '/userlogin'
        }).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response.data);
            //$scope.dab = response.data;
        }, function errorCallback(response) {
            // 请求失败执行代码
        });
    }
};



export default login;