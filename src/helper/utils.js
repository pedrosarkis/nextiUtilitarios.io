import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");
const convertDate = (date, format) => moment(date).format(format);

const getWeeklyDay = (date) => {
    const weeklyDay = moment(date).format("dddd");
    return `${weeklyDay.slice(0, 1).toLocaleUpperCase()}${weeklyDay.slice(1, weeklyDay.length)}`;
};

export { convertDate, getWeeklyDay };
