import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:User[];

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
    // console.log(this.users)
  }

  actualizarUsuario(id:number){
    // this.router.navigate(['actualizar-usuario'], { queryParams: { id: id }});
    this.router.navigate(['/actualizar-usuario', id]);
  }

  eliminarUsuario(id:number){
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    });
  }

  private getUsers(){
    this.userService.getUserList().subscribe(data=>{
      this.users = data;
    })
  }



}
