/**
* app Module
*
* Description: Main module for the app
 */
var app;

app = angular.module('app', []);

app.controller('MainCtrl', function($scope, $filter, $http) {
  $scope.card1 = {
    name: 'Output',
    sub1: '# Incidents',
    subValue1: '82',
    sub2: '# Test buys',
    subValue2: '82'
  };
  $scope.card2 = {
    name: 'Recovery',
    sub1: 'Open',
    subValue1: '340000',
    sub2: 'Closed',
    subValue2: '40000'
  };
  $scope.card3 = {
    name: 'Prevention',
    sub1: 'Open',
    subValue1: '832000',
    sub2: 'Closed',
    subValue2: '2000'
  };
  $scope.pieData = [
    {
      name: 'Microsoft Internet Explorer',
      y: 56.33
    },
    {
      name: 'Chrome',
      y: 24.03
    },
    {
      name: 'Firefox',
      y: 10.38
    },
    {
      name: 'Safari',
      y: 4.77
    },
    {
      name: 'Opera',
      y: 0.91
    },
    {
      name: 'Proprietary or Undetectable',
      y: 0.2
    }
  ];
  $scope.chartOptions = [299, 715, 1064, 1292, 1440, 1760, 1356, 1485, 2164, 1941, 956, 544];
  $scope.mapData = [];
  $scope.datos = [];
  $scope.limit = 4;
  $http.get('data/mapData').success(function(data) {
    $scope.mapData = data;
    console.log('charged');
    console.log(data);
  }).error(function(data) {
    console.log('ERROR');
  });
  $http.get('data/brands').success(function(data) {
    $scope.datos = data;
  }).error(function(err) {
    console.log('ERROR');
  });
  $scope.showMore = function() {
    $scope.limit = 50;
  };
  $scope.showLess = function() {
    $scope.limit = 4;
  };
});

// @TODO: Create function to filter currency
//@TODO: Create a Service or function to import data from jsons 
//@TODO: CHECK SHOW MORE AND SHOW LESS TABLES it doesnt work well