let months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

class DateControl {
    getDay(date) {
        let d;
        if (!date) {
            d = new Date().getDate()
        } else if (!date instanceof Date) {
            date = new Date(date);
        }
        d = date.getDate();
        return d < 10 ? '0' + d : d;
    }
    getMonth(date) {
        let m;
        if (!date) {
            m = new Date().getMonth() + 1;
        } else if (!date instanceof Date) {
            date = new Date(date);
        }
        m = date.getMonth() + 1;
        return m < 10 ? '0' + m : m;
    }
    getMonthExt(date = null) {
        if (!(date instanceof Date)) {
            return months[date - 1]
        }
        return months[date_control.getMonth(date) - 1];
    }
    getYear(date) {
        if (!date) {
            return new Date().getFullYear()
        } else if (!date instanceof Date) {
            date = new Date(date);
        }
        return date.getFullYear();
    }
    getDate(date) {
        const date_control = new DateControl();
        let d = date_control.getDay(date),
            m = date_control.getMonth(date),
            y = date_control.getYear(date);
        return (d + '/' + m + '/' + y);
    }
    getDateEN(date) {
        const date_control = new DateControl();
        let d = date_control.getDay(date),
            m = date_control.getMonth(date),
            y = date_control.getYear(date);
        return (y + '-' + m + '-' + d);
    }
    getHour(date) {
        let h;
        if (!date) {
            h = new Date().getHours()
        } else if (!date instanceof Date) {
            date = new Date(date);
        }
        h = date.getHours();
        return h < 10 ? '0' + h : h;
    }
    getMinute(date) {
        let m;
        if (!date) {
            date = new Date().getMinutes()
        } else if (!date instanceof Date) {
            date = new Date(date);
        }
        m = date.getMinutes();

        return m < 10 ? '0' + m : m;
    }
    getSecond(date) {
        let s;
        if (!date) {
            s = new Date().getSeconds()
        } else if (!date instanceof Date) {
            date = new Date(date);
        }
        s = date.getSeconds();

        return s < 10 ? '0' + s : s;
    }
    getTime(date) {
        const date_control = new DateControl();
        return date_control.getHour(date) + ':' + date_control.getMinute(date);
    }
    getTimeFull(date) {
        const date_control = new DateControl();
        return date_control.getHour(date) + ':' + date_control.getMinute(date) + ':' + date_control.getSecond(date);
    }
    getDateTime(date) {
        const date_control = new DateControl();
        return date_control.getDate(date) + ' ' + date_control.getTime(date);
    }
    getDateTimeEN(date) {
        const date_control = new DateControl();
        return date_control.getDateEN(date) + ' ' + date_control.getTime(date);
    }
    getDateTimeFull(date) {
        const date_control = new DateControl();
        return date_control.getDate(date) + ' ' + date_control.getTimeFull(date);
    }
    getDateTimeFullEN(date) {
        const date_control = new DateControl();
        return date_control.getDateEN(date) + ' ' + date_control.getTimeFull(date);
    }
};
export default new DateControl;
