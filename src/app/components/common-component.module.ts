import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { MaterialModule } from '../shared/material/material.module';
import { FeaturesModule } from '../features/features.module';
import { MatDialogModule } from '@angular/material';
import { IdSystemModalComponent } from './modals/id-system-modal/id-system-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { CertificateModalComponent } from './modals/certificate-modal/certificate-modal.component';
import { ClearanceModalComponent } from './modals/clearance-modal/clearance-modal.component';
import { PermitModalComponent } from './modals/permit-modal/permit-modal.component';
import { AddAcctngModalComponent } from './modals/add-acctng-modal/add-acctng-modal.component';
import { RealPropertyTaxCollectionModalComponent } from './modals/real-property-tax-collection-modal/real-property-tax-collection-modal.component';
import { JobsModalComponent } from './modals/jobs-modal/jobs-modal.component';
import { GeneralCollectionModalComponent } from './modals/general-collection-modal/general-collection-modal.component';
import { BirthRegistryModalComponent } from './modals/birth-registry-modal/birth-registry-modal.component';
import { MarriageRegistryModalComponent } from './modals/marriage-registry-modal/marriage-registry-modal.component';
import { DeathRegistryModalComponent } from './modals/death-registry-modal/death-registry-modal.component';
import { DragdropDirective } from './modals/birth-registry-modal/dragdrop.directive';


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
    AddAcctngModalComponent,
    BirthRegistryModalComponent,
    MarriageRegistryModalComponent,
    DeathRegistryModalComponent,
    DragdropDirective,
    RealPropertyTaxCollectionModalComponent,
    JobsModalComponent,
    GeneralCollectionModalComponent,
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
    BirthRegistryModalComponent,
    MarriageRegistryModalComponent,
    DeathRegistryModalComponent,
    RealPropertyTaxCollectionModalComponent,
    JobsModalComponent,
    GeneralCollectionModalComponent,
    BirthRegistryModalComponent,
    MarriageRegistryModalComponent,
    DeathRegistryModalComponent
  ]
})
export class CommonComponentModule { }
