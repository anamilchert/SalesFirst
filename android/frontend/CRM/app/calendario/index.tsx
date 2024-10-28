import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function CalendarioScreen() {
  return (
    <View style={styles.container}>
      <Calendar
        current={'2024-10-22'}
        markedDates={{
          '2024-10-22': { selected: true, marked: true, selectedColor: 'blue' },
          '2024-10-23': { marked: true },
          '2024-10-24': { marked: true, dotColor: 'red', activeOpacity: 0 },
          '2024-10-25': { disabled: true, disableTouchEvent: true }
        }}
        onDayPress={(day) => console.log('Dia selecionado', day)}
        monthFormat={'yyyy MM'}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        showWeekNumbers={true}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});