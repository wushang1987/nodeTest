var regist = function ($scope, $http) {
    $scope.registSubmit = function () {
        if ($scope.confirm !== $scope.password) {
            $("#modal-id").modal('show');
        }else{
        $http({
            method: 'POST',
            data: {
                name: $scope.name,
                password: $scope.password
            },
            url: '/user'
        }).then(function successCallback(response) {
            // 请求成功执行代码
            console.log(response.data);
            //$scope.dab = response.data;
        }, function errorCallback(response) {
            // 请求失败执行代码
        });
        }
    }

}
export default regist;