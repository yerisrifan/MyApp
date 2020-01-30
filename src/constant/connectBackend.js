import axios from 'axios';
import {LOCAL, ONLINE} from '../config';

export const toBackend = async path => {
  return new Promise((resolve, reject) => {
    axios
      .get(LOCAL + path)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
