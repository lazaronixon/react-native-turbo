import { NativeModules } from 'react-native';

type TurboType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Turbo } = NativeModules;

export default Turbo as TurboType;
