import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Periodic, Utils } from '../entities/Periodic';
import { PeriodicElementService } from '../services/periodic-element.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'created', 'actions'];
  dataSource = ELEMENT_DATA;
  periodicEntity: Periodic;
  dialogRef: any;

  constructor(private readonly periodicElementService: PeriodicElementService, private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  loadData() {
    this.periodicElementService.getAll().subscribe(periodicElements => this.dataSource = periodicElements);
  }

  add(): void {
    this.openDialog();

    this.dialogRef.afterClosed().subscribe(entity => {
      if (entity) {
        this.periodicEntity = entity;
        this.periodicElementService.post(this.periodicEntity).subscribe(response => this.loadData());
      }
    });
  }

  edit(element: Periodic): void {
    this.openDialog(element);

    this.dialogRef.afterClosed().subscribe(entity => {
      if (entity) {
        this.periodicEntity = entity;
        this.periodicElementService.put(this.periodicEntity).subscribe(response => this.loadData());
      }
    });
  }

  delete(element: Periodic): void {
    this.periodicElementService.delete(element.id).subscribe(response => this.loadData());
  }

  openDialog(data?: Periodic) {
    this.dialogRef = this.dialog.open(FormComponent, {
      width: '600px',
      data: data || {}
    });
  }

}

const ELEMENT_DATA: Periodic[] = [
  { id: 1000, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', created: Utils.todayAsString() },
  { id: 1001, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', created: Utils.todayAsString() },
  { id: 1002, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', created: Utils.todayAsString() },
  { id: 1003, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', created: Utils.todayAsString() },
  { id: 1004, position: 5, name: 'Boron', weight: 10.811, symbol: 'B', created: Utils.todayAsString() },
  { id: 1005, position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', created: Utils.todayAsString() },
  { id: 1006, position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', created: Utils.todayAsString() },
  { id: 1007, position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', created: Utils.todayAsString() },
  { id: 1008, position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', created: Utils.todayAsString() },
  { id: 1009, position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', created: Utils.todayAsString() },
];
