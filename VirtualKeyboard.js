window.onload = () => {
  function el(tagName, classNames, child, parent, attr) {
    const element = document.createElement(tagName);

    if (classNames) element.classList.add(...classNames.split(' '));

    if (child && Array.isArray(child)) {
      child.forEach((item) => element.appendChild(item));
    } else if (child && typeof child === 'object') {
      element.appendChild(child);
    } else if (child && typeof child === 'string') {
      element.innerHTML = child;
    }

    if (parent) {
      parent.appendChild(element);
    }

    if (attr && attr.length) {
      attr.forEach((item) => {
        const name = item[0];
        const value = item[1];
        if (name === 'placeholder'
              || name === 'disabled'
              || name === 'value') {
          element.setAttribute(name, value);
        } else {
          element.dataset[name] = value;
        }
      });
    }

    return element;
  }

  const keyMap = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
  ];
  const enKeys = [
    {
      code: 'Backquote',
      default: '`',
      shift: '~',
    },
    {
      code: 'Digit1',
      default: '1',
      shift: '!',
    },
    {
      code: 'Digit2',
      default: '2',
      shift: '@',
    },
    {
      code: 'Digit3',
      default: '3',
      shift: '#',
    },
    {
      code: 'Digit4',
      default: '4',
      shift: '$',
    },
    {
      code: 'Digit5',
      default: '5',
      shift: '%',
    },
    {
      code: 'Digit6',
      default: '6',
      shift: '^',
    },
    {
      code: 'Digit7',
      default: '7',
      shift: '&',
    },
    {
      code: 'Digit8',
      default: '8',
      shift: '*',
    },
    {
      code: 'Digit9',
      default: '9',
      shift: '(',
    },
    {
      code: 'Digit0',
      default: '0',
      shift: ')',
    },
    {
      code: 'Minus',
      default: '-',
      shift: '_',
    },
    {
      code: 'Equal',
      default: '=',
      shift: '+',
    },
    {
      code: 'Backspace',
      default: 'Backspace',
      shift: 'Backspace',
    },
    {
      code: 'Tab',
      default: 'Tab',
      shift: 'Tab',
    },
    {
      code: 'KeyQ',
      default: 'q',
      shift: 'Q',
    },
    {
      code: 'KeyW',
      default: 'w',
      shift: 'W',
    },
    {
      code: 'KeyE',
      default: 'e',
      shift: 'E',
    },
    {
      code: 'KeyR',
      default: 'r',
      shift: 'R',
    },
    {
      code: 'KeyT',
      default: 't',
      shift: 'T',
    },
    {
      code: 'KeyY',
      default: 'y',
      shift: 'Y',
    },
    {
      code: 'KeyU',
      default: 'u',
      shift: 'U',
    },
    {
      code: 'KeyI',
      default: 'i',
      shift: 'I',
    },
    {
      code: 'KeyO',
      default: 'o',
      shift: 'O',
    },
    {
      code: 'KeyP',
      default: 'p',
      shift: 'P',
    },
    {
      code: 'BracketLeft',
      default: '[',
      shift: '{',
    },
    {
      code: 'BracketRight',
      default: ']',
      shift: '}',
    },
    {
      code: 'Backslash',
      default: '\\',
      shift: '|',
    },
    {
      code: 'Delete',
      default: 'Del',
      shift: 'Del',
    },
    {
      code: 'CapsLock',
      default: 'Capslk',
      shift: 'Cpslk',
    },
    {
      code: 'KeyA',
      default: 'a',
      shift: 'A',
    },
    {
      code: 'KeyS',
      default: 's',
      shift: 'S',
    },
    {
      code: 'KeyD',
      default: 'd',
      shift: 'D',
    },
    {
      code: 'KeyD',
      default: 'd',
      shift: 'D',
    },
    {
      code: 'KeyF',
      default: 'f',
      shift: 'F',
    },
    {
      code: 'KeyG',
      default: 'g',
      shift: 'G',
    },
    {
      code: 'KeyH',
      default: 'h',
      shift: 'H',
    },
    {
      code: 'KeyJ',
      default: 'j',
      shift: 'J',
    },
    {
      code: 'KeyK',
      default: 'k',
      shift: 'K',
    },
    {
      code: 'KeyL',
      default: 'l',
      shift: 'L',
    },
    {
      code: 'Semicolon',
      default: ';',
      shift: ':',
    },
    {
      code: 'Quote',
      default: '\'',
      shift: '"',
    },
    {
      code: 'Enter',
      default: 'Enter',
      shift: 'Enter',
    },
    {
      code: 'ShiftLeft',
      default: 'Shift',
      shift: 'Shift',
    },
    {
      code: 'KeyZ',
      default: 'z',
      shift: 'Z',
    },
    {
      code: 'KeyX',
      default: 'x',
      shift: 'X',
    },
    {
      code: 'KeyC',
      default: 'c',
      shift: 'C',
    },
    {
      code: 'KeyV',
      default: 'v',
      shift: 'V',
    },
    {
      code: 'KeyB',
      default: 'b',
      shift: 'B',
    },
    {
      code: 'KeyN',
      default: 'n',
      shift: 'N',
    },
    {
      code: 'KeyM',
      default: 'm',
      shift: 'M',
    },
    {
      code: 'Comma',
      default: ',',
      shift: '<',
    },
    {
      code: 'Period',
      default: '.',
      shift: '>',
    },
    {
      code: 'Slash',
      default: '/',
      shift: '?',
    },
    {
      code: 'ArrowUp',
      default: '↑',
      shift: '↑',
    },
    {
      code: 'ShiftRight',
      default: 'Shift',
      shift: 'Shift',
    },
    {
      code: 'ControlLeft',
      default: 'Ctrl',
      shift: 'Ctrl',
    },
    {
      code: 'MetaLeft',
      default: 'Win',
      shift: 'Win',
    },
    {
      code: 'AltLeft',
      default: 'Alt',
      shift: 'Alt',
    },
    {
      code: 'Space',
      default: 'Space',
      shift: 'Space',
    },
    {
      code: 'AltRight',
      default: 'Alt',
      shift: 'Alt',
    },
    {
      code: 'ControlRight',
      default: 'Ctrl',
      shift: 'Ctrl',
    },
    {
      code: 'ArrowLeft',
      default: '←',
      shift: '←',
    },
    {
      code: 'ArrowDown',
      default: '↓',
      shift: '↓',
    },
    {
      code: 'ArrowRight',
      default: '→',
      shift: '→',
    },
  ];

  const KeyboardRows = [];

  keyMap.forEach((rowArr) => {
    const keyboardRow = [];
    rowArr.forEach((entry) => {
      const keyValue = enKeys.filter((item) => item.code === entry);
      const KeyStatus = el('span', 'en', [el('span', 'caseDown', `${keyValue[0].default}`), el('span', 'caseUp hidden', `${keyValue[0].shift}`), el('span', 'caps hidden', `${keyValue[0].shift}`), el('span', 'shiftCaps hidden', `${keyValue[0].shift}`)]);
      keyboardRow.push(el('div', `keyboard-key ${entry}`, KeyStatus, null));
    });
    KeyboardRows.push(el('div', 'keyboard-row', keyboardRow));
  });

  const keyboardLayout = el('div', 'keyboard-wrapper', KeyboardRows);
  const textArea = el('textarea', 'textarea', null, null);
  const mainElement = el('main', null, [textArea, keyboardLayout]);

  document.body.appendChild(mainElement);

  const textInput = document.querySelector('textarea');
  textInput.readOnly = true;

  function keypressHandler(action) {
    document.querySelectorAll('.caseUp, .caseDown, .caps, .shiftCaps').forEach((item) => {
      if (!item.classList.contains('hidden')) {
        item.classList.add('hidden');
      }
    });
    document.querySelectorAll(action).forEach((item) => item.classList.remove('hidden'));
  }

  window.addEventListener('keydown', (e) => {
    if (e.code) {
      document.querySelector(`.keyboard-key.${e.code}`).classList.add('active');
    }

    const isTypeableKey = e.code.includes('Key')
    || e.code.includes('Arrow')
    || e.code.includes('Period')
    || e.code.includes('Slash')
    || e.code.includes('Digit')
    || e.code.includes('Minus')
    || e.code.includes('Equal')
    || e.code.includes('Backquote');

    if (isTypeableKey) {
      const pressedKey = enKeys.filter((item) => item.code === e.code);
      textInput.value += pressedKey[0].default;
    }
    if (e.code === 'Space') {
      textInput.value += ' ';
    }
    if (e.code === 'Tab') {
      textInput.value += '\t';
    }
    if (e.code === 'Enter') {
      textInput.value += '\n';
    }
    if (e.code === 'Backspace' || e.code === 'Delete') {
      textInput.value = textInput.value.substring(0, textInput.value.length - 1);
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      keypressHandler('.shiftCaps');
    }
  });
  window.addEventListener('keyup', (e) => {
    if (e.code) {
      document.querySelector(`.keyboard-key.${e.code}`).classList.remove('active');
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      keypressHandler('.caseDown');
    }
    if (e.code === 'CapsLock') {
      keypressHandler('.caps');
    }
  });
};
