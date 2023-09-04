import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArmyComponent} from './components/army/army.component';
import { BuilderComponent} from './components/builder/builder.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  {
    path: "",
    title: "Warhammer My Army",
    component: HomeComponent
  },
  {
    path: "login",
    title: "Warhammer My Army - Se connecter",
    component: LoginComponent
  },
  {
    path: "register",
    title: "Warhammer My Army - S'inscrire",
    component: RegisterComponent
  },
  {
    path: "army",
    title: "Warhammer My Army - Nos Armées",
    component: ArmyComponent
  },
  {
    path: "builder",
    title: "Warhammer My Army - Constructeur d'armées",
    component: BuilderComponent
  },
  {
    path: "profil",
    title: "Warhammer My Army - Mon profil",
    component: ProfilComponent
  },
  {
    path: "404",
    title: "Warhammer My Army - Page non trouvée",
    component: ErrorComponent
  },
  {
    path: "admin",
    title: "Warhammer My Army - Panel Admin",
    component: AdminComponent
  },
  {
    path: "**",
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
