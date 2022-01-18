import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultationComponent } from './consultation/consultation.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  { path: "Consultation", component: ConsultationComponent},
  { path: "Formulaire", component: FormulaireComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
