import axios from 'axios';
export const PLAY = 'PLAY';
export const CHANGE = 'CHANGE';
export const STOP = 'STOP';
export const FOWARD = 'FOWARD';
export const BACK = 'BACK';
export const GET_AUDIO = 'GET_AUDIO';
export const SET_AUDIO = 'GET_AUDIO';

export function playNow(payload) {
  console.log('paused? ', payload);
  return {
    type: PLAY,
    payload,
  };
}

export function changeNow(payload) {
  console.log('paused? ', payload);
  return {
    type: CHANGE,
    payload,
  };
}

export async function getAudioData(videoid) {
  const base = 'http://localhost:5000/api/audio/' + videoid;
  const getData = await axios.get(base);
  const get = await getData.data;
  return get;
}

export function setAudio(payload) {
  console.log('Set Audio', payload);
  return {
    type: SET_AUDIO,
    payload,
  };
}
