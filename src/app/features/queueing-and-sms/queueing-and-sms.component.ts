import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DeleteModalComponent } from 'src/app/components/modals/delete-modal/delete-modal.component';
import { JobsModalComponent } from 'src/app/components/modals/jobs-modal/jobs-modal.component';


export interface EnqueuedElement {
  queue: string;
  jobName: string;
  length: string;
  fetched: string;
  nextJobs: string;
}

const ELEMENT_DATA_ENQUEUED: EnqueuedElement[] = [
  {queue: 'REPORT GENERATION', jobName:'Monthly Real Property Collection', length: '2', fetched: 'N/A', nextJobs: 'No Jobs Queued'},
  {queue: 'MAIL GENERATION', jobName:'Unpaid Tax Email Notification', length: '0', fetched: 'N/A', nextJobs: 'No Jobs Queued'},
  {queue: 'SMS NOTIFICATION', jobName:'Unpaid Tax SMS Notification', length: '0', fetched: 'N/A', nextJobs: 'No Jobs Queued'},
  {queue: 'RESOURCES', jobName:'Issued Clearances', length: '0', fetched: 'N/A', nextJobs: 'No Jobs Queued'},
];

export interface ScheduledElement {
  isActive: boolean;
  jobName: string;
  timing: string;
  category: string;
  status: string;
}

const ELEMENT_DATA_SCHEDULED: ScheduledElement[] = [
  {isActive: true, jobName:'Monthly Real Property Collection', timing: 'Mothly at 12:30 AM', category: 'REPORT GENERATION', status: 'Idle'},
  {isActive: true, jobName:'Unpaid Tax Email Notification', timing: 'Daily at 11:00 PM', category: 'MAIL GENERATION', status: 'Idle'},
  {isActive: true, jobName:'Unpaid Tax SMS Notification', timing: 'Daily at 11:30 PM', category: 'SMS NOTIFICATION', status: 'Idle'},
  {isActive: true, jobName:'Issued Clearances', timing: 'On Friday at 12:00 AM', category: 'RESOURCES', status: 'Idle'},
];

export interface ProcessElement {
  execId: string;
  jobCategory: string;
  jobName: string;
  batchStatus: string;
  execStatus: string;
  instanceId: string;
  startTime: string;
  endTime: string;
}

const ELEMENT_DATA_PROCESS: ProcessElement[] = [
  {execId: '1', jobCategory: 'REPORT GENERATION', jobName:'Monthly Real Property Collection', batchStatus: 'FAILED', execStatus: 'FAILED', instanceId: '1', startTime: '2019-10-31 11:00:00.000', endTime: '2019-10-31 11:29:00.000'},
  {execId: '2', jobCategory: 'MAIL GENERATION', jobName:'Unpaid Tax Email Notification', batchStatus: 'COMPLETED', execStatus: 'COMPLETED', instanceId: '2', startTime: '2019-10-31 11:30:00.000', endTime: '2019-10-31 11:59:00.000'},
  {execId: '3', jobCategory: 'SMS NOTIFICATION', jobName:'Unpaid Tax SMS Notification', batchStatus: 'COMPLETED', execStatus: 'COMPLETED', instanceId: '3', startTime: '2019-10-31 12:00:00.000', endTime: '2019-10-31 12:29:00.000'},
  {execId: '4', jobCategory: 'RESOURCES', jobName:'Issued Clearances', batchStatus: 'COMPLETED', execStatus: 'COMPLETED', instanceId: '4', startTime: '2019-10-31 12:30:00.000', endTime: '2019-10-31 12:59:00.000'},
];

export interface FailedElement {
  execId: string;
  jobCategory: string;
  jobName: string;
  execStatus: string;
  description: string;
  startTime: string;
  endTime: string;
}

const ELEMENT_DATA_FAILED: FailedElement[] = [
  {execId: '1', jobCategory: 'REPORT GENERATION', jobName:'Monthly Real Property Collection',  execStatus: 'FAILED', description: 'Error processing batch. See logs for more details.', startTime: '2019-10-31 11:00:00.000', endTime: '2019-10-31 11:29:00.000'},
];

export interface SucceedElement {
  execId: string;
  jobCategory: string;
  jobName: string;
  execStatus: string;
  startTime: string;
  endTime: string;
}

