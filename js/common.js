const countItem = (slotNumber, itemId) => {
  let c = 0;
  for (let index = 0; index < parseInt(slotNumber) + 1; index++) {
    const item = selectedMyFleetList[selectedFleetNum].item[index];
    if (!item) continue;
    if (item.id == itemId) {
      c++;
    }
  }
  return c;
};
