import { helper } from '@ember/component/helper';

export function getDateDisplay([value, ...rest]) {

  const dateRef = new Date(value);
  return dateRef.toDateString();
}

export default helper(getDateDisplay);