import { dialog, MessageBoxOptions } from 'electron';

export const api = {
	'open-file-dialog': async (e) => {
		const result = await dialog.showOpenDialog({
			properties: ['openFile', 'multiSelections'],
			buttonLabel: '确认'
		})
		return result
	},
};


