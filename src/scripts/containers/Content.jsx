import React from "react";
import PropTypes from "prop-types";
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

Content.propTypes = {
    todo: PropTypes.object,
    dispatch: PropTypes.func
}

function mapStateToProps (state) {
    return {
        content: state.content,
        todo: state.todo
    }
  }

export default connect(mapStateToProps)(Content);