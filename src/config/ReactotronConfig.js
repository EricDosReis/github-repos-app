import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const reactotron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = reactotron;

  reactotron.clear();
}
