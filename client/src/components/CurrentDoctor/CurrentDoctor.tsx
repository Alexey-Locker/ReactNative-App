/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Room, {IRoom} from '../Room/Room';
import {GET_ALL_DOCTORS} from '../../https/query/Doctor';
import {IDoctor} from '../../types/OtherTypes';
import {scale, verticalScale} from '../../assets/SizeControl/SizeControl';

export default function CurrentDoctor() {
  const {data, loading, error} = useQuery(GET_ALL_DOCTORS);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setDoctors(data.getAllDoctors);
      }
    }
  }, [data, loading, error]);

  return (
    <>
      {doctors.length ? (
        doctors.map((doctor: IDoctor) => (
          <View
            key={doctor.id}
            style={{
              minHeight: verticalScale(502),
              borderBottomWidth: scale(9),
              borderBottomColor: '#fff',
            }}>
            <View style={styles.doctorInfoWrapper}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorProf}>{doctor.specialization}</Text>
              <TouchableOpacity style={styles.resetBtn}>
                <Text
                  style={{
                    color: '#6AC7BE',
                    fontSize: scale(12),
                    fontWeight: '500',
                    lineHeight: verticalScale(18),
                  }}>
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: verticalScale(61),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: scale(15)}}>
                  <Text
                    style={{
                      color: '#212155',
                      fontWeight: '500',
                      fontSize: scale(18),
                      lineHeight: verticalScale(27),
                    }}>
                    -
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    marginRight: scale(15),
                    color: '#FC7E55',
                    fontWeight: '500',
                    fontSize: scale(18),
                    lineHeight: verticalScale(27),
                  }}>
                  5
                </Text>
                <TouchableOpacity style={{marginRight: scale(19)}}>
                  <Text
                    style={{
                      color: '#212155',
                      fontWeight: '500',
                      fontSize: scale(18),
                      lineHeight: verticalScale(27),
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: '#969696',
                      fontWeight: '500',
                      fontSize: scale(14),
                      lineHeight: verticalScale(21),
                    }}>
                    in line
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.stopBtn}>Stop the line</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rooms}>
              {doctor.rooms &&
                doctor.rooms.map((room: IRoom) => (
                  <Room key={room.id} room={room} />
                ))}
            </View>
          </View>
        ))
      ) : (
        <View>
          <Text>No doctors available yet</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  doctorInfoWrapper: {
    height: verticalScale(100),
    borderBottomColor: '#C0E7E5',
    borderBottomWidth: 1,
    paddingTop: scale(20),
    paddingBottom: scale(20),
  },
  doctorName: {
    fontWeight: '500',
    fontSize: scale(18),
    lineHeight: verticalScale(21),
    color: '#212121',
    marginBottom: scale(10),
  },
  doctorProf: {
    fontWeight: '500',
    fontSize: scale(14),
    lineHeight: verticalScale(21),
    color: '#4F4F4F',
  },
  resetBtn: {
    position: 'absolute',
    right: scale(16),
    top: scale(21),
    borderWidth: 1,
    borderColor: '#6AC7BE',
    borderRadius: scale(8),
    paddingRight: scale(13),
    paddingLeft: scale(13),
    paddingTop: scale(3),
    paddingBottom: scale(3),
  },
  stopBtn: {
    color: '#FC7E55',
    fontWeight: '500',
    fontSize: scale(12),
    lineHeight: verticalScale(18),
    borderWidth: 1,
    borderColor: '#FC7E55',
    borderRadius: scale(20),
    paddingRight: scale(13),
    paddingLeft: scale(13),
    paddingTop: scale(3),
    paddingBottom: scale(3),
  },
  rooms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
});
