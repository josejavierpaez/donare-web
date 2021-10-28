import { EnglishData } from './EnglishData';
import { SpanishData } from './SpanishData';
export class DataFactory {
  static getData(lenguage) {
    return lenguage.toLowerCase() === 'en'
      ? new EnglishData()
      : new SpanishData();
  }
}
