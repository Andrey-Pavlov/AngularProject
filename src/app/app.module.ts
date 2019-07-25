import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

/*Font awesome*/
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarAlt,
  faPencilAlt,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LogoComponent } from "./components/logo/logo.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { BreadcrumbsComponent } from "./components/layout/breadcrumbs/breadcrumbs.component";
import { CourseComponent } from "./components/pages/courses/course/course.component";
import { CourselistComponent } from "./components/pages/courses/courselist/courselist.component";
import { CoursescontrolComponent } from "./components/pages/courses/coursescontrol/coursescontrol.component";
import { DurationPipe } from "./shared/pipes/duration.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CourseComponent,
    CourselistComponent,
    CoursescontrolComponent,
    DurationPipe
  ],
  imports: [BrowserModule, FontAwesomeModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faCalendarAlt, faPencilAlt, faTrash, faClock);
  }
}
