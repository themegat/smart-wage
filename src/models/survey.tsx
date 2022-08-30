export interface Survey {
    name: string,
    createdBy: string,
    responses?: string
    launchDate: Date,
    closeDate: Date,
    status: number
}