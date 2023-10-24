import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import useSelectedTabStore from '../services/store/tabState';
import useBooksCRUD from '../services/api/hooks/bookHooks';

const HomeScreen: React.FC = () => {
  const {activeTab, setActiveTab} = useSelectedTabStore();
  const activeText = 'font-medium text-center text-green';
  const inactiveText = 'text-center';
  const activeButton = 'bg-green';
  const {data: books, isError} = useBooksCRUD();

  //Render data here after fetching
  const renderContents = () => {
    if (isError) {
      return (
        <View>
          <Text className="text-center pb-4 text-base">
            {'Unexpected error from database.'}
          </Text>
        </View>
      );
    }

    return (
      <View>
        <Text className="text-center pb-4 text-base">
          {books?.[activeTab].id}
        </Text>
        <Text className="text-center pb-4 text-base">
          {books?.[activeTab].title}
        </Text>
        <Text className="text-center pb-4 text-base">
          {books?.[activeTab].author}
        </Text>
        <Text className="text-center pb-4 text-base">
          {books?.[activeTab].publishedDate}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 justify-items-center bg-white">
      <View className="flex-row border-b-8 border-green">
        <TouchableOpacity
          onPress={() => setActiveTab(1)}
          className={
            'flex-1 content-center pb-4' +
            `${activeTab === 1 ? activeButton : ''}`
          }>
          <Text className={activeTab === 1 ? activeText : inactiveText}>
            First
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab(2)}
          className={
            'flex-1 content-center pb-4' +
            `${activeTab === 2 ? activeButton : ''}`
          }>
          <Text className={activeTab === 2 ? activeText : inactiveText}>
            Second
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab(3)}
          className={
            'flex-1 content-center pb-4' +
            `${activeTab === 3 ? activeButton : ''}`
          }>
          <Text className={activeTab === 3 ? activeText : inactiveText}>
            Third
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 items-center justify-center">
        {renderContents()}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
