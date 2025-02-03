import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AudioService } from './service/audio.service';
import { CursorService } from './service/cursor.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'love-website';

  isPlaying$: Observable<boolean>;
  isMuted$: Observable<boolean>;

  constructor(
    private audioService: AudioService,
    private cursorService: CursorService
  ) {
    this.isPlaying$ = this.audioService.isPlaying$;
    this.isMuted$ = this.audioService.isMuted$;
  }

  ngOnInit() {
    this.cursorService.initializeTrail();
    this.playMusic();
  }

  playMusic() {
    this.audioService.play();
  }

  toggleMute() {
    this.audioService.toggleMute();
  }
}