const ELEMENT_DATA_SUCCEEDED: SucceedElement[] = [
  {execId: '2', jobCategory: 'MAIL GENERATION', jobName:'Unpaid Tax Email Notification',  execStatus: 'COMPLETED',  startTime: '2019-10-31 11:30:00.000', endTime: '2019-10-31 11:59:00.000'},
  {execId: '3', jobCategory: 'SMS NOTIFICATION', jobName:'Unpaid Tax SMS Notification',  execStatus: 'COMPLETED', startTime: '2019-10-31 12:00:00.000', endTime: '2019-10-31 12:29:00.000'},
  {execId: '4', jobCategory: 'RESOURCES', jobName:'Issued Clearances',  execStatus: 'COMPLETED', startTime: '2019-10-31 12:30:00.000', endTime: '2019-10-31 12:59:00.000'},
];

export interface DeletedElement {
  execId: string;
  jobCategory: string;
  jobName: string;
  instanceId: string;
  deletedDate: string;
}

const ELEMENT_DATA_DELETED: DeletedElement[] = [
  {execId: '2', jobCategory: 'MAIL GENERATION', jobName:'Unpaid Tax Email Notification',  instanceId: '5', deletedDate: '2019-10-12 18:30:02.000' },
  {execId: '3', jobCategory: 'SMS NOTIFICATION', jobName:'Unpaid Tax SMS Notification',  instanceId: '6' , deletedDate: '2019-10-13 11:16:46.000' },
  {execId: '4', jobCategory: 'RESOURCES', jobName:'Issued Clearances',  instanceId: '7' , deletedDate: '2019-10-13 18:15:32.000' },
];

@Component({
  selector: 'mis-queueing-and-sms',
  templateUrl: './queueing-and-sms.component.html',
  styleUrls: ['./queueing-and-sms.component.scss']
})
export class QueueingAndSmsComponent implements OnInit {

  displayedColumns: string[] = ['queue', 'jobName', 'length', 'fetched', 'nextJobs', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_ENQUEUED);

  displayedColumnsScheduled: string[] = ['isActive', 'jobName', 'timing', 'category', 'status', 'actions'];
  dataSourceScheduled = new MatTableDataSource(ELEMENT_DATA_SCHEDULED);

  displayedColumnsProcessed: string[] = ['execId', 'jobCategory', 'jobName', 'batchStatus', 'execStatus', 'instanceId', 'startTime', 'endTime', 'actions'];
  dataSourceProcessed = new MatTableDataSource(ELEMENT_DATA_PROCESS);

  displayedColumnsSucceeded: string[] = ['execId', 'jobCategory', 'jobName',  'execStatus', 'startTime', 'endTime', 'actions'];
  dataSourceSucceeded = new MatTableDataSource(ELEMENT_DATA_SUCCEEDED);

  displayedColumnsFailed: string[] = ['execId', 'jobCategory', 'jobName',  'execStatus', 'description', 'startTime', 'endTime', 'actions'];
  dataSourceFailed = new MatTableDataSource(ELEMENT_DATA_FAILED);

  displayedColumnsDeleted: string[] = ['execId', 'jobCategory', 'jobName', 'deletedDate' , 'instanceId', 'actions'];
  dataSourceDeleted = new MatTableDataSource(ELEMENT_DATA_DELETED);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSourceScheduled.sort = this.sort;
    this.dataSourceScheduled.paginator = this.paginator;
    this.dataSourceProcessed.sort = this.sort;
    this.dataSourceProcessed.paginator = this.paginator;
    this.dataSourceSucceeded.sort = this.sort;
    this.dataSourceSucceeded.paginator = this.paginator;
    this.dataSourceFailed.sort = this.sort;
    this.dataSourceFailed.paginator = this.paginator;
    this.dataSourceDeleted.sort = this.sort;
    this.dataSourceDeleted.paginator = this.paginator;
  }

  addModal() {
    this.dialog.open(JobsModalComponent, {
      width: '800px',
      height: '600px'
    });
  }

  view() {
    this.dialog.open(JobsModalComponent, {
      width: '800px',
      height: '600px'
    });
  }

  edit() {
    this.dialog.open(JobsModalComponent, {
      width: '800px',
      height: '600px'
    });
  }

  delete() {
    this.dialog.open(DeleteModalComponent, {
      width: '600px'
    });
  }



}
