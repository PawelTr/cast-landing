import { Component } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
// import { register } from 'swiper/element';
// register();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ///
  sliderForWho = [
    {
      image: 'assets/img/foto-3-1.png',
      textH2: 'АКТЁР',
      textP: 'Создайте свой профиль и выделись среди талантливых актеров.',
    },
    {
      image: 'assets/img/foto-3-2.png',
      textH2: 'АГЕНТ',
      textP: 'Расширяйте клиентскую базу и находите идеальные проекты.',
    },
    {
      image: 'assets/img/foto-3-3.png',
      textH2: 'КАСТИНГ-ДИРЕКТОР',
      textP: 'Выбирайте из многочисленных талантов с легкостью.',
    },
    {
      image: 'assets/img/foto-3-1.png',
      textH2: 'АКТЁР',
      textP: 'Создайте свой профиль и выделись среди талантливых актеров.',
    },
    {
      image: 'assets/img/foto-3-2.png',
      textH2: 'АГЕНТ',
      textP: 'Расширяйте клиентскую базу и находите идеальные проекты.',
    },
    {
      image: 'assets/img/foto-3-3.png',
      textH2: 'КАСТИНГ-ДИРЕКТОР',
      textP: 'Выбирайте из многочисленных талантов с легкостью.',
    },
    {
      image: 'assets/img/foto-3-1.png',
      textH2: 'АКТЁР',
      textP: 'Создайте свой профиль и выделись среди талантливых актеров.',
    },
    {
      image: 'assets/img/foto-3-2.png',
      textH2: 'АГЕНТ',
      textP: 'Расширяйте клиентскую базу и находите идеальные проекты.',
    },
    {
      image: 'assets/img/foto-3-3.png',
      textH2: 'КАСТИНГ-ДИРЕКТОР',
      textP: 'Выбирайте из многочисленных талантов с легкостью.',
    },
  ];

  sliderCasting = [
    {
      image: 'assets/img/photo-interstellar.jpg',
      companyName: 'DREAMWORKS',
      movieTitle: 'ЛЮДИ ИКС',
      movieRole:
        'Главная роль русской девушки Икс - "Illyana Rasputin". Полнометражный фильм, США',
      honorarium: '20 000 P',
    },
    {
      image: 'assets/img/photo-interstellar.jpg',
      companyName: 'DREAMWORKS',
      movieTitle: 'ЛЮДИ ИКС',
      movieRole:
        'Главная роль русской девушки Икс - "Illyana Rasputin". Полнометражный фильм, США',
      honorarium: '20 000 P',
    },
    {
      image: 'assets/img/photo-interstellar.jpg',
      companyName: 'DREAMWORKS',
      movieTitle: 'ЛЮДИ ИКС',
      movieRole:
        'Главная роль русской девушки Икс - "Illyana Rasputin". Полнометражный фильм, США',
      honorarium: '20 000 P',
    },
    {
      image: 'assets/img/photo-interstellar.jpg',
      companyName: 'DREAMWORKS',
      movieTitle: 'ЛЮДИ ИКС',
      movieRole:
        'Главная роль русской девушки Икс - "Illyana Rasputin". Полнометражный фильм, США',
      honorarium: '20 000 P',
    },
    {
      image: 'assets/img/photo-interstellar.jpg',
      companyName: 'DREAMWORKS',
      movieTitle: 'ЛЮДИ ИКС',
      movieRole:
        'Главная роль русской девушки Икс - "Illyana Rasputin". Полнометражный фильм, США',
      honorarium: '20 000 P',
    },
    {
      image: 'assets/img/photo-interstellar.jpg',
      companyName: 'DREAMWORKS',
      movieTitle: 'ЛЮДИ ИКС',
      movieRole:
        'Главная роль русской девушки Икс - "Illyana Rasputin". Полнометражный фильм, США',
      honorarium: '20 000 P',
    },
    {
      image: 'assets/img/photo-interstellar.jpg',
      companyName: 'DREAMWORKS',
      movieTitle: 'ЛЮДИ ИКС',
      movieRole:
        'Главная роль русской девушки Икс - "Illyana Rasputin". Полнометражный фильм, США',
      honorarium: '20 000 P',
    },
  ];

  sliderActors = [
    {
      image: 'assets/img/photo-actor-1.png',
      actorName: 'Уварова Елизавета',
      actorAge: '25',
    },
    {
      image: 'assets/img/photo-actor-2.png',
      actorName: 'Уварова Елизавета',
      actorAge: '25',
    },
    {
      image: 'assets/img/photo-actor-3.png',
      actorName: 'Уварова Елизавета',
      actorAge: '25',
    },
    {
      image: 'assets/img/photo-actor-4.png',
      actorName: 'Уварова Елизавета',
      actorAge: '25',
    },
    {
      image: 'assets/img/photo-actor-1.png',
      actorName: 'Уварова Елизавета',
      actorAge: '25',
    },
    {
      image: 'assets/img/photo-actor-2.png',
      actorName: 'Уварова Елизавета',
      actorAge: '25',
    },
  ];

  sliderAgents = [
    {
      image: 'assets/img/photo-actor-1.png',
      agentName: 'Уварова Елизавета',
      agentAge: '25',
      count: '12',
      actor: 'актеров',
    },
    {
      image: 'assets/img/photo-actor-2.png',
      agentName: 'Уварова Елизавета',
      agentAge: '25',
      count: '1',
      actor: 'актер',
    },
    {
      image: 'assets/img/photo-actor-3.png',
      agentName: 'Уварова Елизавета',
      agentAge: '25',
      count: '2',
      actor: 'актера',
    },
    {
      image: 'assets/img/photo-actor-4.png',
      agentName: 'Уварова Елизавета',
      agentAge: '25',
      count: '11',
      actor: 'актеров',
    },
    {
      image: 'assets/img/photo-actor-1.png',
      agentName: 'Уварова Елизавета',
      agentAge: '25',
      count: '10',
      actor: 'актеров',
    },
    {
      image: 'assets/img/photo-actor-2.png',
      agentName: 'Уварова Елизавета',
      agentAge: '25',
      count: '12',
      actor: 'актеров',
    },
    {
      image: 'assets/img/photo-actor-3.png',
      agentName: 'Уварова Елизавета',
      agentAge: '25',
      count: '22',
      actor: 'актера',
    },
  ];
  ///
  title = 'cast-landing';
  isMobile!: boolean;
  isTablet!: boolean;
  constructor(private readonly _breakpointObserver: BreakpointObserver) {
    this._breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
      .subscribe({
        next: (result: BreakpointState) => {
          const breakpoints = result.breakpoints;

          if (breakpoints[Breakpoints.TabletPortrait]) {
            this.isTablet = true;
            this.isMobile = false;
          } else if (breakpoints[Breakpoints.HandsetPortrait]) {
            this.isTablet = false;
            this.isMobile = true;
          } else {
            this.isTablet = false;
            this.isMobile = false;
          }
        },
      });
  }
}
