export const findObjInArray = (
  items,
  objPropName,
  actionProps,
  newObjProps
) => {
  return items.map((obj) => {
    if (obj[objPropName] === actionProps) {
      return { ...obj, ...newObjProps };
    }
    return obj;
  });
};
