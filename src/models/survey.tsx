export interface Survey {
    id: number,
    name: string,
    createdBy: string,
    responses?: string
    launchDate: Date,
    closeDate: Date,
    status: number
}