import { Component, OnInit } from '@angular/core';
const { ipcRenderer } = require('electron')

@Component({
	selector: 'app-root',
	template: `
		<button nz-button nzSize="large" (click)="onClick()">Send notification</button>
		`
})
export class AppComponent implements OnInit {

	ngOnInit(): void {
		ipcRenderer.on('selected-directory', (event, result) => {
			console.log('打开控制台看一看',result)
		})
	}

	onClick() {
		ipcRenderer.send('open-file-dialog')
	}

}

