import { makeAutoObservable } from 'mobx';
import { baseUrl } from '../utils/constants';
import { Analytics } from '../utils/types';

class Store {
  isLoading: boolean = false;
  pipeline: string = '';
  period: string = '';
  analytics: Analytics | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPipeline = (newValue: string) => {
    this.pipeline = newValue;
  };

  setPeriod = (newValue: string) => {
    this.period = newValue;
  };

  getAnalytics = async () => {
    const params = new URLSearchParams();
    this.pipeline && params.append('pipeline', this.pipeline);
    this.period && params.append('period', this.period);

    try {
      const response = await fetch(`${baseUrl}/analytics?${params}`);
      this.analytics = await response.json();
    } catch (e) {
      alert('Enable JSON server: yarn startServer');
    }
  };
}

const store = new Store();

const { analytics, setPipeline, setPeriod, getAnalytics } = store;

export { store, analytics, setPipeline, setPeriod, getAnalytics };
