class List {
    constructor(){
        this.list = [];
    }

    add(data){
        this.list.push(data);
        console.log(this.list);
    }
}


class TodoList extends List{
    constructor(){
       super();

       this.user = 'John';
    }
}

var myTodoList = new TodoList();

document.querySelector('#addButton').onclick = function() {
    myTodoList.add('Make coffe');
}