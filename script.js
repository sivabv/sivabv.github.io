var app = angular.module("learningApp", ['ui.bootstrap', 'ngRoute']);
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
    $scope.head = [{
        head: "Name",
        column: "name"
    }, {
        head: "Surname",
        column: "surname"
    }, {
        head: "City",
        column: "city"
    }];
    $scope.body = [{
	        "name": "Ians",
	        "surname": "Kueller",
	        "city": "Zeipzig"
	    }, {
	        "name": "Dieter",
	        "surname": "Lumpe",
	        "city": "Yerlin"
	    }, {
	        "name": "Bans",
	        "surname": "Mueller",
	        "city": "Xeipzig"
	    }, {
	        "name": "Aieter",
	        "surname": "Numpe",
	        "city": "Werlin"
	    }, {
	        "name": "Cieter",
	        "surname": "Oumpe",
	        "city": "Verlin"
	    }, {
	        "name": "Eans",
	        "surname": "Pueller",
	        "city": "Ueipzig"
	    }, {
	        "name": "Fieter",
	        "surname": "Qumpe",
	        "city": "Terlin"
	    }, {
	        "name": "Gernd",
	        "surname": "Ranau",
	        "city": "Suenchen"
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
      $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1",
      open: false
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2",
      open: false
    }
  ];
  
  $scope.addNew = function() {
    $scope.groups.push({
      title: "New One Created",
      content: "Dynamically added new one",
      open: false
    });
  };
});

app.config(function($routeProvider) {
    $routeProvider
        .when("/Main", {
            templateUrl: "main.htm"
        })
        .when("/Angular-Sorting", {
            templateUrl: "Angular-Sorting.htm"
        })
        .when("/To-Do-list", {
            templateUrl: "To-Do-list.htm"
        })
        .when("/My-Shopping-List", {
            templateUrl: "My-Shopping-List.htm"
        });
});