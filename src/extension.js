"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const webviewPanel_1 = require("./panels/webviewPanel");
function activate(context) {
    console.log('Elora extension is now active!');
    // This handles the command registration + webview logic
    (0, webviewPanel_1.glowPanelActivate)(context);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map