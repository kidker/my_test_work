import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule} from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes:Routes = [
    { path: '', component: ListComponent },
    { path: 'detail/:id', component: DetailComponent }
];
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ListComponent, DetailComponent],
    imports: [
        FormsModule, ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class ProductsModule {
}
