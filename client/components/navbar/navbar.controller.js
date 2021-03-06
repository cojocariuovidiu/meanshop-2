'use strict';

angular.module('meanshopApp')
  .controller('NavbarCtrl', function ($scope, Auth, $rootScope, $state, $window, $timeout) {
    $scope.menu = [{
      'title': 'Home',
      'state': 'main'
    }, {
      'title': 'Products',
      'state': 'products'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    /**
     * Broadcast an event when typing anything in search bar
     */
    $scope.search = function() {
      $rootScope.$broadcast('search:term', $scope.searchTerm);
    }

    /**
     * Redirects to /products page as soon as user focuses on the
     * search bar
     */
    $scope.redirect = function () {
      $state.go('products');
      // timeout makes sure that it is invoked after any other event has been triggered.
      $timeout(function () {
        // focus on search box
        var searchBox = $window.document.getElementById('searchBox');
        if(searchBox) {
          searchBox.focus(); 
        }
      });
    };

  });
