import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {QueryClient, QueryClientProvider} from 'react-query';

const Main: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
};

export default Main;
