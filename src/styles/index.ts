import { Size, Mode } from '../enums'

export const colors = {
  white: '#fff',
  grayLighter: '#eee',
  grayLight: '#ccc',
  grayDark: '#444',
  grayDarker: '#222',

  blueLight: '#2196F3',
  blueDark: '#104977',

  greenLight: '#8bc34a',
  greenDark: '#3b5221',

  yellowLight: '#ffc107',
  yellowDark: '#715605',

  redLight: '#e91e63',
  redDark: '#670a2a',

  blue: {
    light: '#2196F3',
    dark: '#104977',
  },
  green: {
    light: '#8bc34a',
    dark: '#3b5221',
  },
  yellow: {
    light: '#ffc107',
    dark: '#715605',
  },
  red: {
    light: '#e91e63',
    dark: '#670a2a',
  },
  text: {
    [Mode.light]: '#333333',
    [Mode.dark]: '#cccccc',
  },
}
export const textSizes = {
  headerTitle: {
    [Size.large]: '1.8em',
    [Size.normal]: '1.6em',
    [Size.compact]: '1.4em',
  },
  t1: {
    [Size.large]: '2.0em',
    [Size.normal]: '1.8em',
    [Size.compact]: '1.6em',
  },
  t2: {
    [Size.large]: '1.8em',
    [Size.normal]: '1.6em',
    [Size.compact]: '1.4em',
  },
  t3: {
    [Size.large]: '1.6em',
    [Size.normal]: '1.4em',
    [Size.compact]: '1.2em',
  },
  t4: {
    [Size.large]: '1.4em',
    [Size.normal]: '1.2em',
    [Size.compact]: '1.0em',
  },
  t5: {
    [Size.large]: '1.2em',
    [Size.normal]: '1.0em',
    [Size.compact]: '0.8em',
  },
  t6: {
    [Size.large]: '1.0em',
    [Size.normal]: '0.8em',
    [Size.compact]: '0.6em',
  },
  footer: {
    [Size.large]: '1em',
    [Size.normal]: '.8em',
    [Size.compact]: '.6em',
  },
}

