import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'loading',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './loading.component.html',
})
export class LoadingComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSpinner
    );
  }
}
