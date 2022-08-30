export interface Survey {
    id: number,
    name: string,
    createdBy: string,
    launchDate: Date,
    closeDate: Date,
    status: number,
    totalSubmissions: number,
    totalResponses: number
}