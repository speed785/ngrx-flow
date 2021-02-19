import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {VehiclesFacade} from "../../+state/vehicles.facade";

@Component({
    selector: 'ngrx-flow-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesComponent implements OnInit {

    constructor(
        public vehiclesFacade: VehiclesFacade
    ) {
    }

    ngOnInit(): void {
        this.vehiclesFacade.init();


    }

}
