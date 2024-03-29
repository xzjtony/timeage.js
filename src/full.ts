/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { format, render, cancel, register } from '.';
import * as Languages from './lang';

Object.keys(Languages).forEach((locale: string) => {
  register(locale, Languages[locale]);
});

export { format, render, cancel, register };
