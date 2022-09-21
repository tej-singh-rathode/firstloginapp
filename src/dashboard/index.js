import { View, Text, TextInput, FlatList, StatusBar, TouchableOpacity, AppState } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import { getMovieList } from '../services/movieList';
import { useQuery, useQueryClient } from 'react-query';
import RenderRow from './renderRow';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _BackgroundTimer from 'react-native-background-timer';
import styles from './styles';

const Dashboard = () => {
  const queryClient = useQueryClient();
  const [movieData, setMovieData] = useState([])
  const [search, setSearch] = useState('');

  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
       console.log(appState.current,'current state')
      
    });

    return () => {
      subscription.remove();
    };
  });

  const { refetch } = useQuery('movieList', () => getMovieList(), {
    onSuccess: (res) => {
      setMovieData(res)
    }
  })

  const data = queryClient.getQueryState('movieList')?.data

  useEffect(() => {
    refetch()
  }, [])

  const clearSearch = () => {
    setSearch('')
    setMovieData(data)
  }

  const searchName = (text) => {
    setSearch(text)
    const fData = filterList(text);
    setMovieData(fData)
  }

  const filterList = ({ text }) => {
    if (text === '') {
      return data;
    }
    return (data.filter(item => {
      return (item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1)
    }));
  }

  const keyExtractor = (item, index) => `movie-${index}-${item.id}`;

  const renderItem = ({ item }) => {
    return (
      <RenderRow item={item} />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#030302"
      />
      <View style={styles.viewIcon}>
        <Ionicons
          name="arrow-back"
          style={styles.arrowIcon}
        />
      </View>
      <View style={styles.mainView}>
        <View style={styles.searchView}>
          <FontAwesome5 name="search" size={20} style={styles.searchIcon} />
          <TextInput
            name="search"
            style={{ width: 200 }}
            onChangeText={(text) => searchName({ text })}
            value={search}
          />
          <TouchableOpacity onPress={clearSearch}>
            <Ionicons
              name="close"
              style={{ fontSize: 30 }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={clearSearch}>
          <Text style={{ fontSize: 18 }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.movieText}>
        <Text style={{ fontSize: 22, marginRight: 15 }}>Movie</Text>
        <Text style={{ fontSize: 22, color: '#ccc8c8' }}>Person</Text>
      </View>

      <FlatList
        keyExtractor={keyExtractor}
        data={movieData}
        renderItem={renderItem}
      />

    </View>
  )
}

export default Dashboard