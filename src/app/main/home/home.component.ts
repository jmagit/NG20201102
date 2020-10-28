import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common-services';
import { LoggerService } from 'src/view-next-core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Hola mundo';

  constructor(private out: LoggerService, private notify: NotificationService) {
    // out.error('Esto es un error');
    // out.warn('Esto es un warn');
    // out.info('Esto es un info');
    // out.log('Esto es un log');
  }
  ngOnInit(): void {
    // this.notify.add('Esto sale del componente principal.', NotificationType.warn);
  }
}
