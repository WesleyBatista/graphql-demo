app = angular.module('app', [
	'ngTouch',
	'ui.grid',
	]);

app.controller("MainController", ['$scope', function($scope){


	$scope.gridConfig = {
		paginationPageSizes: [2, 3],
		paginationPageSize: 2,
	    enableGridMenu: true,
	    fastWatch: true,
	    enableSelectAll: true,
		enableColumnResizing: true,
		enableFiltering: true,
		enableGridMenu: true,
		showGridFooter: true,
		showColumnFooter: true,
		columnDefs: [
			  { field: 'key', name: '~ Key ~', visible: true },
			  { field: 'name', name: '~ Name ~', enableCellEdit: true },
			  { field: 'date', name: '~ Date ~', cellFilter: 'date:"y-m-d"' },
			]
	};

	$scope.items = [
		{
			"key": "some_key1",
			"name": "some_value1",
			"date": "2016-08-11T00:08:12",
		},
		{
			"key": "some_key2",
			"name": "some_value2",
			"date": "2016-08-12T00:08:22",
		},
		{
			"key": "some_key3",
			"name": "some_value3",
			"date": "2016-08-13T00:08:32",
		},
		{
			"key": "some_key4",
			"name": "some_value4",
			"date": "2016-08-14T00:08:42",
		},
		{
			"key": "some_key5",
			"name": "some_value5",
			"date": "2016-08-15T00:08:52",
		},
		{
			"key": "some_key6",
			"name": "some_value6",
			"date": "2016-08-16T00:08:62",
		},
		{
			"key": "some_key7",
			"name": "some_value7",
			"date": "2016-08-17T00:08:72",
		},
		{
			"key": "some_key8",
			"name": "some_value8",
			"date": "2016-08-18T00:08:82",
		},
	];

	$scope.gridConfig.data = $scope.items;

}])
