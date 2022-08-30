import { Component, ReactNode } from "react";
import { Submission } from "../../models/submission";
import Api from "../../service/Api";
import './Submissions.scss';

export default class Submissions extends Component<{ surveyId: number }, { isLoading: boolean, apiData: Submission[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            apiData: []
        }
    }

    render(): ReactNode {
        const { isLoading, apiData } = this.state;
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
                                    <li>{item.submittedBy}</li>
                                )
                            })}
                        </ul></div>
                    <div className="responses">
                        <h3>Responses</h3>
                        <br></br>
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