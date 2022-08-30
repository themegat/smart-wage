import { Component, ReactNode } from "react";
import Icon from "../../icons/icons";
import './Navbar.scss';
import UserView from "./user-view/UserView";

export default class Navbar extends Component {
    render(): ReactNode {
        return (
            <div className="navbar">
                <div className="menu">
                    <Icon name="menu-2" size={30} stroke={2}></Icon>
                    <h4>Smartwage</h4>
                </div>
                <UserView userId={2} />
            </div>
        )
    }
}