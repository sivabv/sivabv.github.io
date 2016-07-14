

        var app = angular.module("myShoppingList", ['ui.bootstrap','ngRoute']);
        app.controller("myCtrl", function($scope) {
            $scope.products = ["Milk", "Bread", "Cheese"];
          	$scope.formData = {};
            $scope.addItem = function() {
                $scope.errortext = "";
                   	console.log($scope.formData.addMe);
                if (!$scope.formData.addMe) {
                    return;
                }
                if ($scope.products.indexOf($scope.formData.addMe) == -1) {
                    $scope.products.push($scope.formData.addMe);
                } else {
                    $scope.errortext = "The item is already in your shopping list.";
                }
            };
            $scope.removeItem = function(x) {
                $scope.errortext = "";
                $scope.products.splice(x, 1);
            };
            $scope.services = [{
                name: 'Web Development',
                price: 300,
                active: true
            }, {
                name: 'Design',
                price: 400,
                active: false
            }, {
                name: 'Integration',
                price: 250,
                active: false
            }, {
                name: 'Training',
                price: 220,
                active: false
            }];

            $scope.toggleActive = function(s) {
                s.active = !s.active;
            };
    $scope.head = [
        {head: "Name", column: "name"},
        {head: "Surname", column: "surname"},
        {head: "City", column: "city"}];
    $scope.body = [{
       "name": "Hans",
        "surname": "Mueller",
        "city": "Leipzig"
    }, {
        "name": "Dieter",
        "surname": "Zumpe",
        "city": "Berlin"
    }, {
        "name": "Bernd",
        "surname": "Danau",
       "city": "Muenchen"
    }];
    
    $scope.sort = {
        column: 'name',
        descending: false
    };

    $scope.selectedCls = function(column) {
        return column == $scope.sort.column && 'sort-' + $scope.sort.descending;
    };
    
    $scope.changeSorting = function(column) {
        var sort = $scope.sort;
        if (sort.column == column) {
            sort.descending = !sort.descending;
        } else {
            sort.column = column;
            sort.descending = false;
        }
    };
            // Helper method for calculating the total price

            $scope.total = function() {

                var total = 0;

                // Use the angular forEach helper method to
                // loop through the services array:

                angular.forEach($scope.services, function(s) {
                    if (s.active) {
                        total += s.price;
                    }
                });

                return total;
            };
        });

        function OrderFormController($scope) {

        }


        app.config(function($routeProvider) {
		    $routeProvider
		    .when("/", {
		        templateUrl : "main.htm"
		    })
		    .when("/red", {
		        templateUrl : "red.htm"
		    })
		    .when("/green", {
		        templateUrl : "green.htm"
		    })
		    .when("/blue", {
		        templateUrl : "blue.htm"
		    });
		});

