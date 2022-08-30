import { stat } from "fs/promises";
import { Component, ReactNode } from "react";
import { Submission } from "../../models/submission";
import Api from "../../service/Api";
import Button from "../button/Button";
import Responses from "../response/Responses";
import './Submissions.scss';

export default class Submissions extends Component<{ surveyId: number },
    {
        isLoading: boolean, apiData: Submission[], filteredData: Submission[],
        currentSubmission: number, submittedBy: string, hasMore: boolean
    }> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            apiData: [],
            filteredData: [],
            currentSubmission: 0,
            submittedBy: '',
            hasMore: false
        }
        this.filterData = this.filterData.bind(this);
    }

    filterData() {
        const pageSize = 4;
        const apiData = this.state.apiData;
        const filteredData = this.state.filteredData;
        if (filteredData.length < apiData.length) {
            const itemCount = filteredData.length;
            const newArray = filteredData.concat(apiData.slice(itemCount, itemCount + pageSize));
            const hasMore = newArray.length !== apiData.length;
            this.setState({
                filteredData: newArray,
                hasMore
            });
        }
        console.log(this.state)
    }

    render(): ReactNode {
        const { isLoading, filteredData, currentSubmission, submittedBy } = this.state;
        if (isLoading) {
            return (
                <div>Loading ...</div>
            );
        } else {
            let responseElement = <Responses submissionId={currentSubmission} submittedBy={submittedBy} />
            return (
                <div className="content">
                    <div className="submissions">
                        <h3>Submissions</h3>
                        <br></br>
                        <div className="list">
                            <ul>
                                {filteredData.map(item => {
                                    const classes = item.id === this.state.currentSubmission ? 'selected' : '';
                                    return (
                                        <li className={classes} onClick={() => {
                                            this.setState({
                                                currentSubmission: item.id,
                                                submittedBy: item.submittedBy
                                            })
                                        }}>{item.submittedBy}</li>
                                    )
                                })}
                                {this.state.hasMore ?
                                    <li className="more">
                                        <Button click={this.filterData} value="Load More" icon="plus" />
                                    </li> : ''}
                            </ul>
                        </div>
                    </div>
                    <div className="responses">
                        <h3>Responses</h3>
                        <br></br>
                        {responseElement}
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        const surveyId = this.props.surveyId;

        Api.submissions(surveyId).then(data => {
            const defaultItem = data.length > 0 ? data[0] : undefined;
            const defaultId = defaultItem ? defaultItem.id : 0;
            const defaultSubmit = defaultItem ? defaultItem.submittedBy : '';

            this.setState({
                apiData: data,
                isLoading: false,
                currentSubmission: defaultId,
                submittedBy: defaultSubmit
            })

            this.filterData();
        })
    }
}