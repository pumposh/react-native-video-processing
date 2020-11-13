export const resizeSize = (width, ratio) => {
  const height = Math.round(width / ratio);
  return {
    width,
    height,
  };
};

export const videoPreviewSize = size => {
  const MAX_WIDTH = 320;
  if (size.width > MAX_WIDTH) {
    return resizeSize(MAX_WIDTH, size.width / size.height);
  } else {
    return {
      width: size.width,
      height: size.height,
    };
  }
};
