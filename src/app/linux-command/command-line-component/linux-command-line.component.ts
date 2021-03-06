import { Component, OnDestroy, OnInit } from '@angular/core';
import { GrepOptions } from 'app/linux-command/enums/enums';
import { LinuxCommand } from 'app/linux-command/model/models';
import { Subscription } from 'rxjs';
import { LinuxCommandLineService } from 'app/linux-command/service';

import { WcOptions } from '../enums/enums';

@Component({
    selector: 'linux-command-line',
    styleUrls: ['./linux-command-line.component.css'],
    templateUrl: './linux-command-line.component.html'
})
export class LinuxCommandLineComponent implements OnInit, OnDestroy {

    private name: string = 'LinuxCommandLineComponent';
    private subscription: Subscription;
    private prompt: string = 'root$ ';
    private commandLine: string = '';

    constructor(
        private linuxCommandLineService: LinuxCommandLineService
    ) {
        this.subscription = linuxCommandLineService.getCurrentCommandLine().subscribe((value) => {
            this.commandLine = this.prompt + ' ' + value;
        });

    }

    public ngOnInit() {
        console.log(this.name + '.ngOnInit()');
    }

    public ngOnDestroy() {
        console.log(this.name + '.ngOnDestroy()');
    }
}
