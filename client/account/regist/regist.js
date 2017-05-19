var regist = function ($scope, $http,$state) {
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
            // 注册成功后跳转到登录界面
            console.log(response.data);
            debugger;
            $state.go('content')
            //$scope.dab = response.data;
        }, function errorCallback(response) {
            // 请求失败执行代码
        });
        }
    }

}
export default regist;