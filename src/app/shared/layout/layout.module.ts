import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { CustomComponentsModule } from '../custom-components/custom-components.module';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

@NgModule({
    declarations: [HeaderComponent, PublicLayoutComponent],
    imports: [CoreModule, CustomComponentsModule],
    exports: [HeaderComponent, PublicLayoutComponent],
})
export class LayoutModule { }