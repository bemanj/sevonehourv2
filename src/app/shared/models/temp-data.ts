export class TempWallBoardData {
   public _id: number;
   public _incidentNumber: string;
   public _remainingSeconds: number;

    constructor(id: number, incidentNumber: string, remainingSeconds: number) {
        this._id = id;
        this._incidentNumber = incidentNumber;
        this._remainingSeconds = remainingSeconds;
    }
}
