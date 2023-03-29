import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const C_header = document.getElementById('Cover_header');
    // this.Cover_header.innerText = 'Existing user?';
    C_header.innerHTML = 'Sign Up';
  }
  cover = document.getElementById('cover');
  Cover_header = document.getElementById('Coverletter')

  title = 'login';
  todo = "Create Account";
  position: Boolean = true;
  

  movecard(){
    const cover = document.getElementById('cover');
    const C_header = document.getElementById('Cover_header')
    this.position = !this.position;
    switch(!this.position){
      case true:
        cover.classList.toggle('MoveLeft', false)
        cover.classList.toggle('MoveRight', true)
        C_header.innerHTML = 'Existing user?'
        break;
      
      case false:
        cover.classList.toggle('MoveRight', false)
        cover.classList.toggle('MoveLeft', true)
        C_header.innerHTML = 'Sign Up'
        break;
    }
  }
  
}
