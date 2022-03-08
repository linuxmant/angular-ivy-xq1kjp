import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-bootstrap-modal',
  templateUrl: './my-bootstrap-modal.component.html',
  styleUrls: ['./my-bootstrap-modal.component.css'],
})
export class MyBootstrapModalComponent implements OnInit {
  @Input() fromParent;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log('Input: ' + this.fromParent);
  }

  closeModal(sendData) {
    this.activeModal.close(this.fromParent);
  }
}
