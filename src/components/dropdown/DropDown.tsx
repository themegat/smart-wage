import { Component, ReactNode } from "react";
import Icon from "../../icons/icons";
import './DropDown.scss';

export default class DropDown extends Component<{ onSelect: any }, { selectedValue: number, toggle: boolean, items: any[] }>{

    constructor(props: any) {
        super(props);
        this.state = {
            selectedValue: 5,
            toggle: false,
            items: [5, 10, 20, 50]
        };
        this.props.onSelect(5);
    }

    render(): ReactNode {
        const { toggle, items, selectedValue } = this.state;
        const optionsTemplate = <div className="options">
            {items.map(item => {
                return <div className="option" onClick={
                    () => {
                        this.setState({
                            selectedValue: item,
                            toggle: this.state.toggle ? false : true
                        })
                        this.props.onSelect(item);
                    }
                }>{item}</div>
            })}
        </div>;
        let options = toggle ? optionsTemplate : '';

        const selected = <div onClick={
            () => {
                this.setState({
                    toggle: this.state.toggle ? false : true
                })
            }
        } className="selected-value"> {selectedValue}
            <Icon name={toggle ? "chevron-up" : "chevron-down"} size={15} stroke={2} /></div>;
        return (
            <div className="dropdown">
                {selected}
                {options}

            </div>
        )
    }
}