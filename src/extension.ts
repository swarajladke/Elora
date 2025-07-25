import * as vscode from 'vscode';
import { glowPanelActivate } from './panels/webviewPanel';

export function activate(context: vscode.ExtensionContext) {
	console.log('Euphoria extension is now active!');

	// This handles the command registration + webview logic
	glowPanelActivate(context);
}

export function deactivate() {}
