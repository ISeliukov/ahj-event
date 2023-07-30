export default class App {
  constructor(size) {
    this.gobl = document.createElement('div');
    this.gobl.classList.add('goblin');

    this.tekHole = 1;
    this.elemgobl = '';
	
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.wrapper.append(this.container);
    this.title = document.createElement('h1');
    this.title.classList.add('title');
    this.title.innerText = 'GOBLIN';
    this.container.append(this.title);
    this.masdiv = [];
    for (let i = 0; i < size * size; i += 1) {
      this.masdiv[i] = document.createElement('div');
      this.masdiv[i].classList.add('hole');
      this.masdiv[i].setAttribute('id', `hole${i}`);
      this.container.append(this.masdiv[i]);
    }
    this.gameStat = document.createElement('div');
    this.gameStat.classList.add('gamestat');
	this.container.append(this.gameStat);
    document.body.append(this.wrapper);
  }

  static getHole(ind) {
    return document.getElementById(`hole${ind}`);
  }

  moveGobl(ind) {
    this.elemgobl = App.getHole(ind);
    this.elemgobl.append(this.gobl);
  }

  gamePlay() {
    this.timerId = setInterval(() => {
      let newHole = this.tekHole;
      while (newHole === this.tekHole) {
        newHole = Math.floor(Math.random() * this.masdiv.length);
      }
      this.tekHole = newHole;
      this.moveGobl(this.tekHole);
    }, 1000);
  }
}