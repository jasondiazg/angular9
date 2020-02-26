import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Periodic } from '../entities/Periodic';
import { PeriodicElementService } from '../services/periodic-element.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  periodicEntity: Periodic;

  constructor(private readonly periodicElementService: PeriodicElementService, private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  loadData() {
    this.periodicElementService.getAll().subscribe(periodicElements => this.dataSource = periodicElements);
  }

  addElement(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '600px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.periodicEntity = result;
    });
  }

}

const ELEMENT_DATA: Periodic[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', created: new Date() },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', created: new Date() },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', created: new Date() },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', created: new Date() },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', created: new Date() },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', created: new Date() },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', created: new Date() },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', created: new Date() },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', created: new Date() },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', created: new Date() },
];
