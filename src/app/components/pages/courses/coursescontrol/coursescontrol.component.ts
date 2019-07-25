import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-coursescontrol",
  templateUrl: "./coursescontrol.component.html",
  styleUrls: ["./coursescontrol.component.css"]
})
export class CoursescontrolComponent implements OnInit {
  @Input() searchedCourse: string;

  constructor() {}

  ngOnInit() {}

  searchCourse = () => {
    console.log(this.searchedCourse);
  };
}
