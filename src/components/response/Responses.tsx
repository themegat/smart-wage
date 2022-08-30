import { Component, ReactNode } from "react";
import { Response } from "../../models/response";
import Api from "../../service/Api";
import './Responses.scss';

export default class Responses extends Component<{ submissionId: number },
    { isLoading: boolean, apiData: Response[], submissionId: number }> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            apiData: [],
            submissionId: 0
        }
    }

    render(): ReactNode {
        const newSubmissionId = this.props.submissionId;
        const { isLoading, apiData, submissionId } = this.state;
        if (isLoading || (submissionId !== newSubmissionId)) {
            return (<div className="view-content">
                <div className="placeholder">Loading ...</div>
            </div>)
        } else if (!isLoading && apiData.length === 0) {
            return (<div className="view-content">
                <div className="placeholder">Select a submission</div>
            </div>)
        } else {
            return (
                <div className="view-content">
                    <ol>
                        {apiData.map(item => {
                            return (
                                <li>
                                    <div className="question">
                                        <h4>Question</h4>
                                        {item.question}
                                    </div>
                                    <div className="answer">
                                        <i>
                                            <h4>Answer</h4>
                                            {item.answer}
                                        </i>
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            )
        }

    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        const submissionId = this.props.submissionId;
        Api.responses(submissionId).then(data => {
            this.setState({
                apiData: data,
                isLoading: false,
                submissionId
            });
        });
    }

    componentDidUpdate() {
        const submissionId = this.props.submissionId;
        Api.responses(submissionId).then(data => {
            this.setState({
                apiData: data,
                isLoading: false,
                submissionId
            });
        });
    }
}