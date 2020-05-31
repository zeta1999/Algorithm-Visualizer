const [screenWidth, screenHeight] = [window.innerWidth, window.innerHeight];
const PADDING = 40;
let width, height;

export const getDimensions = (nodeSize) => {
  let size = nodeSize ? nodeSize : defaultNodeSize();

  [width, height] = [
    Math.floor((screenWidth - PADDING) / size),
    Math.floor((screenHeight - PADDING) / size),
  ];

  return [width, height];
};

export const getMax = () => {
  if (screenWidth > 1450) {
    [width, height] = [
      Math.floor((screenWidth - 40) / 20),
      Math.floor((screenHeight - 40) / 20),
    ];
  } else if (screenWidth > 900) {
    [width, height] = [
      Math.floor((screenWidth - 40) / 30),
      Math.floor((screenHeight - 40) / 30),
    ];
  } else {
    [width, height] = [
      Math.floor((screenWidth - 40) / 40),
      Math.floor((screenHeight - 40) / 40),
    ];
  }
  // return [width, height];
  return [400, 400];
};

export const defaultNodeSize = () => {
  let nodeSize;

  if (screenWidth > 1450) {
    nodeSize = 20;
  } else if (screenWidth > 900) {
    nodeSize = 30;
  } else {
    nodeSize = 40;
  }
  return nodeSize;
};

export default getDimensions;
