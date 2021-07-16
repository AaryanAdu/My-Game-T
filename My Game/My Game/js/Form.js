class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.rules = createElement('h2')
    this.warn = createElement('h2')
    this.story = createElement('h3')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.rules.hide();
    this.warn.hide();
    this.story.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/3 -100, -100);
    this.title.style('font-size', '100px');
    this.title.style('color', 'red');
    this.rules.html("!Stay Away From The Monsters & Road Blocks!")
    this.rules.position(displayWidth/2 - 150, displayHeight/8)
    this.rules.style('color', 'pink');
    this.warn.html("!Do Not Come Near Each Other's Cars!")
    this.warn.position(displayWidth/2 - 150, displayHeight/6)
    this.warn.style('color', 'pink');
    this.story.html("Story: You Stuck In An Alien World And You Are Triying To Get Out Of There. Only The One Who Reaches The End First Can Go Back To Earth.")
    this.story.position(displayWidth/2 - 700, displayHeight/1.5)
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.input.style('background', 'lavender');
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.button.style('height', '40px');
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
