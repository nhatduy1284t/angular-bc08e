import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-directive',
  template: `
    <div class="">
      <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Cybersoft</a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a
                class="nav-link"
                href="#"
                data-toggle="modal"
                data-target="#modelId"
                *ngIf="!isLogin"
                >Login
              </a>
            </li>

            <li class="nav-item active">
              <a
                class="nav-link"
                href="#"
                data-toggle="modal"
                data-target="#modelId"
                *ngIf="isLogin"
                >{{ userName }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown</a
              >
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Action 1</a>
                <a class="dropdown-item" href="#">Action 2</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <h3>UserName</h3>
              <input type="text" [(ngModel)]="userName" #inputUserName />
            </div>
            <div class="form-group">
              <h3>Password</h3>
              <input type="text" [(ngModel)]="password" #inputPassword />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              #closeBtn
              id="btnClose"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              (click)="login(inputUserName.value, inputPassword.value)"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class BaiTapDirectiveComponent implements OnInit {
  isLogin: boolean = false;
  userName: string = '';
  password: string = '';
  login(userName: string, password: string) {
    if (userName === 'cybersoft' && password === 'cybersoft') {
      this.isLogin = true;
      let btnClose:any = document.querySelector('#btnClose');
      btnClose.click();
    }
  }
  constructor() {}

  ngOnInit() {
    //componentDidmount
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName')!;
      this.isLogin = true;
    }
  }
}
