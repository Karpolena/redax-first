import React from "react";
import { connect } from "react-redux";
import {addToo, removeTodo} from "./../actions/Todo";

const Content = (props) => {

    let list = props.todo.list;
    const clickHandler = () => {
        props.dispatch(addToo("new todo " + list.length));
    };

    const removeTodoHandler = (text) => {
        props.dispatch(removeTodo(text));
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            {
                list.map((itm, index) => {
                    return (
                        <div key={index} 
                            onClick={removeTodoHandler.bind(this, itm)}>
                            {itm}
                        </div>
                    )
                })
            }
        </div>
    )
}

function mapStateToProps (state) {
    return {
        content: state.content,
        todo: state.todo
    }
  }

export default connect(mapStateToProps)(Content);