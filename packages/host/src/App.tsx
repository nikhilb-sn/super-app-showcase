import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {Federated} from '@callstack/repack/client';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import SplashScreen from './components/SplashScreen';
import ErrorBoundary from './components/ErrorBoundary';
import { Button, SafeAreaView ,View } from 'react-native';
import { Text } from 'react-native-paper';

const AuthProvider = React.lazy(() =>
  Federated.importModule('auth', './AuthProvider'),
);
const SignInScreen = React.lazy(() =>
  Federated.importModule('auth', './SignInScreen'),
);

const App = () => {

  return (
    // <SafeAreaView>
    //   <Button title="Login" mode="contained" testID="welcomeText" onPress={ () => {
    //     console.log("Test")
    //   }}>
    //     Login
    //   </Button>
    // </SafeAreaView>
    <ErrorBoundary name="AuthProvider">
      <React.Suspense fallback={<SplashScreen />}>
        <AuthProvider>
          {(authData: {isSignout: boolean; isLoading: boolean}) => {
            // if (authData.isLoading) {
            //   return <SplashScreen />;
            // }

            // if (false) {
            //   return (
            //     <React.Suspense fallback={<SplashScreen />}>
            //       <SignInScreen />
            //     </React.Suspense>
            //   );
            // }

            return (
              <NavigationContainer
                onReady={() => RNBootSplash.hide({fade: true, duration: 500})}>
                <MainNavigator />
              </NavigationContainer>
            );
          }}
        </AuthProvider>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
