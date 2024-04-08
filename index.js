const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

const [sound1, sound2, sound3, sound4, sound5] = ['moo', 'neighs', 'baa', 'oink', 'clucking']

const [animal1, animal2, animal3, animal4] = ['bessie', 'dolly', 'babe', 'little']

const [color1, color2, color3] = ['blackandwhite', 'black', 'pink']

// Arrays

const [red, orange, yellow, green, blue, indigo, violet] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const [r, o, y, g, b, i] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo']

const [indg] = ['indigo']

// Objects

const { song1, song2, song3, song4, } = { song1: 'Rainbow Connection', song2: 'Moving Right Along', song3: 'Never Before, Never Again', song4: 'I Hope That Something Better Comes Along'}

const { song2, song4, kermit: { job, partner } } = { song1: 'Rainbow Connection', song2: 'Moving Right Along', song3: 'Never Before, Never Again', song4: 'I Hope That Something Better Comes Along', kermit: { job: 'Host of The Muppet Show', partner: 'Miss Piggy' } }