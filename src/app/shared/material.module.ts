import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        MatAutocompleteModule,
        MatDialogModule,
        MatCheckboxModule,
        MatButtonModule
    ],
    exports: [
        MatAutocompleteModule,
        MatDialogModule,
        MatCheckboxModule,
        MatButtonModule
    ]
})
export class MaterialModule {
}
