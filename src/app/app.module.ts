import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//import { NgChartsModule } from 'ng2-charts';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { DatailMvtstkArticleComponent } from './composants/datail-mvtstk-article/datail-mvtstk-article.component';
import { DeatilCltFrsComponent } from './composants/deatil-clt-frs/deatil-clt-frs.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailMvtstkComponent } from './composants/detail-mvtstk/detail-mvtstk.component';
import { DetailUtilComponent } from './composants/detail-util/detail-util.component';
import { HeaderComponent } from './composants/header/header.component';
import { MenuComponent } from './composants/menu/menu.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { ArticleComponent } from './pages/articles/article/article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageCategorieComponent } from './pages/categorie/page-categorie/page-categorie.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { ChangerMdpComponent } from './pages/profil/changer-mdp/changer-mdp.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { PageUtilComponent } from './pages/utilisateur/page-util/page-util.component';
import { NouvelUtilComponent } from './pages/utilisateur/nouvel-util/nouvel-util.component';

import 'bootstrap';
import { NouvelleCatComponent } from './pages/categorie/nouvelle-cat/nouvelle-cat.component';
import { PageVueEnsembleComponent } from './pages/page-vue-ensemble/page-vue-ensemble.component';
import { FooterComponent } from './composants/footer/footer.component';
import { BoxComponent } from './composants/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    BouttonActionComponent,
    DatailMvtstkArticleComponent,
    DeatilCltFrsComponent,
    DetailArticleComponent,
    DetailCmdComponent,
    DetailCmdCltFrsComponent,
    DetailMvtstkComponent,
    DetailUtilComponent,
    HeaderComponent,
    MenuComponent,
    NouveauCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PaginationComponent,
    ArticleComponent,
    NouvelArticleComponent,
   
    PageCategorieComponent,
    PageClientComponent,
    PageFournisseurComponent,
    PageMvtstkComponent,
    PageCmdCltFrsComponent,
    PageDashboardComponent,
    PageInscriptionComponent,
    PageLoginComponent,
    PageStatistiqueComponent,
    ChangerMdpComponent,
    PageProfilComponent,
    PageUtilComponent,
    NouvelUtilComponent,
    NouvelleCatComponent,
    PageVueEnsembleComponent,
    FooterComponent,
    BoxComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //BrowserModule,
    //NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
