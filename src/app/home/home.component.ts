import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = "Home Page ---"
  url1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png";
  url2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrOSN-UoPJ4HVkW6BrANDZLZjfmS5xnc98mp5iMACIg&s";
  url = this.url1;

  pays = [
    {nom : "Tunisie", capitale : "Tunis"},
    {nom :"Algérie", capitale : "Alger" },
    {nom : "Maroc", capitale : "Rabat"}
  ];

  changeLogo(){
    this.url = (this.url == this.url1)?this.url2:this.url1;
  }

  showMessage(msg : string){
    console.log(msg);
  }
}
