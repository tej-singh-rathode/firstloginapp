import React, { useEffect, useRef, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NativeBaseProvider } from "native-base";
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Navigation from './navigation';

const queryClient = new QueryClient();

const App = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === "active") {
        console.log("App has come to the foreground!");
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    if (appStateVisible !== 'active') {
      AsyncStorage.setItem('time', new Date())
    } else {
      AsyncStorage.getItem('time').then((value) => {
        var diff = Math.abs(new Date(value) - new Date());
        var minutes = Math.floor((diff / 1000) / 60);
        if (minutes > 2) {
          AsyncStorage.removeItem('user_id')
          AsyncStorage.removeItem('time')
        }
      });
    }
  }, [appStateVisible])

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default App;
