import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  constructor(public filename: string) {}

  print(report: string): void {
    const html = `
      <html>
        <head>
          <title>Analysis Output</title>
        </head>
        <body>
          <div>
            <h1>Analysis Output</h1>
            <div>${report}</div>
          </div>
        </body>
      </html>      
    `;
    fs.writeFileSync(`${this.filename}.html`, html);
  }
}
