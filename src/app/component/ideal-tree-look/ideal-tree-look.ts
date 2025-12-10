import { Component, ViewChild } from '@angular/core';
import { SohoComponentsModule, SohoTreeComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-ideal-tree-look',
  imports: [SohoComponentsModule],
  templateUrl: './ideal-tree-look.html',
  styleUrl: './ideal-tree-look.scss',
})
export class IdealTreeLook {
    @ViewChild(SohoTreeComponent) treeComponent!: SohoTreeComponent;
    DATA = [
        {
            id: 'root',
            text: 'Interest Groups',
            open: true,
            children: [{
                id: 'group1',
                text: 'Services',
                open: true,
                children: [{
                    id: 'group2',
                    text: 'Technical Support',
                    open: true,
                    children: [{
                        id: 'group3',
                        text: 'Repair',
                        open: true,
                        children: [{
                            id: 'group4',
                            text: 'Mechanical',
                            open: true,
                            children: [{
                                id: 'group5',
                                text: 'Plumbing',
                                open: true,
                                children: [{
                                    id: 'group6',
                                    text: 'Commercial',
                                    open: true,
                                    children: [{
                                        id: 'group 7',
                                        text: 'Pipe Installation',
                                        open: true,
                                        children: [{
                                            id: 'leafNode',
                                            text: '2.1.1.1.1.1.1.1',
                                            open: true,
                                            icon: 'none'
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        }
    ]
}
