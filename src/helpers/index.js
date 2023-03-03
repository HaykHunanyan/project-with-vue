import { STATUS } from '../constants/status'
const { completed, bookNow } = STATUS

const strokeDasharray = 440

export const CompleteCount = (itemList) =>
  itemList.filter((el) => el.status.text === completed.text)?.length

export const PercentCalc = (itemList) => {
  let percent = Math.ceil(
    100 / itemList.filter((el) => el.status.text !== bookNow.text)?.length,
  )
  const completedCount = CompleteCount(itemList)

  let total = percent * completedCount

  if (total > 100) total = 100
  if (percent === Infinity && completedCount === 0) total = 100

  return total
}

export const strokeDashoffsetCalc = (percent) =>
  strokeDasharray - (percent / 100) * strokeDasharray
