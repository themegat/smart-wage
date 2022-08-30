import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import Submissions from "../../components/submission/Submissions";
import Icon from "../../icons/icons";
import './ResponsesPage.scss';

export function ResponsesPage() {
    const params = useParams();
    let surveyId = params.surveyId === undefined ? 1 : parseInt(params.surveyId);
    let surveyName = params.surveyName;

    return (
        <div className="page">
            <h2>
                <Link className="back" to="/surveys">
                    <Icon name="arrow-left" size={30} stroke={3} />
                </Link>
                {surveyName}</h2>
            <Submissions surveyId={surveyId}></Submissions>
        </div>
    )
}