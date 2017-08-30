import {Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output, NgZone} from "@angular/core";

@Component({
    selector: 'app-tinymce',
    template: `
    <textarea id="{{elementId}}"></textarea>
    <div class="" *ngIf="preview" [innerHTML]="preview">
    </div>`,
    styles: []
})
export class TinymceComponent implements AfterViewInit, OnDestroy {

    constructor(public zone: NgZone) {
    }

    @Input() elementId: String;
    @Input() content: String;
    @Output() onEditorKeyup = new EventEmitter<any>();

    editor;
    preview: string;

    ngAfterViewInit() {
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: ['link', 'paste', 'table'],
            skin_url: '/assets/skins/lightgray',
            setup: editor => {
                this.editor = editor;
                this.setContent();
                editor.on('keyup', () => {
                    const content = editor.getContent();
                    this.zone.run(() => {
                        this.preview = '<h2>###Preview###</h2><hr/>' + content + '<hr/>';
                        this.onEditorKeyup.emit(content);
                    });
                });
            },
            init_instance_callback: () => {
                this.setContent();
            }
        });
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }

    setContent() {
        if (this.editor && this.content) {
            this.editor.setContent(this.content);
        }
    }

}
