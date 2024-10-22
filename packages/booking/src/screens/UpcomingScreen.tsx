import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Avatar, Button, Card, Divider} from 'react-native-paper';
import upcomingBookings from '../data/upcomingBookings.json';

const renderItem = ({item, index}: any) => (
  <Card mode="contained">
    <Card.Title
      data-testid={`cardTitle_${index}`}
      accessibilityLabel={`cardTitle_${index}`}
      titleVariant="titleMedium"
      subtitleVariant="bodyMedium"
      title={`${item.title} • ${item.provider}`}
      subtitle={`${item.date} ${item.time}`}
      left={props => <Avatar.Icon {...props} icon="calendar" />}
    />
    {/* <View>
      <Text testID={`cardTitle_${index}`}>{`${item.title} • ${item.provider}`}</Text>
      <Text>{`${item.date} ${item.time}`}</Text>
    </View> */}
    <Card.Actions>
      <Button mode="text" onPress={() => {}}>
        Cancel
      </Button>
      <Button mode="contained" onPress={() => {}}>
        Reschedule
      </Button>
    </Card.Actions>
  </Card>
);

const renderDivider = () => <Divider style={styles.divider} />;

const UpcomingScreen = () => {
  return (
    <FlatList
      data={upcomingBookings.data}
      renderItem={renderItem}
      ItemSeparatorComponent={renderDivider}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
  },
  divider: {
    backgroundColor: 'transparent',
    height: 8,
  },
});

export default UpcomingScreen;
