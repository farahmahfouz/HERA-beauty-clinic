import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {

  constructor(private title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const pageTitle = this.buildTitle(routerState);

    if (pageTitle) {
      this.title.setTitle(`HERA | ${pageTitle}`);
    } else {
      this.title.setTitle('HERA');
    }
  }
}
