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
  footer: {
    [Size.large]: '1em',
    [Size.normal]: '.8em',
    [Size.compact]: '.6em',
  },
}

