import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { TempWallBoardData } from '../../../shared/models/TempWallBoardData';
declare var $: any;

@Component({
    selector: 'app-sev1-clock',
    templateUrl: './sev1-clock.component.html',
    styleUrls: ['./sev1-clock.component.css']
})
export class Sev1ClockComponent implements AfterViewInit, OnInit {

    @Input()
    public tempWallboarData: TempWallBoardData;

    public incidentNumberCounter: string;
    public elapseTime: number;


    ngOnInit() {

        this.incidentNumberCounter = (this.tempWallboarData._incidentNumber + 'Counter');
        if (isNaN(this.tempWallboarData._remainingSeconds) || this.tempWallboarData._remainingSeconds < 0) {
            this.elapseTime = 0;
        }
    }

    ngAfterViewInit() {
        setInterval(() => { this.setFlipClock(); }, 1000);

        $('.' + this.tempWallboarData._incidentNumber).TimeCircles({
            time: {
                Days: {
                    show: false,
                    text: 'Days',
                    color: '#FC6'
                },
                Hours: {
                    show: false,
                },
                Minutes: {
                    show: true,
                    text: 'Minutes',
                    color: '#BFB'
                },
                Seconds: {
                    show: false,
                    text: 'Seconds',
                    color: '#F99'
                }
            }
        });
    }

    setFlipClock() {
        if (this.elapseTime >= 0) {
            if (this.elapseTime > 0) {
                this.elapseTime = this.elapseTime - 1;
            }

            if (this.elapseTime <= 0) {

                setTimeout(() => { this.initializeCountUp(); }, 500);
            }
        }
    }

    initializeCountUp() {
        $('.' + this.incidentNumberCounter).TimeCircles({
            time: {
                Days: {
                    show: true,
                    text: 'Day/s',
                    color: '#F99'
                },
                Hours: {
                    show: true,
                    text: 'Hour/s',
                    color: '#F99'
                },
                Minutes: {
                    show: true,
                    text: 'Minute/s',
                    color: '#F99'
                },
                Seconds: {
                    show: true,
                    text: 'Second/s',
                    color: '#F99'
                }
            }
        });
    }

    showCountDown() {
        return (this.elapseTime > 0);
    }

    showCountUp() {
        return (this.elapseTime <= 0);
    }
}
