import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../modeles/user';
import {LyDialog} from '@alyle/ui/dialog';
import {CropperDialog} from './cropperdialog/cropper-dialog';
import {ImgCropperEvent} from '@alyle/ui/image-cropper';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  cropped: any;
  userCanAddDesc = false;

  constructor(
    private userService: UserService,
    private _dialog: LyDialog,
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.createForme();
  }

  createForme(): void{
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.min(2)]),
      lastName: new FormControl('', [Validators.required, Validators.min(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required, Validators.min(2)]),
      password: new FormControl('', [Validators.required, Validators.min(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.min(8)]),
    });
  }

  createUser(): void{
    const formValue = this.userForm.value;
    const newUser = new User(0, formValue.name, formValue.lastName, formValue.username, formValue.email, formValue.password);
    this.userService.addUser(newUser);
  }

  openCropperDialog(event: Event): void {
    this.cropped = null!;
    this._dialog.open<CropperDialog, Event>(CropperDialog, {
      data: event,
      width: 320,
      disableClose: true
    }).afterClosed.subscribe((result?: ImgCropperEvent) => {
      if (result) {
        this.cropped = result.dataURL;
        this._cd.markForCheck();
      }
    });
  }

  removepicture(): void {
    console.log(this.cropped);
    this.cropped = null;
  }
}
