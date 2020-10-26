import { Component, OnInit } from '@angular/core';

export interface Assessment {
  department: string;
  done: string;
  updated: string;
  status: string;
  assessment: string;
}

const ELEMENT_DATA: Assessment[] = [
  {department: 'Avdelning 9', done: '2020-08-01', updated: '2020-09-02', status: 'Pågår', assessment: 'Statistik'},
  {department: 'Avdelning 10', done: '2020-08-01', updated: '2020-09-02', status: 'Ej påbörjad', assessment: 'Statistik'},
  {department: 'Neurologen', done: '2020-08-01', updated: '2020-09-02', status: 'Pågår', assessment: 'Statistik'},
  {department: 'Kardiologen', done: '2020-08-01', updated: '2020-09-02', status: 'Klar', assessment: 'Statistik'},
  {department: 'Avdelning 2', done: '2020-08-01', updated: '2020-09-02', status: 'Ej påbörjad', assessment: 'Statistik'},
  {department: 'Avdelning 3', done: '2020-08-01', updated: '2020-09-02', status: 'Klar', assessment: 'Statistik'},
  {department: 'Ortopeden', done: '2020-08-01', updated: '2020-09-02', status: 'Klar', assessment: 'Statistik'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['department', 'done', 'updated', 'status', 'assessment'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
