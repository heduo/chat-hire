import {Component} from 'react';
import axiosInstance from '../../axiosInstance';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {loadData} from "../../redux/user.redux";

@withRouter
@connect(
    null,
    {loadData}
)
class AuthRoute extends Component {
    componentDidMount(){
        const publicList = ['/login', '/register'];
        const pathname = this.props.location.pathname;
        // if current path is login or register page, then that's fine
        if (publicList.indexOf(pathname)>-1){
            return null
        }

        // console.log('after public list');
        // get user info
        axiosInstance.get('/user/info')
            .then( res => {
                if (res.status === 200) {
                    if (res.data.code ===0) {
                        // has user info
                        this.props.loadData(res.data.data)
                    }else{
                        // redirect to login page
                        this.props.history.push('/login');
                    }
                }
                //console.log(res)
                }
            )
    }

    render(){
        return null;
    }
}

export default AuthRoute;