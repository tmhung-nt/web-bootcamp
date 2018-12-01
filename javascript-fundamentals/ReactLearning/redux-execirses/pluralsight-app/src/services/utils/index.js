import moment from 'moment';

export const convertSecondsToMinutes = seconds => {
    return moment.utc(seconds*1000).format('HH:mm:ss');
}