import React, { Component } from 'react';
import './App.css';
import {ShowTodo} from './viewTodo';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: [],
      
      taskText: '',
      descText: '',
      isUpdate: false,
      foo: 'Header Text',
      id:''
    }
    setTimeout(() => {
      this.setState({foo: 'Text Chnaged Foo'})
    }, 600)
  }

  add = (ev) => {
    const todo = this.state.todo;
    todo.push({
      task: this.state.taskText,
      desc: this.state.descText
    });
    console.log("before add")
    this.setState({ 
      todo,
      taskText: '',
      descText: ''
    }, function(){
      console.log("Adding done!");
      alert("Item has been added successfully!")
    })
    console.log("after add")
    console.log(this.state.todo.length);
    ev.preventDefault();
  }

  update = (ev) => {
    console.log(this.state.todo[this.state.id]);
    var newTodo = this.state.todo;
    var a = this.state.id;

    
    newTodo[a].task = this.state.taskText;
    newTodo[a].desc = this.state.descText;
    this.state.todo.map((i)=>(
      console.log(i)
    ));
      
    }

    
    
    //var newTodo[a] = 
    //this.setState({todo[a] :

    //});
  
  onChangeHandler = (ev) => {
    this.setState(
      {[ev.target.name]: ev.target.value}, () => {
        console.log('this state', this.state)
      })
    
  }

  onDeleteHandler = (id) => {
     console.log('delete clicked', id);
     const todo = this.state.todo;
     todo.splice(id, 1);
     this.setState({todo});
  }

  onEditHandler = (id) => {               
    console.log('edit clicked', id)
    this.setState({isUpdate: true,
                   id : id,
                   taskText:this.state.todo[id].task,
                   descText:this.state.todo[id].desc,
                  });

  }

  foo = () => {
      return (<h1>Foo</h1>);
  }

  bar = () => (<h1>bar</h1>)

  toDoForm = () => {
    return ( <form>
    <input type="text" name="taskText" value={this.state.taskText} onChange={this.onChangeHandler} />
    <input type="text" name="descText" value={this.state.descText} onChange={this.onChangeHandler} />
    {
      (this.state.isUpdate) ? 
            (<button onClick={this.update}>
              Update
            </button>) 
          : 
       (<button onClick={this.add}>
       Add Todo
      </button>)
    
    }
      
  </form>)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }


  render() {
    console.log('RERENDER HTML')
    return (
      <div className="App">
       
        <header className="App-header">
         
          {this.toDoForm()}
    <table width="300" border="1">
          {
            this.state.todo.map((i, index) => (
              <ShowTodo key={index} item={i} itemIndex={index} delete={this.onDeleteHandler} edit={this.onEditHandler}/>
            ))
          }
          </table>
          
        </header>
        
      </div>
    );
  }
}

export default App;




// src
//   assets 
//       images
//   components
//     App 
//        App.css
//        App.js
//        App.test.js
//     SecondCom
//   index.js
//   index.css
















