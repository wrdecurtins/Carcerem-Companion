export const spellCellTemplates = [
  {
    name: 'time',
    display(value) {
      return value[0].number + ' ' + value[0].unit;
    }
  },
  {
    name: 'range',
    display(value) {
      const { type, distance } = value;
      let display = '';
      switch (type) {
      case 'point':
        if (distance?.type === 'touch' || distance?.type === 'self')
          display = distance?.type;
        else
          display = `${distance?.amount} ${distance?.type}`;
        break;
      case 'special':
        display = type;
        break;
      default:
        display = distance?.amount + ' ' + distance?.type + ' ' + type;
        break;
      }
      return display;
    }
  },
  {
    name: 'components',
    display(value) {
      let display = '';
      Object.keys(value).forEach(i => {
        display += value[i] ? i + ', ' : '';
      });
      return display.substring(0, display.length - 2);
    }
  },
  {
    name: 'duration',
    display(value) {
      const { type, duration, concentration } = value[0];
      let display = '';
      switch (type) {
      case 'instant':
        display = 'Instantaneous';
        break;
      case 'timed':
        display = duration?.amount + ' ' + duration?.type;
        break;
      default:
        console.log(value);
      }
      return concentration ? 'Concentration, ' + display : display;
    }
  },
  {
    name: 'classes',
    display(value) {
      const fromClassList = value?.fromClassList ?? [];
      const fromSubclass = value?.fromSubclass ?? [];
      let display = '';
      fromClassList.forEach((cls) => {
        display += cls?.name + ', ';
      });
      display = display.substring(0, display.length - 2);
      if (fromSubclass?.length) {
        display += ' (From Subclasses: ';
        fromSubclass.forEach((cls) => {
          display += cls?.subclass?.name + ' ' + cls?.class?.name + ', ';
        });
        display = display.substring(0, display.length - 2) + ')';
      }
      return display;
    }
  },
  {
    name: 'entriesHigherLevel',
    display(value) {
      let display = '';
      if (value?.length)
        value.forEach((entry) => {
          display += entry?.name + ': ';
          // eslint-disable-next-line
          entry?.entries?.forEach((str) => {
            display += str;
          });
        });

      return display;
    }
  }
];
