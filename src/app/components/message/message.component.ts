import {Component, OnInit, Input} from "@angular/core";
import {CommentsrestcontrollerApi} from "../../ws/soccer/api/CommentsrestcontrollerApi";
import {CommentDTO} from "../../ws/soccer/model/CommentDTO";
import {LoginService} from "../../services/login.service";
import {NewsrestcontrollerApi} from "../../ws/soccer/api/NewsrestcontrollerApi";
import {ErrorHandlerService} from "../../services/error-handler.service";
import {NewsDTO} from "../../ws/soccer/model/NewsDTO";
import {SecUtil} from "../../classes/sec-util";

@Component({
  selector: 'app-message',
  template: `
    <div class="post">
      <div>
        <h4>
            <span>{{message.header}}</span>
            <span class="pull-right">
                <a class="commentBtn" (click)="showAllComments = !showAllComments">
                {{'btn.reactions' | translate}}&nbsp;<span class="badge">{{message?.comments.length}}</span></a>
            </span>
        </h4>
        <hr>
        <span align="left" [innerHTML]="message.content"></span>
      
        <div class="author-category">Posted by
            {{message.postedBy.name}} on
            {{message.postDate}}   
        </div>
        <div class="pull-right">
        <span class="btn-group" *ngIf="isLoggedIn()">
            <button type="button" class="btn btn-info" aria-label="Create comment" (click)="showShowCreateComment = !showShowCreateComment">
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
        <div class="m-t-1" *ngIf="showAllComments">
          <div *ngFor="let comment of message?.comments">
              <app-comment [comment]="comment" [messageId]="message.id"></app-comment>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class MessageComponent implements OnInit {
  @Input() message: NewsDTO;

  showAllComments: boolean;
  showShowCreateComment: boolean;

  constructor(private _api: CommentsrestcontrollerApi, private _messagesApi: NewsrestcontrollerApi, private _loginService: LoginService,
              private _errorHandler: ErrorHandlerService) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
      return SecUtil.isLoggedIn();
  }

  getNewComment(id: any) {
    return {id: id, content: ""}
  }

  createComment(comment: CommentDTO) {
    this.showShowCreateComment = false;
      this._api.postComment(comment.id, comment, SecUtil.getJwtHeaders())
        .subscribe(r => {
          console.log("success");
              this.message.comments.push(comment);
              this.showAllComments = true;
            },
            error => {
              this._errorHandler.handle(error, "messages");
        })
  }
}
