import React, {Component} from 'react';


const BaseForm = (Comp)=> {
    return class WrapperComp extends Component {
        state = {};

        handleChange = (key, val)=>{
            this.setState({
                [key]:val
            });
        };

        render(){
            // return new wrapped component with handleChange method
            return (
                <Comp
                    handleChange = {this.handleChange}
                    state = {this.state}
                    {...this.props}
                />
            )
        }
    }
};


export default BaseForm;