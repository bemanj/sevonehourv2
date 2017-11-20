export class TempWallBoardData {
    public _id: number;
    public _incidentNumber: string;
    public _remainingSeconds: number;
    public _startDate: Date;
    public _incidentTitle: string;
    public _severityNumber: string;
    public _techOpBridge: string;
    public _imTechLead: string;
    public _incidentSummary: string;

    constructor(id: number
        , incidentNumber: string
        , remainingSeconds: number
        , startDate: Date
        , incidentTitle: string
        , severityNumber: string
        , techOpBridge: string
        , imTechLead: string
        , incidentSummary: string
    ) {
        this._id = id;
        this._incidentNumber = incidentNumber;
        this._remainingSeconds = remainingSeconds;
        this._startDate = startDate;
        this._incidentTitle = incidentTitle;
        this._severityNumber = severityNumber;
        this._techOpBridge = techOpBridge;
        this._imTechLead = imTechLead;
        this._incidentSummary = incidentSummary;
    }
}
