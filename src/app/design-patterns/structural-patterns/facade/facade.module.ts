import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AadharCardHelper } from './aadhar-card-helper';
import { Facade } from './facade';
import { PanCardHelper } from './pan-card-helper';
import { PassportHelper } from './passport-helper';
import { UserHelper } from './user-helper';
import { EnsureModuleLoadedOnceGuard } from 'src/app/core/ensure-module-loaded-once.guard';
@NgModule({
    providers: [
        AadharCardHelper,
        Facade,
        PanCardHelper,
        PassportHelper,
        UserHelper
    ]
})
export class FacadeModule extends EnsureModuleLoadedOnceGuard {
    constructor(@Optional() @SkipSelf() parentModule: FacadeModule) {
        super(parentModule);
    }
}