import { Response } from "../models/response";
import { Submission } from "../models/submission";
import { Survey } from "../models/survey";

const baseUri = 'https://630c9fa353a833c534304965.mockapi.io/api/v1';

const Api = {
    surveys(): Promise<Survey[]> {
        return fetch(`${baseUri}/surveys`).then((response) => response.json());
    },
    submissions(surveyId: number): Promise<Submission[]> {
        return fetch(`${baseUri}/submissions`).then((response) => response.json())
            .then(response => {
                const data: [] = response;
                return data.filter(item => parseInt(item['surveyId']) === surveyId);
            });
    },
    responses(submissionId: number): Promise<Response[]> {
        return fetch(`${baseUri}/responses`).then((response) => response.json())
            .then(response => {
                const data: [] = response;
                return data.filter(item => {
                    if (parseInt(item['submissionId']) == submissionId)
                        return item;
                });
            });
    }
}

export default Api;