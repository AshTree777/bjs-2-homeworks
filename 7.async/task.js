class AlarmClock {
    constructor() {
        this.alarmCollection = [],
            this.intervalId = null;
    }

    addClock(time, callback) {
        if (time && callback) {
            if (this.alarmCollection.length > 0) {
                for (let i = 0; i < this.alarmCollection.length; i++) {
                    if (this.alarmCollection[i] === time) {
                        console.warn('Уже присутствует звонок на это же время');
                    }
                }
            }
            this.alarmCollection.push({
                time: time,
                callback: callback,
                canCall: true
            });
        } else {
            throw new Error('Отсутствуют обязательные аргументы');
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
        if (this.intervalId !== null) {
            return;
        } else {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(element => {
                    if (element.time === this.getCurrentFormattedTime() && element.canCall) {
                        element.canCall = false;
                        element.callback();
                    }
                });
            }, 500);
        }
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