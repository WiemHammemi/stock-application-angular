import { NgModule } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { ArticleComponent } from './pages/articles/article/article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategorieComponent } from './pages/categorie/page-categorie/page-categorie.component';
import { NouvelleCatComponent } from './pages/categorie/nouvelle-cat/nouvelle-cat.component';
import { PageUtilComponent } from './pages/utilisateur/page-util/page-util.component';
import { NouvelUtilComponent } from './pages/utilisateur/nouvel-util/nouvel-util.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMdpComponent } from './pages/profil/changer-mdp/changer-mdp.component';
import { PageVueEnsembleComponent } from './pages/page-vue-ensemble/page-vue-ensemble.component';




const routes: Routes = [
  {path:'login', component:PageLoginComponent},
  {path:'inscrire', component:PageInscriptionComponent},
  {path:'', component:PageDashboardComponent, 
  children:[
   {path:'statistiques',component:PageStatistiqueComponent},
   {path:'articles',component:ArticleComponent},
   {path:'nouvelarticle', component:NouvelArticleComponent},
   {path:'mvtstk', component:PageMvtstkComponent},
   {path:"clients",component:PageClientComponent} ,
   {path:"fournisseurs",component:PageFournisseurComponent}, 
   {path:"nouveau-client",component:NouveauCltFrsComponent,data:{ origin:"client"}},
   {path:"nouveau-Fournisseur",component:NouveauCltFrsComponent,data:{ origin:"fournisseur"}},
   {path:"commande-client",component:PageCmdCltFrsComponent,data:{ origin:"clients"}},
   {path:"commande-fournisseur",component:PageCmdCltFrsComponent,data:{ origin:"fournisseurs"}},
   {path:"nouvelleCommandeClt",component:NouvelleCmdCltFrsComponent,data:{ origin:"client"}},
   {path:"nouvelleCommandeFrs",component:NouvelleCmdCltFrsComponent,data:{ origin:"fournisseur"}},
   {path:"categorie",component:PageCategorieComponent},
   {path:"nouvelleCategorie",component:NouvelleCatComponent},
   {path:"utilisateurs", component:PageUtilComponent},
   {path:"nouvelUtilisateur",component:NouvelUtilComponent},
   {path:"profil",component:PageProfilComponent},
   {path:"changerMdp",component:ChangerMdpComponent},
   {path:"",component:PageVueEnsembleComponent},
   
    

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
