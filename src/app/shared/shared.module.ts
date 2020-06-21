import { NgModule } from '@angular/core';
import { CustomComponentsModule } from './custom-components/custom-components.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
    declarations: [],
    imports: [CustomComponentsModule, LayoutModule],
    exports: [CustomComponentsModule, LayoutModule],
})
export class SharedModule { }
