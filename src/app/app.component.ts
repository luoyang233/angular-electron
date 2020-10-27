import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IpcRendererService } from '../ipc/ipc-renderer.service';

const key = 'open-file-dialog'
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
		private ref: ChangeDetectorRef,
		private ipcRendererService: IpcRendererService
	) { }


	ngOnInit(): void {
		this.ipcRendererService.on(`${key}reply`, (event, result) => {
			this.title = result.filePaths
			this.ref.detectChanges()
		})
	}

	onClick() {
		this.ipcRendererService.api(key)
	}

}

