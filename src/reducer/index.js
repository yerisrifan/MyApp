import {CHANGE, PLAY, SET_AUDIO} from '../action';

const initialState = {
  isPaused: false,
  isLoading: false,
  selectedId: 'oPr_fiukArQ',
  isChanging: false,
  audioData: {
    title: 'KH ANWAR ZAHID TERBARU 2020  KRANGGAN MALANG lucu poll',
    author: 'MUNILUQ STORY',
    streamUrl: 'http://localhost:5000/api/audio/XsX3ATc3FbA/stream',
    poster:
      'https://i.ytimg.com/vi/oPr_fiukArQ/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDNww9XNn9w0JftBLgjijYhpgALlg',
    url:
      'https://r3---sn-p5qs7nel.googlevideo.com/videoplayback?expire=1580344382&ei=3s8xXpCXNYbh8wTJ_pvYCw&ip=54.174.122.79&id=o-AOklsvUsVAMBmVMRuzRof0uzP1adXslZCMdfKNawn7e9&itag=140&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-p5qs7nel%2Csn-vgqsrn76&ms=au%2Conr&mv=m&mvi=2&pl=15&initcwndbps=622500&vprv=1&mime=audio%2Fmp4&gir=yes&clen=92143475&dur=5693.486&lmt=1580089725804590&mt=1580322707&fvip=3&keepalive=yes&fexp=23842630&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ALgxI2wwRgIhAK8CHf-A4VCu3p-NSc_YN2kMzNfZsLq4lDgEsJlpiTsgAiEA4qt0zrK3gahWQeiw2yCj_J4bF6x882yI2dB10dQlrk4%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRgIhAOQaIMr8GnteGkS4Uo4QuANS7CTmLTGV3EZM95bcZJ3dAiEAknXwYLsvGkGFpSDPnzVVVl83XEeQ8zw470jZG4PbRaE%3D&ratebypass=yes',
  },
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        isPaused: action.payload,
      };
    case CHANGE:
      return {
        ...state,
        isChanging: !action.payload,
      };
    case SET_AUDIO:
      return {
        ...state,
        audioData: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
