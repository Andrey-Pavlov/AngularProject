import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CourselistComponent } from "./components/pages/courses/courselist/courselist.component";

const routes: Routes = [
  { path: "courses", component: CourselistComponent },
  { path: "**", redirectTo: "/courses" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
