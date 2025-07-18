class AlarmClock {
    constructor() {
        this.alarmCollection = [],
            this.intervalId = null;
    }

    addClock(time, callback) {
        if (!(time && callback)) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else {
            if (this.alarmCollection.some(() => { this.alarmCollection === time })) {
                console.warn('Уже присутствует звонок на это же время')
            };
            this.alarmCollection.push({
                time: time,
                callback: callback,
                canCall: true
            });
        }
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        return String(currentDate.getHours()).padStart(2, '0') + ':' + String(currentDate.getMinutes()).padStart(2, '0');
    }

    start() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(element => {
                    if (element.time === this.getCurrentFormattedTime() && element.canCall) {
                        element.canCall = false;
                        element.callback();
                    }
                });
            }, 500);
        }
        else return;
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((element) => element.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}