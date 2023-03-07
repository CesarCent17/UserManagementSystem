import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

// import  swal  from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id:number;
  usuario:User = new User();
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserId(this.id).subscribe(data=>{
      this.usuario = data;
    }, error => console.log(error))
  }

  onSubmit(){
    this.userService.updateUser(this.id,this.usuario).subscribe(data => {
      this.goToUserList();
    },error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/usuarios']);
    console.log('Empleado actualizado');
  }

}
