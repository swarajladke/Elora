import * as vscode from 'vscode';

export function glowPanelActivate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('Elora.showGlowPanel', () => {
    const theme = vscode.workspace.getConfiguration('workbench').get('colorTheme') as string;

    const themeColorMap: Record<string, string> = {
      'Elora Pink': '#ff69b4',
      'Elora Blue': '#00aaff',
      'Elora Green': '#00ff99',
      'Elora Red': '#ff4444',
      'Elora Purple': '#aa00ff',
      'Elora Aqua': '#00ffff',
      'Elora Orange': '#ff8800',
      'Elora Yellow': '#ffff33',
      'Elora Lime': '#ccff00',
      'Elora Magenta': '#ff00ff',
      'Elora Cyan': '#00e5ff',
      'Elora Rainbow': '#ffffff'
    };

    const glowColor = themeColorMap[theme] || '#ffffff'; // Now glowColor is used here

    const panel = vscode.window.createWebviewPanel(
      'EloraGlow',
      'Elora Glow',
      vscode.ViewColumn.One,
      { enableScripts: true }
    );

    panel.webview.html = getWebviewContent(glowColor);
  });

  context.subscriptions.push(disposable);
}

function getWebviewContent(glowColor: string): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <style>
      body {
        background: #0a0a0a;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: sans-serif;
      }

      .border-glow {
        width: 80%;
        height: 80%;
        border-radius: 16px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 20px ${glowColor};
      }

      .border-glow::before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        background: linear-gradient(45deg, transparent, ${glowColor}, transparent);
        animation: borderGlowMove 4s linear infinite;
        background-size: 300% 300%;
        z-index: 1;
        pointer-events: none;
        border-radius: 16px;
        filter: blur(8px);
      }

      .content {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        background: #111;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${glowColor};
        font-size: 2rem;
        box-shadow: inset 0 0 10px ${glowColor}44;
      }

      @keyframes borderGlowMove {
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
    <div class="border-glow">
      <div class="content">
               𝑬𝒍𝒐𝒓𝒂 <br>
              𝑮𝒍𝒐𝒘𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 𝒔𝒕𝒚𝒍𝒆 !<br>     
                   𝑩𝒀 - 𝑺𝒘𝒂𝒓𝒂𝒋 𝑳𝒂𝒅𝒌𝒆
      </div>
    </div>
  </body>
  </html>
  `;
}
