import React, { useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NativeBaseProvider } from "native-base";
import Navigation from './navigation';
import { AppState } from 'react-native';



const queryClient = new QueryClient();

// if (__DEV__) {
//   import('react-query-native-devtools').then(({ addPlugin }) => {
//     addPlugin({ queryClient });
//   });
// }

const App = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};

export default App;
