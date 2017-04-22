import _ from 'lodash';
import router from './js/router';
import accountRouter from './account/account';
import myCtrl from './js/myCtrl';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import login from './account/login/login';
import regist from './account/regist/regist';
import myForm from './admin/new/myForm';
// import ace from '../node_modules/angular-ui-ace/src/ui-ace';
// console.log(ace);

var app = angular.module('myApp', [uirouter]);

app.config(router);
app.config(accountRouter);
app.controller('myCtrl', myCtrl);
app.controller('login', login);
app.controller('regist', regist);
app.controller('myForm', myForm);