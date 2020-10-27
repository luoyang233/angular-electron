import { Injectable } from '@angular/core';
import { ipcRenderer } from 'electron';
import { IpcRendererEvent } from 'electron/main';

@Injectable({
	providedIn: 'root'
})
export class IpcRendererService {
	constructor() { }

	on(evenName: string, listener: (event: IpcRendererEvent, ...args: any[]) => void) {
		return ipcRenderer.on(evenName, listener);
	}

	removeListener(evenName: string, listener: (...args: any[]) => void) {
		return ipcRenderer.removeListener(evenName, listener);
	}

	send(evenName: string, ...args: any[]): void {
		return ipcRenderer.send(evenName, ...args);
	}

	api(action: string, ...args: any[]) {
		ipcRenderer.send('api', action, ...args);
		return new Promise(resolve => {
			ipcRenderer.once(`${action}reply`, (e, result) => resolve(result));
		});
	}
}
