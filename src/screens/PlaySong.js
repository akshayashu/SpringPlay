import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/GlobalStyle';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import { DIMENS } from '../styles/Dimens';
import { COLORS } from '../styles/Color';
import { Audio, AVPlaybackStatus, Video } from 'expo-av';
import SongPlayer from '../helper/SongPlayer';

const LOOPING_TYPE_ALL = 0;
const LOOPING_TYPE_ONE = 1;

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");
const BACKGROUND_COLOR = "#FFF8ED";
const DISABLED_OPACITY = 0.5;
const FONT_SIZE = 14;
const LOADING_STRING = "... loading ...";
const BUFFERING_STRING = "...buffering...";
const RATE_SCALE = 3.0;
const VIDEO_CONTAINER_HEIGHT = (DEVICE_HEIGHT * 2.0) / 5.0 - FONT_SIZE * 2;

export default function PlaySong({ navigation }) {

  const [songName, setSong] = useState('');
  const [songArtist, setArtist] = useState('');
  const [songURL, setURL] = useState(null);
  const [songLength, setSongLength] = useState(4 * 60 + 32);
  const [curLength, setCurLength] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [status, setStatus] = useState({
    showVideo: false,
    playbackInstanceName: LOADING_STRING,
    loopingType: LOOPING_TYPE_ALL,
    muted: false,
    playbackInstancePosition: null,
    playbackInstanceDuration: null,
    shouldPlay: false,
    isPlaying: false,
    isBuffering: false,
    isLoading: true,
    fontLoaded: false,
    shouldCorrectPitch: true,
    volume: 1.0,
    rate: 1.0,
    videoWidth: DEVICE_WIDTH,
    videoHeight: VIDEO_CONTAINER_HEIGHT,
    poster: false,
    useNativeControls: false,
    fullscreen: false,
    throughEarpiece: false
  });
  
  if (songName.length == 0 && navigation) {
    setSong(navigation.getParam('name'));
    setArtist(navigation.getParam('artists'));
    setURL(navigation.getParam('url'));
  }

  function pad(n, width, z = 0) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  function convertTime(length) {
    let min = Math.floor(length / 60)
    let sec = pad(Math.floor(length % 60), 2)

    return min + ":" + sec;
  }

  function getPlayingPercent() {
    return curLength;
  }

  const seek = (time) => {
    time = Math.round(time);
    audioElement && audioElement.seek(time);
    setCurLength(time);
    setPaused(false);
  }

  const { playbackObject } = Audio.Sound.createAsync(
    {
      uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/92/b2/9b/92b29b2b-739a-a9e4-d035-07f69f8759bd/mzaf_980294366142313263.plus.aac.ep.m4a"
    },
    { shouldPlay: true }
  ).then(async () => {
    console.log(await playbackObject.getStatusAsync());
  });

  return (

    <SafeAreaView style={globalStyles.container}>

      <LinearGradient
        colors={['rgba(18,18,18,0.25)', 'rgba(54,69,79,0.75)']}
        style={globalStyles.gradientBackground}
      />

      <ScrollView>
        <View style={[{ paddingLeft: 20, paddingRight: 20 }]}>

          {navigation ?

            <View style={globalStyles.containerCenter}>

              {/* top bar */}
              <View style={[globalStyles.flexRow, { width: '100%', justifyContent: 'space-between' }]}>
                <Ionicons
                  name='chevron-down'
                  size={24}
                  color='white'
                />
                <Text style={[globalStyles.textWhiteBold16, { marginTop: 10 }]}>Now Playing</Text>
                <Ionicons
                  name='ellipsis-vertical'
                  size={24}
                  color='white'
                />
              </View>

              {/* cover image */}
              <ImageBackground
                source={songURL}
                style={styles.coverImage}
                resizeMode='cover'
              />

              {/* song details */}
              <View style={[globalStyles.flexRow, { width: '100%', justifyContent: 'space-between' }]}>
                <View>
                  <Text style={[globalStyles.textWhiteBold20, { margin: 0 }]}>{songName}</Text>
                  <Text style={[globalStyles.textGray16, { margin: 0 }]}>{songArtist}</Text>
                </View>
                <Ionicons
                  name='heart-outline'
                  size={24}
                  color='white'
                />
              </View>

              {/* seekbar and controllers */}
              <Slider
                style={{ width: DIMENS.width - 20, height: 20, marginTop: 30 }}
                minimumValue={0}
                maximumValue={songLength}
                minimumTrackTintColor={COLORS.white}
                maximumTrackTintColor={COLORS.lightGray}
                value={getPlayingPercent()}
                thumbTintColor={COLORS.white}
                onSlidingComplete={(data) => {
                  // video.current.playFromPositionAsync(data);
                  if (paused) {
                    video.current.pauseAsync();
                    setPaused(!paused)
                  } else {
                    video.current.playAsync();
                    setPaused(!paused)
                  }

                }}
              />

              <View style={[globalStyles.flexRow, { width: '100%', justifyContent: 'space-between', margin: 0 }]}>
                <Text style={[globalStyles.textWhite16, { margin: 0, fontSize: 12 }]}>{convertTime(curLength)}</Text>
                <Text style={[globalStyles.textWhite16, { margin: 0, fontSize: 12 }]}>{convertTime(songLength)}</Text>
              </View>

              <View style={[globalStyles.flexRow, { width: '100%', justifyContent: 'space-around', marginTop: 20 }]}>
                <Ionicons
                  name='shuffle'
                  size={30}
                  color='white'
                />
                <Ionicons
                  name='play-skip-back'
                  size={30}
                  color='white'
                />
                <Ionicons
                  name='play-circle'
                  size={80}
                  color='white'
                />
                <Ionicons
                  name='play-skip-forward'
                  size={30}
                  color='white'
                />
                <Ionicons
                  name='repeat'
                  size={30}
                  color='white'
                />
              </View>

              <View style={[globalStyles.containerCenter, { flex: 1 }]}>

                <ImageBackground
                  style={{ width: DIMENS.width - 40, margin: 20, backgroundColor: COLORS.teal, borderRadius: 20 }}
                >
                  <Text style={[globalStyles.textWhiteBold20, { margin: 20 }]}>Lyrics</Text>
                  <Text style={[globalStyles.textWhite16, { marginTop: 40, alignSelf: 'center' }]}>We will implement this part later</Text>
                  <Text style={[globalStyles.textWhite20, { marginTop: 10, alignSelf: 'center' }]}>We will implement this part later</Text>
                  <Text style={[globalStyles.textWhiteBold20, { marginTop: 5, alignSelf: 'center' }]}>We will implement this part later</Text>
                  <Text style={[globalStyles.textWhite20, { marginTop: 5, alignSelf: 'center' }]}>We will implement this part later</Text>
                  <Text style={[globalStyles.textWhite16, { marginTop: 10, marginBottom: 50, alignSelf: 'center' }]}>We will implement this part later</Text>

                </ImageBackground>
              </View>
              {/* {videoComponent} */}
            </View>
            :
            <Text>Loading..</Text>
          }


        </View>
      </ScrollView>

    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10
  },
  coverImage: {
    height: DIMENS.width / 1.2,
    width: DIMENS.width / 1.2,
    marginTop: 100,
    marginBottom: 100
  }
});
