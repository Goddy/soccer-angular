import {Component, OnInit, Input} from "@angular/core";
import {CommentsrestcontrollerApi} from "../../ws/api/CommentsrestcontrollerApi";
import {CommentDTO} from "../../ws/model/CommentDTO";
import {LoginService} from "../../services/login.service";
import {NewsrestcontrollerApi} from "../../ws/api/NewsrestcontrollerApi";

@Component({
  selector: 'app-message',
  template: `
    <div class="post">
      <div>
        <h4>
            <span>{{message.header}}</span>
        </h4>
        <hr>
        <span align="left" [innerHTML]="message.content"></span>
      
        <div class="author-category">Posted by
            {{message.postedBy.name}} on
            {{message.postDate}}   
        </div>
        <div class="pull-right">
        <span class="btn-group" *ngIf="isLoggedIn()">
            <button type="button" class="btn btn-lg btn-danger btn-circle" aria-label="Create comment" (click)="showShowCreateComment = !showShowCreateComment">
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </button>
        </span>  
        </div>
      </div>
       <div class="clearfix"></div>
      <div class="m-t-1">
        <div *ngIf="showShowCreateComment">
          <span class="m-t-1">
              <app-comment-form (onSubmit)="createComment($event)" [comment]="getNewComment(message.id)"></app-comment-form>    
          </span>
        </div>
        <div class="m-t-1">
          <div class="comment post" *ngFor="let comment of message?.comments">
              <app-comment [comment]="comment"></app-comment>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class MessageComponent implements OnInit {
  @Input() message;

  private showShowCreateComment: boolean;

  constructor(private _api: CommentsrestcontrollerApi, private _messagesApi: NewsrestcontrollerApi, private _loginService: LoginService) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this._loginService.isLoggedIn();
  }

  getNewComment(id: any) {
    return {id: id, content: ""}
  }

  createComment(comment: CommentDTO) {
    this.showShowCreateComment = false;
    this._api.postComment(comment.id, comment, this._loginService.jwtHeader)
        .subscribe(r => {
          console.log("success");
          //Get message again
          this.message = this._messagesApi.getNews(this.message.id, this._loginService.jwtHeader);
        })
  }

}
