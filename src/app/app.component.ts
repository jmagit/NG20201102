import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/view-next-core';
import { NotificationService, NotificationType } from './common-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
