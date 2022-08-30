import { Component, ReactNode } from "react";
import { Submission } from "../../models/submission";
import Api from "../../service/Api";
import Responses from "../response/Responses";
import './Submissions.scss';

export default class Submissions extends Component<{ surveyId: number },
    { isLoading: boolean, apiData: Submission[], currentSubmission: number, submittedBy: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            apiData: [],
            currentSubmission: 0,
            submittedBy: ''
        }
    }

    render(): ReactNode {
        const { isLoading, apiData, currentSubmission, submittedBy } = this.state;
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
                        <ul>
                            {apiData.map(item => {
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
            const defaultItem = data.length > 0 ? data[0] : undefined;
            const defaultId = defaultItem ? defaultItem.id : 0;
            const defaultSubmit = defaultItem ? defaultItem.submittedBy : '';

            this.setState({
                apiData: data,
                isLoading: false,
                currentSubmission: defaultId,
                submittedBy: defaultSubmit
            })
        })
    }
}