import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useQueryClient } from 'react-query';
import styles from './styles';

const RenderRow = (props) => {
  const { item } = props;
  const queryClient = useQueryClient();

  const handleDelete = (id) => {
    const movieListData = queryClient.getQueryState('movieList')?.data ?? [];
    const newList = movieListData.filter((item) => item.id !== id);
    queryClient.setQueryData('movieList', newList);
  }

  return (
    <View style={styles.renderRowView}>
      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{item.title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons
            name="star"
            style={styles.starIcon}
          />
          <Text style={styles.starIcon}>
            {' '}7.7 {'   '}</Text>

          <Text style={styles.voteStyle}>
            {item.rt_score} votes</Text>
        </View>

        <Text style={styles.dateStyle}>{item.release_date}</Text>
      </View>
      <View style={{ marginTop: 10, paddingLeft: 20 }}>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Ionicons
            name="trash"
            style={{ fontSize: 40, color: 'red' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderRow;