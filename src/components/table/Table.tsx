import { stat } from "fs";
import { Component, ReactNode } from "react";
import Icon from "../../icons/icons";
import DropDown from "../dropdown/DropDown";
import './Table.scss';

class Table extends Component<{ headers: string[], data?: string[][] },
    { data: any[], filteredData: any[], currentPage: number, totalPages: number, pageSize: number }> {
    onFilterChange = (value: number) => {
        const data = this.paginate(this.state.data, value, 1);
        this.setState({
            filteredData: data,
            totalPages: Math.ceil(this.state.data.length / value),
            currentPage: 1,
            pageSize: value
        })
    }

    paginate(array: any[], page_size: number, page_number: number) {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    pageNext() {
        const pageSize = this.state.pageSize;
        const page = this.state.currentPage < this.state.totalPages ? this.state.currentPage + 1 :
            this.state.currentPage;
        const data = this.paginate(this.state.data, pageSize, page);
        this.setState({
            filteredData: data,
            currentPage: page
        });

    }

    constructor(props: any) {
        super(props);
        this.state = {
            data: props.data,
            filteredData: [],
            currentPage: 1,
            totalPages: 1,
            pageSize: 5
        }
    }

    render(): ReactNode {
        const headers = this.props.headers;
        const { filteredData } = this.state;
        const data = filteredData;

        return (
            <div className="table-view">
                <table>
                    <thead>
                        <tr>
                            {headers.map(value => <td>{value}</td>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <tr>
                                {item.map((value: string) => <td>{value}</td>)}
                            </tr>)
                        }

                    </tbody>
                </table>

                <div className="footer">
                    <div className="pagination">
                        <div className="filter">
                            <label>Rows per page:</label>
                            <DropDown onSelect={this.onFilterChange} />
                        </div>
                        <div className="page-info">
                            {this.state.currentPage} of {this.state.totalPages}
                        </div>
                        <div className="controls">
                            <div onClick={() => {
                                const pageSize = this.state.pageSize;
                                const page = this.state.currentPage > 1 ? this.state.currentPage - 1 :
                                    this.state.currentPage;
                                const data = this.paginate(this.state.data, pageSize, page);
                                this.setState({
                                    filteredData: data,
                                    currentPage: page
                                });

                            }}>
                                <Icon name="chevron-left" size={16} stroke={2} />
                            </div>
                            <div onClick={() => {
                                const pageSize = this.state.pageSize;
                                const page = this.state.currentPage < this.state.totalPages ? this.state.currentPage + 1 :
                                    this.state.currentPage;
                                const data = this.paginate(this.state.data, pageSize, page);
                                this.setState({
                                    filteredData: data,
                                    currentPage: page
                                });

                            }}>
                                <Icon name="chevron-right" size={16} stroke={2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;