import { Component, ReactNode } from 'react';
import Icon from '../../../icons/icons';
import { User } from '../../../models/user';
import Api from '../../../service/Api';
import './UserView.scss';

export default class UserView extends Component<{ userId: number }, { isLoading: boolean, user?: User }>{
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            user: undefined
        }
    }

    render(): ReactNode {
        const { isLoading, user } = this.state;
        if (isLoading) {
            return (
                <div>
                    <div className="placeholder">Loading ...</div>
                </div>
            )
        } else {
            return (
                <div className="user-content">
                    <img className='logo' src={user?.companyLogo} alt="Company Logo" />
                    <div className='details'>
                        <p>{user?.firstName} {user?.lastName}</p>
                        <p>{user?.companyName}</p>
                    </div>
                    <div className='controls'>
                        <Icon name='chevron-up' size={10}></Icon>
                        <Icon name='chevron-down' size={10}></Icon>
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        const userId = this.props.userId;
        Api.user(userId).then(user => {
            this.setState({
                user,
                isLoading: false
            })
        })
    }
}