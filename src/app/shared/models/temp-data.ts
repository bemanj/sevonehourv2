export class TempWallBoardData {
   public _id: number;
   public _incidentNumber: string;
   public _remainingSeconds: number;
   public _startDate: Date;

    constructor(id: number, incidentNumber: string, remainingSeconds: number, startDate: Date) {
        this._id = id;
        this._incidentNumber = incidentNumber;
        this._remainingSeconds = remainingSeconds;
        this._startDate = startDate;
    }
}
