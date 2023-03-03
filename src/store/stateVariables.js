import { STATUS } from '../constants/status'
import { PercentCalc, strokeDashoffsetCalc } from '../helpers'

const monthList = [
  { id: 1, name: 'Jan', status: [] },
  { id: 2, name: 'Feb', status: ['#11599e', '#11599e'] },
  { id: 3, name: 'Mar', status: [] },
  { id: 4, name: 'Apr', status: ['#a3c8ec'] },
  { id: 5, name: 'May', status: [] },
  {
    id: 6,
    name: 'Jun',
    status: ['#60b057', '#60b057', '#60b057', '#60b057'],
  },
  { id: 7, name: 'Jul', status: [] },
  { id: 8, name: 'Aug', status: [] },
  { id: 9, name: 'Sep', status: [] },
  { id: 10, name: 'Oct', status: [] },
  { id: 11, name: 'Nov', status: [] },
  { id: 12, name: 'Dec', status: [] },
]

const { completed, booked, bookNow } = STATUS
const itemList = [
  {
    id: 1,
    name: 'Hormone replacement therapy',
    date: 'Jun',
    status: completed,
  },
  {
    id: 2,
    name: 'Ozone therapy',
    date: 'Jun',
    status: completed,
  },
  {
    id: 3,
    name: 'Nad',
    date: 'Jun',
    status: completed,
  },
  {
    id: 4,
    name: 'Hormone replacement therapy',
    date: 'Jun',
    status: completed,
  },
  {
    id: 5,
    name: 'Nad',
    date: 'Feb',
    status: booked,
  },
  {
    id: 6,
    name: 'Hormone replacement therapy',
    date: 'Feb',
    status: booked,
  },
  {
    id: 7,
    name: 'Nad',
    date: 'Apr',
    status: bookNow,
  },
]
const percent = PercentCalc(itemList)
const strokeDashoffset = strokeDashoffsetCalc(percent)
export const stateVariables = {
  cardVisible: true,
  percent,
  monthList,
  itemList,
  strokeDashoffset,
}
