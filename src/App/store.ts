import { makeAutoObservable, runInAction } from 'mobx';
import { baseUrl, periodKey, pipelineKey } from '../utils/constants';
import { Analytics, AnalyticsRespsonse } from '../utils/types';

class Store {
  initialized: boolean = false;
  isLoading: boolean = false;
  pipeline: string = 'all';
  period: string = 'all';
  analytics: Analytics | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPipeline = (newValue: string) => {
    this.pipeline = newValue;
    localStorage.setItem(pipelineKey, newValue);
  };

  setPeriod = (newValue: string) => {
    this.period = newValue;
    localStorage.setItem(periodKey, newValue);
  };

  initialize = () => {
    const pipeline = localStorage.getItem(pipelineKey) || 'all';
    const period = localStorage.getItem(periodKey) || 'all';

    this.pipeline = pipeline;
    this.period = period;
    this.initialized = true;
  };

  getAnalytics = async () => {
    this.isLoading = true;

    const params = new URLSearchParams();
    params.append('pipeline', this.pipeline);
    params.append('period', this.period);

    try {
      const response = await fetch(`${baseUrl}/analytics?${params}`);
      const data: AnalyticsRespsonse[] = await response.json();

      runInAction(() => {
        /* беру 0 элемент, т.к фильтрация в JSON-server'e работает только по массиву */
        this.analytics = data[0].result;
        this.isLoading = false;
      });
    } catch (e) {
      this.analytics = null;
      this.isLoading = false;
      alert('Enable JSON server: yarn startServer');
    }
  };
}

const store = new Store();

const { setPipeline, setPeriod, getAnalytics, initialize } = store;

export { store, setPipeline, setPeriod, getAnalytics, initialize };
