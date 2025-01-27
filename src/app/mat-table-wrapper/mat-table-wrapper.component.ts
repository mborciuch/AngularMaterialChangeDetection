import {Component, computed, Input, input} from '@angular/core';
import {
  MatTableModule
} from '@angular/material/table';
import {KeyValuePipe, NgForOf} from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface ColumnConfig {
  header: string
  backgroundColor: string;
}
export type ColumnConfigs = {[key: string]: ColumnConfig}

@Component({
  selector: 'app-mat-table-wrapper',
  imports: [MatTableModule, KeyValuePipe, NgForOf],
  templateUrl: './mat-table-wrapper.component.html',
  standalone: true,
  styleUrl: './mat-table-wrapper.component.css'
})
export class MatTableWrapperComponent {
  dataSource = input.required<PeriodicElement[]>()
  // columnConfigs = input.required<ColumnConfigs>();
  // displayedColumns = computed(() => Object.keys(this.columnConfigs()));

  _columnConfig: ColumnConfigs = {};
  _displayedColumns: string[] = [];
  @Input() set columnConfigSetter(value: ColumnConfigs) {
    this._columnConfig = value;
    this._displayedColumns = Object.keys(value);
  }

  trackByFn(index: number, item: any): string {
    return item.key;
  }
}
