import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { SohoComponentsModule, SohoModalDialogService } from 'ids-enterprise-ng';
import { TreeIssue } from '../tree-issue/tree-issue';
import { IdealTreeLook } from '../ideal-tree-look/ideal-tree-look';

@Component({
  selector: 'app-modal-dialog',
  imports: [SohoComponentsModule],
  templateUrl: './modal-dialog.html',
  styleUrl: './modal-dialog.scss',
  standalone: true
})
export class ModalDialog {
    @ViewChild('dialogPlaceholder', { read: ViewContainerRef, static: true })
    placeholder?: ViewContainerRef;
    constructor(private modalService: SohoModalDialogService) {
    }

    openIssueTree() {
        const dialogRef = this.modalService
            .modal(TreeIssue, this.placeholder, {
                maxWidth: 800,
                showCloseBtn: true,
            })
            .buttons(
                [{
                    text: 'Cancel', click: () => {
                        dialogRef.close('Cancel');
                    }
                },
                {
                    text: 'Apply', click: () => {
                        dialogRef.close('Apply');
                    }, isDefault: true
                }])
            .title('Select Interest Code')
            .open()
    }

    openIdealTree() {
        const dialogRef = this.modalService
            .modal(IdealTreeLook, this.placeholder, {
                maxWidth: 800,
                showCloseBtn: true,
            })
            .buttons(
                [{
                    text: 'Cancel', click: () => {
                        dialogRef.close('Cancel');
                    }
                },
                {
                    text: 'Apply', click: () => {
                        dialogRef.close('Apply');
                    }, isDefault: true
                }])
            .title('Select Interest Code')
            .open()
    }
}
