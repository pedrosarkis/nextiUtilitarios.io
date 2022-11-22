const mountResult = seconds => ({hours: extractHoursFromSeconds(seconds), minutes: extractMinutesFromSeconds(seconds)});

const normalizeHoursAndMinutes = (hours, minutes) => [...hours.map(hour => hour * 3600), ...minutes.map(minute => minute * 60)];

const sumHoursAndMinutes = ({hours, minutes}) => mountResult(normalizeHoursAndMinutes(hours, minutes).reduce((acc, curr) => acc + curr, 0));

const decreaseHoursAndMinutes = ({hours, minutes}) => mountResult(hours.map((hour, index) =>  hour * 3600 + minutes[index] * 60).reduce((acc, curr) => acc - curr));
    //Aqui tem que ver bem , pois existem vários comportamentos possíveis ( e não errados ) para uma subtração em massa.

// const sum = ({ hour1 = 0, hour2 = 0, minute1 = 0, minute2 = 0 }) => {
//     const sumHours = hourToSeconds(hour1) + hourToSeconds(hour2);
//     const sumMinutes = minutesToSeconds(minute1) + minutesToSeconds(minute2);
//     return mountResult(sumHours + sumMinutes);
// };

// const decrease = ({ hour1 = 0, hour2 = 0, minute1 = 0, minute2 = 0 }) => {
//     const sumFirstLine = hourToSeconds(hour1) + minutesToSeconds(minute1);
//     const sumSecondLine = hourToSeconds(hour2) + minutesToSeconds(minute2);

//     return mountResult(sumFirstLine - sumSecondLine);
// };

const reset = (setTime) => {
    setTime({});
    return {};
};

const calcNightlyFactor = ({ hours, minutes }) => {
    const minutesInSeconds = minutes ? minutesToSeconds(minutes) : 0;
    const totalSeconds = hours ? hourToSeconds(hours) + minutesInSeconds : minutesInSeconds;

    return !minutesInSeconds && !totalSeconds ? {} : mountResult(totalSeconds * getNightlyFactor());
};

const removeNightlyFactor = ({ hours, minutes }) => {
    const minutesInSeconds = minutes ? minutesToSeconds(minutes) : 0;
    const totalSeconds = hours ? hourToSeconds(hours) + minutesInSeconds : minutesInSeconds;

    return !minutesInSeconds && !totalSeconds ? {} : mountResult(Math.ceil(totalSeconds / getNightlyFactor()));
};

const converterToCentesimal = time => {
    if (!time) return false;
    const [hours, minutes] = removeUnderline(time).split(":");
    return `${hours}.${Math.floor(minutes * 1.67)}`;
};

const converterToSexagesimal = time => {
    if (!time) return false;
    let [hours, minutes] = removeUnderline(time).split(".");
    return `${hours}:${Math.round(minutes / 1.67)
        .toString()
        .padStart(2, 0)}`;
};

const secondsToHoursAndMinutes = (totalSeconds) => {
    return `${extractHoursFromSeconds(totalSeconds).toString().padStart(2, 0)}:${extractMinutesFromSeconds(totalSeconds).toString().padStart(2, 0)}`;
};

const hourToSeconds = hour => hour * 3600;

const minutesToSeconds = minutes => minutes * 60;

const removeUnderline = string => string.replaceAll("_", "0");

const extractHoursFromSeconds = seconds => seconds > 0 ? Math.floor(seconds / 3600) : Math.floor(Math.abs(seconds) / 3600) * -1; 

const extractMinutesFromSeconds = seconds => seconds > 0 ?  Math.floor((seconds % 3600) / 60) :  Math.floor((Math.abs(seconds) % 3600) / 60) * -1;

const getNightlyFactor = () => 8 / 7;

export {reset, extractHoursFromSeconds, extractMinutesFromSeconds, calcNightlyFactor, removeNightlyFactor, converterToCentesimal, converterToSexagesimal, secondsToHoursAndMinutes, removeUnderline, sumHoursAndMinutes, decreaseHoursAndMinutes };
