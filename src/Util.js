export const dateUtil = timeString => {
  const y = new Date().getFullYear().toString();

  const h = new Date(`${y}T${timeString}`).getHours();
  const m = new Date(`${y}T${timeString}`).getMinutes();
  const s = new Date(`${y}T${timeString}`).getSeconds();

  const fullTime = `${y}T${h < 10 ? '0' + h : h.toString()}:${  m < 10 ? '0' + m : m.toString()}:${s < 10 ? '0' + s : s.toString()}`;

  console.log(fullTime, h, m, s);

  return fullTime;
};

export const timeDiffString = (timeString, timediff) => {
  const y = new Date().getFullYear().toString();

  const h = Math.abs((new Date(timeString).getHours() + timediff) % 24);
  const m = new Date(timeString).getMinutes();
  const s = new Date(timeString).getSeconds();

  const fullTime = `${y}T${h < 10 ? '0' + h : h.toString()}:${m < 10 ? '0' + m : m.toString()}:${s < 10 ? '0' + s : s.toString()}`;

  return fullTime;
};

