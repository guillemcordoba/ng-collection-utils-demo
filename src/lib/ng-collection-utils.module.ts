import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatRadioModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatDatepickerModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { PortalModule } from '@angular/cdk/portal';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SortByMenuDirective } from './sorting/sort-by-menu.directive';
import { SortByComponent } from './sorting/sort-by/sort-by.component';
import { FilterToolbarComponent } from './filtering/filter-toolbar/filter-toolbar.component';
import { FilterStringComponent } from './filtering/filter-string/filter-string.component';
import { FilterComponent } from './filtering/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTogglerDirective } from './filtering/filter-toggler.directive';
import { FilterNumberComponent } from './filtering/filter-number/filter-number.component';
import { FilterDateComponent } from './filtering/filter-date/filter-date.component';
import { FilterMultioptionComponent } from './filtering/filter-multioption/filter-multioption.component';
import { FilterAutocompleteComponent } from './filtering/filter-autocomplete/filter-autocomplete.component';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';
import { FilterGroupComponent } from './filtering/filter-group.component';
import { FilterAdvancedComponent } from './filtering/filter-advanced/filter-advanced.component';
import { LoadingComponent } from './loading/components/loading/loading.component';
import { AsyncLoadingDirective } from './loading/directives/async-loading.directive';
import { GlobalLoadingService } from './loading/services/global-loading.service';
import { LoadingEmptyComponent } from './loading/components/loading-empty/loading-empty.component';
import { LoadingErrorComponent } from './loading/components/loading-error/loading-error.component';
import { SyncLoadingDirective } from './loading/directives/sync-loading.directive';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatRadioModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    PortalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SortByMenuDirective,
    SortByComponent,
    FilterToolbarComponent,
    FilterStringComponent,
    FilterComponent,
    FilterGroupComponent,
    FilterTogglerDirective,
    FilterNumberComponent,
    FilterDateComponent,
    FilterMultioptionComponent,
    FilterAutocompleteComponent,
    ChipsAutocompleteComponent,
    FilterAdvancedComponent,
    LoadingComponent,
    AsyncLoadingDirective,
    LoadingEmptyComponent,
    LoadingErrorComponent,
    SyncLoadingDirective
  ],
  exports: [
    SortByMenuDirective,
    FilterToolbarComponent,
    FilterStringComponent,
    FilterNumberComponent,
    FilterDateComponent,
    FilterAutocompleteComponent,
    FilterAdvancedComponent,
    ChipsAutocompleteComponent,
    FilterTogglerDirective,
    LoadingComponent,
    SyncLoadingDirective,
    AsyncLoadingDirective,
    LoadingEmptyComponent
  ],
  entryComponents: [
    SortByComponent,
    LoadingComponent,
    LoadingEmptyComponent,
    LoadingErrorComponent
  ],
  providers: [GlobalLoadingService]
})
export class CollectionUtilsModule {}
