import React, { Component } from "react";
import Icon from "../../icons/icons";
import './Button.scss';

export default class Button extends Component<{ value?: string, icon?: string, click?: React.MouseEventHandler<HTMLButtonElement> }> {
  render() {
    const value = this.props.value;
    const iconName = this.props.icon === undefined ? "" : this.props.icon;
    const iconTemplate = <Icon name={iconName} size={20} stroke={2} />
    const icon = iconName === "" ? iconName : iconTemplate;

    return (
      <button
        className="btn"
        onClick={this.props.click}
      >
        {value}
        {icon}
      </button>
    );
  }
}
