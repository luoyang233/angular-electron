const { app, BrowserWindow } = require('electron');
const path = require('path');
const glob = require('glob')
const url = require('url')
require('./main-process');

function createWindow() {
	// 创建浏览器窗口
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		webPreferences: {
			nodeIntegration: true
		}
	});

	if (process.env.NODE_ENV === 'dev') {
		win.loadURL('http://localhost:4200');
		// win.webContents.openDevTools();
	} else {
		win.loadFile(path.join(__dirname, `./index.html`));
	}

	// 打开开发者工具
	// win.webContents.openDevTools();
}


// Electron会在初始化完成并且准备好创建浏览器窗口时调用这个方法
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

// 您可以把应用程序其他的流程写在在此文件中
// 代码 也可以拆分成几个文件，然后用 require 导入。
