import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
const { ipcRenderer } = require('electron')

@Component({
	selector: 'app-root',
	template: `
		<button nz-button nzSize="large" (click)="onClick()">Send notification</button>
		<label>{{title}}</label>
		`
})
export class AppComponent implements OnInit {

	title: string

	constructor(
		private ref: ChangeDetectorRef
	) { }


	ngOnInit(): void {
		ipcRenderer.on('selected-directory', (event, result) => {
			this.title = result
			this.ref.detectChanges()
		})
	}

	onClick() {
		ipcRenderer.send('open-file-dialog')
	}

}

