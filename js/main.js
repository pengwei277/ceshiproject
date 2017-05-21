/**
 * Created by beyond on 2017/2/21.
 */
var app =  angular.module('myApp',[])
    app.controller('SignUpController',function ($scope)
    {
        $scope.userdata = {};


        $scope.submitForm = function ()
        {
        	console.log($scope.userdata);
        	if ($scope.submitform)
        		alert('请检查您的信息');
        	else
        		alert('提交成功！');
        }

    });