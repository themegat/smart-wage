import { Component, ReactNode } from "react";
import Icon from "../../icons/icons";
import './Navbar.scss';

export default class Navbar extends Component {
    render(): ReactNode {
        return (
            <div className="navbar">
                <div className="menu">
                    <Icon name="menu-2" size={30} stroke={2}></Icon>
                    <h4>Smartwage</h4>
                </div>
            </div>
        )
    }
}