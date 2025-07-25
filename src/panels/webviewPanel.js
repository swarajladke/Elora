"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) {k2 = k;}
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) {k2 = k;}
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o){ if (Object.prototype.hasOwnProperty.call(o, k))
              { ar[ar.length] = k; }
            }
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) {return mod;}
        var result = {};
        if (mod !== null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++);}
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.glowPanelActivate = glowPanelActivate;
const vscode = __importStar(require("vscode"));
function glowPanelActivate(context) {
    const disposable = vscode.commands.registerCommand('euphoria.showGlowPanel', () => {
        const color = '#facc15'; // You can replace this with any theme color
        const panel = vscode.window.createWebviewPanel('euphoriaGlow', 'Euphoria Glow', vscode.ViewColumn.One, {
            enableScripts: true,
        });
        panel.webview.html = getWebviewContent(color);
    });
    context.subscriptions.push(disposable);
}
function getWebviewContent(glowColor) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <style>
      body {
        background: #000000;
        color: ${glowColor};
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family: 'Segoe UI', sans-serif;
      }

      .glow-box {
        padding: 3rem;
        background: #0a0a0a;
        text-align: center;
        font-size: 1.5rem;
        border-radius: 1rem;
        position: relative;
        z-index: 1;
        color: ${glowColor};
        box-shadow: 0 0 30px ${glowColor}aa;
      }

      .glow-box::before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        background: linear-gradient(45deg, ${glowColor}, transparent, ${glowColor});
        border-radius: 1rem;
        z-index: -1;
        animation: glowAnim 4s linear infinite;
        background-size: 300% 300%;
        filter: blur(6px);
      }

      @keyframes glowAnim {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    </style>
  </head>
  <body>
    <div class="glow-box">
      Welcome to Euphoria 🌟<br>
      Glowing in style!
    </div>
  </body>
  </html>
  `;
}
//# sourceMappingURL=webviewPanel.js.map