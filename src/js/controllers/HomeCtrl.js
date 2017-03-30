import TodoActions from '../actions'

export default class HomeCtrl {
  constructor ($ngRedux) {
    this.title = 'Home page'
    this.todo = ''
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this)
  }

  submitTodo () {
    this.addTodo(this.todo);
    this.todo = ''
  }

  $onDestroy () {
    this.unsubscribe()
  }

  mapStateToThis (state) {
    return {
      todos: state.todos
    }
  }
}
HomeCtrl.$inject = ['$ngRedux']
