import { ipcMain, dialog } from 'electron';
import { api } from './api';

ipcMain.on('api', (event, actionName, ...args) => {
	const reply = payload => {
		event.sender.send(`${actionName}reply`, payload);
	};

	if (api[actionName]) {
		api[actionName](event, ...args)
			.then(res => reply(res))
			.catch(err => dialog.showErrorBox('出现了一些错误', '请稍后再重试'));
	}
});

