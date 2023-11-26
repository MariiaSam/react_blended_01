import { formatDistance, formatDistanceToNow } from 'date-fns';

function timeToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

export { timeToNow };
