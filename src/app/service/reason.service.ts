import { Injectable } from '@angular/core';
import { Reason } from '../model/reason';

@Injectable({
  providedIn: 'root',
})
export class ReasonService {
  private reasons: Reason[] = [
    {
      id: 1,
      text: 'Your beautiful smile brightens up my darkest days',
      image: 'assets/images/smile.jpg',
      unlockDate: new Date('2025-02-07'),
    },
    {
      id: 2,
      text: 'Your kindness towards others inspires me to be better',
      image: 'assets/images/kind.jpg',
      unlockDate: new Date('2025-02-08'),
    },
    {
      id: 3,
      text: 'Your kindness towards others inspires me to be better',
      image: 'assets/images/kind.jpg',
      unlockDate: new Date('2025-02-09'),
    },
    {
      id: 4,
      text: 'Your kindness towards others inspires me to be better',
      image: 'assets/images/kind.jpg',
      unlockDate: new Date('2025-02-10'),
    },
    {
      id: 5,
      text: 'Your kindness towards others inspires me to be better',
      image: 'assets/images/kind.jpg',
      unlockDate: new Date('2025-02-11'),
    },
    {
      id: 6,
      text: 'Your kindness towards others inspires me to be better',
      image: 'assets/images/kind.jpg',
      unlockDate: new Date('2025-02-12'),
    },
    {
      id: 7,
      text: 'Your kindness towards others inspires me to be better',
      image: 'assets/images/kind.jpg',
      unlockDate: new Date('2025-02-13'),
    },
    {
      id: 8,
      text: 'Your kindness towards others inspires me to be better',
      image: 'assets/images/kind.jpg',
      unlockDate: new Date('2025-02-14'),
    },
  ];

  getReason(id: number): Reason | undefined {
    return this.reasons.find((reason) => reason.id === id);
  }

  getAllReasons(): Reason[] {
    return this.reasons;
  }

  isUnlocked(reason: Reason): boolean {
    return new Date() >= reason.unlockDate;
  }
}
