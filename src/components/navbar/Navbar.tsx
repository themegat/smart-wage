import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import Icon from "../../icons/icons";
import './Navbar.scss';
import UserView from "./user-view/UserView";

export default class Navbar extends Component {
    render(): ReactNode {
        return (
            <div className="navbar">
                <div className="menu">
                    <Icon name="menu-2" size={30} stroke={2}></Icon>
                    <Link to="/">
                        <h4>Smartwage</h4>
                    </Link>
                </div>
                <UserView userId={2} />
            </div>
        )
    }
}