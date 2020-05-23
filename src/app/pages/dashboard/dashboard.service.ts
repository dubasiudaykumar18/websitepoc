import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  private toggleState$ = new BehaviorSubject(false);
  
  constructor() { }

  /**  
   * Method to set toggle state
   * */ 
  public setToggleState(state: boolean) {
    this.toggleState$.next(state);
  }

  /**
   * Method to get toggle state 
   */
  getToggleState () {
    return this.toggleState$.asObservable();
  } 
}
