import { Component, VERSION } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyBootstrapModalComponent } from './my-bootstrap-modal/my-bootstrap-modal.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  blah = '';
  name = 'Angular ' + VERSION.major;

  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(MyBootstrapModalComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      // keyboard: false,
      // backdrop: 'static'
    });

    let data = {
      prop1: 'Some Data',
      prop2: 'From Parent Component',
      prop3: 'This Can be anything',
    };

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then(
      (result) => {
        this.blah = result;
        console.log(result);
      },
      (reason) => {}
    );
  }
}
