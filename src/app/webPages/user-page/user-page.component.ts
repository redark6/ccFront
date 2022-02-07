import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {LyDialog} from '@alyle/ui/dialog';
import {CropperDialog} from '../user-form/cropperdialog/cropper-dialog';
import {ImgCropperEvent} from '@alyle/ui/image-cropper';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  cropped: any;
  userCanAddDesc = false;

  constructor(
    private userService: UserService,
    private _dialog: LyDialog,
    private _cd: ChangeDetectorRef,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
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

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
