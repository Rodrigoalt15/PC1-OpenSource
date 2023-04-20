import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatTableModule,

    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatTableModule,

    ],

})
export class MaterialModule { }
