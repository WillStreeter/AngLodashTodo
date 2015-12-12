# AngLodashTodo
Interview Question asking me to use Lodash, $cacheFactory  to create simple todo list

STEPS

1.  npm install (did not create karma test ...all we really want is the npm install of http-server)
2.  bower_components directory does not build then run -> bower install
3.   -> http-server -a localhost -p 8000
4.  finally past http://127.0.0.1:8000/app/ in a browser

Code From Fiddler
javascript
```javascript
/**
 * Exercise - 30 minutes
 * Prefer functionnal over iterative approach
 *
 * PART 1 - Features implementation
 * PART 2 - Extra credit
 */

function TodoCtrl($scope) {
  $scope.todos = [
    { text: 'learn angular'       , done: true  },
    { text: 'build an angular app', done: false }
  ];

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
    
  $scope.addTodo = function() {
  };


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
  };
 
}


```

HTML
```html
<div ng-app>
  <h2>Todo</h2>
  <div ng-controller="TodoCtrl">
    <span>{{remaining()}} of {{todos.length}} remaining</span> | <a href="">archive</a>
    <ul class="unstyled">
      <li ng-repeat="todo in todos">
        <input type="checkbox" ng-model="todo.done">
        <span class="done-{{todo.done}}">{{todo.text}}</span>
      </li>
    </ul>
    <form>
      <input type="text" size="30" placeholder="Add new todo here">
      <input class="btn-primary" type="submit" value="add">
    </form>
  </div>
</div>
````

CSS
````CSS
.done-true {
  text-decoration: line-through;
  color: grey;
}

````

HTML in Browser 
nline-style: 
![alt text](https://raw.githubusercontent.com/WillStreeter/AngLodashTodo/master/html-in-browser.png)

