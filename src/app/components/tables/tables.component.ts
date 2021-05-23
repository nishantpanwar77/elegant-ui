import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  tableData = [
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 0, secFaculty: 0, totalBatch: 0, pendingSess: 0, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 0, totalBatch: 0, pendingSess: 0, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 2, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 0, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 5, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 6, cancelledSess: 12 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 0, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 2, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 0, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 7, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 5, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 2, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 0, cancelledSess: 143 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 1, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 0, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 1, cancelledSess: 5 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 0, cancelledSess: 1 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 2, cancelledSess: 11 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 0, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 3, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 0, cancelledSess: 43 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 0, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 3, cancelledSess: 0 },
    { schoolId: 'MBNSCL-65997', schoolName: 'Dummy Fr Faculty', city: 'Noida', admin: 'Vishal', priFaculty: 1, secFaculty: 1, totalBatch: 1, pendingSess: 0, cancelledSess: 0 },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
