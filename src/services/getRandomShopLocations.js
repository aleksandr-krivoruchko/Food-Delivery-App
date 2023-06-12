function getRandomInt(num) {
  const fixedPart = Number(num.toFixed(2));
  const randomSign = Math.random() < 0.5 ? -1 : 1;
  const randomPart = fixedPart * randomSign * 0.001;
  return fixedPart + randomPart;
}

function getRandomShopLocation(location) {
  return {
    lat: getRandomInt(location.lat),
    lng: getRandomInt(location.lng),
  };
}

export default function getRandomShopLocations(marker) {
  return Array.from({ length: 3 }, () => getRandomShopLocation(marker));
}
