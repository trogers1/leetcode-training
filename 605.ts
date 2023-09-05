function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let availableSpots = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      continue;
    }
    if (i === 0 && flowerbed.length === 1) {
      availableSpots++;
      continue;
    }
    if (i === 0 && flowerbed[i + 1] === 0) {
      availableSpots++;
      continue;
    }
    if (i === flowerbed.length - 2 && flowerbed[i + 1] === 0) {
      availableSpots++;
      continue;
    }

    if (flowerbed[i + 1] === 0 && flowerbed[i + 2] === 0) {
      availableSpots++;
      i++;
    }
  }

  return availableSpots >= n;
}

export { canPlaceFlowers };
