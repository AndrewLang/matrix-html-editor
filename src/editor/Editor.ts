import { IEditor } from './IEditor';

export class Editor implements IEditor {
    Initialize(selector: string) : IEditor{
        console.log(`Initialize editor: ${selector}`);
        return this;
    }

}