import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: "home", component : HomeComponent
  },
  {
    path: "menu", component : MenuComponent
  },
  {
    path: "cart", component : CartComponent
  },
  {
    path: "menuItems/:itemId", component : DetailsComponent
  },
  {
    path: "aboutUs", component : AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
