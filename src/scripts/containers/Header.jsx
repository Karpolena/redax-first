import React from "react";
import { connect } from "react-redux";

const Header = (props) => {

    return (
        <div>
            header
            
        </div>
    )
}

export default connect(state => {
    return {
        todo: state.todo
    }
})(Header);