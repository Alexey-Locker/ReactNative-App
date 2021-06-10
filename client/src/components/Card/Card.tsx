import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EditSvg from '../../assets/images/Edit.svg';
import AlertsEllipse from '../AlertsEllipse/AlertsEllipse';
interface CardProps {
  item: {
    id: number;
    name: String;
    color: String;
    index: number;
  };
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 15,
  },
  key: {
    width: '10%',
    height: '100%',
    backgroundColor: 'rgba(106, 199, 190, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 16,
  },
  wrapperBody: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '4.444%',
    paddingRight: '3.9111%',
    width: '90%',
  },
  wrapperOptins: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  svg: {
    width: 19,
    height: 19,
    marginLeft: 17.92,
  },
});

export default function Card({item, index}: CardProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.key}>
        <Text style={styles.text}>{index}</Text>
      </View>
      <View style={styles.wrapperBody}>
        <Text style={styles.text}>{item.name}</Text>
        <View>
          <View style={styles.wrapperOptins}>
            <AlertsEllipse color={item.color} />
            <EditSvg style={styles.svg} />
          </View>
        </View>
      </View>
    </View>
  );
}
