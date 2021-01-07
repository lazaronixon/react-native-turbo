import { NativeModules, NativeEventEmitter } from 'react-native';
import type { Visitable, Options } from './types';

const manager = NativeModules.TurboManager;

const emitter = new NativeEventEmitter(manager);

export default class Turbo {
  static startSingleScreenApp(
    visitable: Visitable,
    options?: Partial<Options>
  ) {
    manager.startSingleScreenApp(visitable, options);
  }

  static visit(visitable: Visitable) {
    manager.visit(visitable);
  }

  static addEventListener(type: string, handler: (data: any) => void) {
    emitter.addListener(type, handler);
  }

  static removeEventListener(type: string, handler: (data: any) => void) {
    emitter.removeListener(type, handler);
  }
}
