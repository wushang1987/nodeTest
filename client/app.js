import _ from 'lodash';
import router from './js/router';
import myCtrl from './js/myCtrl';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import login from './js/login';
import regist from './js/regist';
import myForm from './js/myForm';

var app = angular.module('myApp', [uirouter]);




app.config(router);
app.controller('myCtrl', myCtrl);
app.controller('login', login);
app.controller('regist', regist);
app.controller('myForm', myForm);