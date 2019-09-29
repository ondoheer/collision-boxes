import { gameOver } from "./drawings/generalDrawings.js";

/**
 * Returns a canvas and it's properties
 * @param {HTML id string} htmlIdAttribute
 */
const canvasBuilder = htmlIdAttribute => {
  const element = document.getElementById(htmlIdAttribute);
  const ctx = element.getContext("2d");
  return { element, ctx, height: element.height, width: element.width };
};

class Game {
  constructor(htmlIdAttribute) {
    this.canvas = canvasBuilder(htmlIdAttribute);
    this.drawings = {
      gameOver
    };
  }
}

const g = new Game("game");
g.drawings.gameOver(g.canvas.ctx);
