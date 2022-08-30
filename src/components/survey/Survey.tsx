import { Component, ReactNode } from "react";
import { Survey } from "../../models/survey";
import Api from "../../service/Api";
import Button from "../button/Button";
import Table from "../table/Table";
import './Survey.scss';

export class Surveys extends Component<{}, { isLoading: boolean, apiData: any[], tableData: any[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            apiData: [],
            tableData: []
        }
    }

    render(): ReactNode {
        const headers = ["Survey Name", "Created By", "Responses", "Launch Date", "Close Date", "Status", ""]
        const { isLoading, tableData } = this.state;
        if (isLoading) {
            return (
                <div>Loading ...</div>
            );
        } else {
            return (
                <Table headers={headers} data={tableData}></Table>
            )
        }
    }


    componentDidMount() {
        Api.surveys().then((data: Survey[]) => {
            const apiData = data.map(item => {
                item.responses = '134 / 500';
                return item;
            });

            const tableData = apiData.map(item => {
                const launchDate = `${new Date(item.launchDate).toLocaleDateString().split('/').join('-')} 
                ${new Date(item.launchDate).toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit" })}`;
                const closeDate = `${new Date(item.closeDate).toLocaleDateString().split('/').join('-')} 
                ${new Date(item.closeDate).toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit" })}`;

                const statusValue = parseInt(item.status.toString()) === 1 ? "Live" : "Closed";
                const statusClass = `status ${statusValue.toLocaleLowerCase()}`;
                const status = <div className={statusClass}>{statusValue}</div>;

                const action = <Button icon="chart-line" />

                return [item.name, item.createdBy, item.responses, launchDate, closeDate, status, action]
            })

            this.setState(
                {
                    isLoading: false,
                    apiData: apiData,
                    tableData: tableData
                }
            )
        })
    }
}