import { Component, OnInit, TemplateRef } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { IMember } from 'src/app/interfaces/members.interface';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

    items: IMember;
    modalRef: BsModalRef;
    form: FormGroup;

    constructor(
        private _membersService: MembersService,
        private _modalService: BsModalService,
        private _build: FormBuilder
    ) {
    }

    ngOnInit() {
        // this._membersService.findAll()
        //     .subscribe(data => {
        //         console.log(data);
        //     });
        // this._membersService.findAll().then(res => {
        //     console.log(res);
        //     this.items = res;
        // }).catch(err => console.log(err.Message));
        this.initialMember();
    }


    openModal(template: TemplateRef<any>) {
        this.iniitalFormMember();
        this.modalRef = this._modalService.show(template);
    }

    onSubmit() {
        console.log(this.form.value);
        if (this.form.invalid) {
            return console.log('กรอกข้อมูลไม่ถูกต้อง');
        }

        this._membersService.create(this.form.value).then(res => {
            console.log(res);
            this.modalRef.hide();
            this.initialMember();
        }).catch(err => console.log(err.Message));

    }

    iniitalFormMember() {
        this.form = this._build.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            address: ['', Validators.required],
            password: ['', Validators.required]
        });
    }


    initialMember() {
        this._membersService.findAll().then(res => {
            console.log(res);
            this.items = res;
        }).catch(err => console.log(err.Message));
    }

}
