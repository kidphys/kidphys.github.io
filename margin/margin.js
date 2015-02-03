var marginApp = angular.module('MarginApp', []);

marginApp.controller('MarginAppController', function ($scope) {
    $scope.account = {};
    $scope.account.stockBook = [
        {'symbol': 'VND', 'amount': 1000000},
        {'symbol': 'SSI', 'amount': 2000000},
    ];

    $scope.loanCatalog = [
        {
            'name': 'mr',
            'loans': [
                {'symbol': 'VND', 'rate': 0.5},
                {'symbol': 'SSI', 'rate': 0.6},
            ]
        },
        {
            'name': 'df',
            'loans': [
                {'symbol': 'ACB', 'rate': 0.3},
                {'symbol': 'SSI', 'rate': 0.5},
            ]
        },
    ];

    $scope.removeStock = function(stock){
        var stockBook = $scope.account.stockBook;
        index = stockBook.indexOf(stock);
        if (index != -1){
            stockBook.splice(index, 1);
        }
    }
});