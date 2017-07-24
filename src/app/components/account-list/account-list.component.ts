import {Component, OnInit} from "@angular/core";
import {AccountrestcontrollerApi} from "../../ws/soccer/api/AccountrestcontrollerApi";
import {AccountDTO} from "../../ws/soccer/model/AccountDTO";
import {ErrorHandlerService} from "../../services/error-handler.service";
import {Response} from "@angular/http";
import {LoginService} from "../../services/login.service";

@Component({
    selector: 'app-account-list',
    template: `
   <div class="container m-t-1">
      <ul class="breadcrumb">
          <li><a href="#" [routerLink]="['/']" routerLinkActive="active">{{'nav.home' | translate}}</a>
          <li>{{'nav.accounts' | translate}}</li>
      </ul>
  </div>
  <div class="m-t-1 container">
  <div>
  <alert [type]="danger" [hidden]="!globalError">{{globalError}}</alert>
  <table class="table table-responsive table-striped">
        <tr>
            <th>Id</th>
            <th>{{"account.username" | translate}}</th>
            <th>{{"account.name" | translate}}</th>
            <th>{{"account.role" | translate}}</th>
            <th></th>
        </tr>
        <tr *ngFor="let account of accountList">
            <td>{{account.id}}</td>
            <td>{{account.username}}</td>
            <td>{{account.name}}</td>
            <td>
                <span *ngIf="account.role == 'ADMIN'" title="{{account.role}}" class="glyphicon glyphicon-king"></span>
                <span *ngIf="account.role == 'USER'" title="{{account.role}}" class="glyphicon glyphicon-pawn"></span>
            </td>
            <td>
                <div class="btn-group">
                <button *ngIf="account.role == 'USER'" type="button" class="btn btn-circle" aria-label="Elevate" title="{{'tooltip.accounts.elevate' | translate}}" (click)="changeRole(account)">
                    <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
                </button>
                <button *ngIf="account.role == 'ADMIN'" type="button" class="btn btn-circle" aria-label="Downgrade" title="{{'tooltip.accounts.downgrade' | translate}}" (click)="changeRole(account)">
                    <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
                </button>
                <button *ngIf="account.activated" type="button" class="btn btn-circle" aria-label="Activate" title="{{'tooltip.accounts.activate' | translate}}" (click)="changeActivation(account)">
                    <span class="glyphicon glyphicon glyphicon-off" aria-hidden="true"></span>
                </button>
                <button *ngIf="!account.activated" type="button" class="btn btn-circle" aria-label="Disable" title="{{'tooltip.accounts.disable' | translate}}" (click)="changeActivation(account)">
                    <span class="glyphicon glyphicon glyphicon-off red" aria-hidden="true"></span>
                </button>
              </div>
            </td>
        </tr>
        
    </table>
    </div>
  </div>
  `,
    styles: []
})
export class AccountListComponent implements OnInit {
    accountList: AccountDTO[];
    globalError: any;

    constructor(private _api: AccountrestcontrollerApi, private _loginService: LoginService, private _errorService: ErrorHandlerService) {
    }

    ngOnInit() {
        this._api.getAccounts(this._loginService.jwtHeader).subscribe(
            a => {
                this.accountList = a;
            },
            (error: Response) => {
                this._errorService.handle(error);
            }
        )
    }

    changeActivation(account: AccountDTO) {
        this._api.changeActivation(account.id, !account.activated, this._loginService.jwtHeader).subscribe(
            r => {
                account.activated = !account.activated;
            },
            e => {
                this.globalError = this._errorService.handle(e);
            }
        )
    }

    changeRole(account: AccountDTO) {
        if (account.role == "ADMIN") {
            this._api.demote(account.id, this._loginService.jwtHeader).subscribe(
                r => {
                    account.role = "USER";
                },
                e => {
                    this.globalError = this._errorService.handle(e);
                }
            )
        }
        else {
            this._api.elevate(account.id, this._loginService.jwtHeader).subscribe(
                r => {
                    account.role = "ADMIN";
                },
                e => {
                    this.globalError = this._errorService.handle(e);
                }
            )
        }

    }

}