var controller = function($scope, $http, $state) {
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
        if(response.status === 404){
            console.log('服务器没有连接');
        }
        
        // 请求失败执行代码
    });

    $scope.search = function() {
        $state.go('content.search')
    }
}


export default controller;