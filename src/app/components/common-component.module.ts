import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { MaterialModule } from '../shared/material/material.module';
import { FeaturesModule } from '../features/features.module';
import { MatDialogModule } from "@angular/material"
import { IdSystemModalComponent } from './modals/id-system-modal/id-system-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { CertificateModalComponent } from './modals/certificate-modal/certificate-modal.component';
import { ClearanceModalComponent } from './modals/clearance-modal/clearance-modal.component';
import { PermitModalComponent } from './modals/permit-modal/permit-modal.component';
import { AddAcctngModalComponent } from './modals/add-acctng-modal/add-acctng-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    IdSystemModalComponent,
    DeleteModalComponent,
    CertificateModalComponent,
    ClearanceModalComponent,
    PermitModalComponent,
    AddAcctngModalComponent
  ],
  imports: [
    MatDialogModule,
    CommonModule,
    MaterialModule,
    FeaturesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
  ],
  entryComponents: [ 
    IdSystemModalComponent,
    DeleteModalComponent,
    CertificateModalComponent,
    ClearanceModalComponent,
    PermitModalComponent,
    AddAcctngModalComponent
  ]
})
export class CommonComponentModule { }
