import { NgModule } from '@angular/core';
import { MatCardModule, MatFormFieldModule,MatDialogConfig, MatInputModule, MatButtonModule, MatDialogModule, MatSnackBarModule, MatCheckboxModule, MatSelectModule, MatToolbarModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  width: '700px',
  disableClose: true,
  hasBackdrop: true
}

const MATERIAL_MODULES = [
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,

];


@NgModule({
  declarations: [],
  exports: [...MATERIAL_MODULES],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG}
  ]
})
export class MaterialModule { }
