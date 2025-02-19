const vscode = require("vscode");

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "fake-json.generateJson",
    function () {
      const sampleJson = {
        countries: [
          { name: "Nigeria", code: "NG" },
          { name: "United States", code: "US" },
          { name: "United Kingdom", code: "UK" },
        ],
      };

      const jsonString = JSON.stringify(sampleJson, null, 2);

      vscode.workspace
        .openTextDocument({ content: jsonString, language: "json" })
        .then((doc) => vscode.window.showTextDocument(doc));
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
