export const convertirFecha = (myDate) => {
  let month = new Array();
  month[0] = 'Ene';
  month[1] = 'Feb';
  month[2] = 'Mar';
  month[3] = 'Abr';
  month[4] = 'May';
  month[5] = 'Jun';
  month[6] = 'Jul';
  month[7] = 'Ago';
  month[8] = 'Sep';
  month[9] = 'Oct';
  month[10] = 'Nov';
  month[11] = 'Dec';
  return (
    myDate.getDate() +
    ' ' +
    month[myDate.getMonth()] +
    ' ' +
    myDate.getFullYear()
  );
};
