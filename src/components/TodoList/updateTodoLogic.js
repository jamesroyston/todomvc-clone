// class method
class placeHolderClass {
    update(id) {
        let todos = [...this.state.todos];
        todos = todos.filter((todo) => {
            if (todo.edit === false) {
                return [
                    <InputForm  
    				handleSubmit={this.handleSubmit}
    				handleChange={this.handleChange} />,
                    ...todos];
                }
            });
            this.setState({
                todos: [...todos]
            });
    }
}

// function 
const updateTodo = (id) => {
    let todos = [...this.state.todos];
    todos = todos.filter((todo) => {
        if (todo.edit === false) {
            return [
                <InputForm  
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange} />,
                ...todos];
        }
    });
    this.setState({
        todos: [...todos]
    });
}