import { formatDistanceToNow } from 'date-fns'

export const dateNow = (date) => {
return formatDistanceToNow(new Date(date), { addSuffix: true })
}