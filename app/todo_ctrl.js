(function(){
'use strict';

angular.module('appTodo', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'TodoCtrl'
        });
    }])

    .controller('TodoCtrl', ['$scope','$cacheFactory', function($scope,$cacheFactory) {
        $scope.todos = [
            { text: 'learn angular'       , done: true  },
            { text: 'build an angular app', done: false }
        ];

        $scope.keys = [];
        $scope.cache = $cacheFactory('sungevity');

        $scope.remaining = function() {
            return _.reduce($scope.todos, function(sum, todo){
                return todo.done ? 0 : 1;
            }, 0);
        };
        /**
         * Implement "add todo" functionality
         *
         * PART 1
         *
         * Acceptance Criteria:
         *   - Add todo to list of existing todos
         *   - Set required properties of todo
         *
         * PART 2
         *
         * Acceptance Criteria:
         *   - Enforce unique
         *   - Warn user of unique constraint
         */

        $scope.addTodo = function(inputVal) {
            var result  = _.find($scope.todos, _.matchesProperty('text', inputVal.todo));
            if(result===undefined){
                $scope.todos.push({text:inputVal.todo, done:false} );
            }
        };



        $scope.undo = function(){
            var ogtodos = [];
            angular.forEach($scope.keys , function(item) {
                ogtodos.push({text:item, done:$scope.cache.get(item).value})
            });
            $scope.todos = ogtodos;
        }
        /**
         * Implement "archive" functionality
         *
         * PART 1
         *
         * Acceptance Criteria:
         *   - Remove done todos for todos list
         *   - View should update
         *
         * PART 2
         *
         * Acceptance Criteria:
         *   - Store tasks in $cacheFactory
         *   - Implement "undo"
         */

        $scope.archive = function() {

            angular.forEach($scope.todos , function(item){
                $scope.keys.push(item.text);
                $scope.cache.put(item.text, item.done );
            });
            $scope.todos  =_.filter($scope.todos, function(td) {
                return !td.done;
            });
        }
    }]);
})();