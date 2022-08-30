import { Component, ReactNode } from "react";
import { Submission } from "../../models/submission";
import Api from "../../service/Api";
import Responses from "../response/Responses";
import './Submissions.scss';

export default class Submissions extends Component<{ surveyId: number },
    { isLoading: boolean, apiData: Submission[], currentSubmission: number }> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            apiData: [],
            currentSubmission: 0
        }
    }

    render(): ReactNode {
        const { isLoading, apiData, currentSubmission } = this.state;
        let responseElement = <Responses submissionId={currentSubmission} />;
        if (isLoading) {
            return (
                <div>Loading ...</div>
            );
        } else {
            return (
                <div className="content">
                    <div className="submissions">
                        <h3>Submissions</h3>
                        <br></br>
                        <ul>
                            {apiData.map(item => {
                                return (
                                    <li onClick={() => {
                                        this.setState({
                                            currentSubmission: item.id
                                        })
                                    }}>{item.submittedBy}</li>
                                )
                            })}
                        </ul></div>
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
            this.setState({
                apiData: data,
                isLoading: false
            })
        })
    }
}