var myForm = function($scope, $http) {
    $scope.ddsubmit = function() {
        $http({
            method: 'POST',
            data: { name: $scope.name, url: 'ddddd' },
            url: '/thing'
        }).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response.data);
            //$scope.dab = response.data;
        }, function errorCallback(response) {
            // 请求失败执行代码
        });
    }

};

export default myForm;