import './css/style.css';
import App from './js/app';
import Play from './js/play';

const app = new App(4);
app.gamePlay();
const play = new Play(app);
play.init();

// entry point for webpack
