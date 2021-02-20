import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { StarshipsComponent } from "./component/starships/starships.component";

export const starshipsRoutes: Route[] = [
  {
    path: "",
    component: StarshipsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(starshipsRoutes)],
  declarations: [StarshipsComponent],
})
export class StarshipsModule {}
