/* global Phaser */

// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Nov 8 2022
// This is the Phaser3 game configuration file

import SplashScene from "./splashScene.js";
import TitleScene from "./titleScene.js";

// our game scenes
const splashScene = new SplashScene();
const titleScene = new TitleScene();

//* Game score */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background color
  backgroundColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);

// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add("splashScene", splashScene);
game.scene.add("titleScene", titleScene);

// start title
game.scene.start("splashScene");
