import { getApplications, closeMainWindow } from '@raycast/api';
import { runAppleScript } from "run-applescript"

async function OpenPiecesUsingAppleScript(appPath: string) {
  const apple_script = `
    do shell script "open ${appPath}"
    `
  await closeMainWindow();
  await runAppleScript(apple_script)
}


export default async () => {

  const installedApplications = await getApplications();

  console.log(installedApplications.map((a) => a.name).join("\n"));

  const PiecesApp = installedApplications.filter(app => app.name === "Pieces")[0];
  const path = PiecesApp.path;

  console.log("this is the pices app", PiecesApp, typeof (PiecesApp), PiecesApp.name, PiecesApp.path);

  return (
    OpenPiecesUsingAppleScript(path)
  )
};

