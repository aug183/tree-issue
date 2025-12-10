import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { ModalDialog } from './component/modal-dialog/modal-dialog';

@Component({
  selector: 'app-root',
  imports: [SohoComponentsModule, ModalDialog],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tree-issue');
}
