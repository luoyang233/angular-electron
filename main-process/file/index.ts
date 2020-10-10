const { ipcMain, dialog } = require('electron')

ipcMain.on('open-file-dialog', (event) => {
	dialog.showOpenDialog({
		properties: ['openFile', 'multiSelections'],
		buttonLabel: '确认上传'
	}).then(result => {
		if (!result.canceled) {
			console.log(result)
			event.sender.send('selected-directory', result.filePaths)
		}
	})
})
