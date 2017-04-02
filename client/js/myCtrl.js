var controller = function($scope, $http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $http({
        method: 'GET',
        url: '/thing'
    }).then(function successCallback(response) {
        // 请求成功执行代码
        console.log(response.data);
        $scope.dab = response.data;
    }, function errorCallback(response) {
        // 请求失败执行代码
    });
}


export default controller;