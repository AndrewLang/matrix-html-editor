import { IEditor } from './IEditor';

export class Editor implements IEditor {
    Initialize(selector: string) : IEditor{
        console.log(`Initialize editor: ${selector}`);
        let element = document.getElementById(selector);
        if(element){
            element.contentEditable = 'true';
        }
        
        return this;
    }

}