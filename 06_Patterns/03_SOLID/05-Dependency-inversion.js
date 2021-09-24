// PRINCIPIO DE INVERSIÓN DE DEPENDENCIAS

// SIN PRINCIPIO
class Alarm {
  start() {
    return 'Soy una alarma y estoy sonando!!! ⏰';
  }

  stop() {
    return 'Soy una alarma y me detuve 🤫';
  }
}

class NiceHouse {
  isBreak = false;
  alarm = null;

  constructor() {
    this.alarm = new Alarm();
  }

  onBreak() {
    if (this.isBreak) {
      this.alarm.start();
      this.isBreak = true;
    } else {
      this.alarm.stop();
      this.isBreak = false;
    }
  }
}

// APLICANDO PRINCIPIO
class Alarm {
  start() {
    return 'Soy una alarma y estoy sonando!!! ⏰';
  }

  stop() {
    return 'Soy una alarma y me detuve 🤫';
  }
}

class HouseAlarm extends Alarm {
  start() {
    return 'Soy una alarma y estoy sonando!!! ⏰';
  }

  stop() {
    return 'Soy una alarma y me detuve 🤫';
  }
}

class NiceHouse {
  isBreak = false;
  alarm = null;

  constructor() {
    this.alarm = new HouseAlarm();
  }

  onBreak() {
    if (this.isBreak) {
      this.alarm.start();
      this.isBreak = true;
    } else {
      this.alarm.stop();
      this.isBreak = false;
    }
  }
}
