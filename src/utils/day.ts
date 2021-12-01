import dayjs from 'dayjs'

require('dayjs/locale/zh-cn')
import utc from 'dayjs/plugin/utc'

class Day {
  defaultFormat = 'YYYY-MM-DD:HH:mm:ss'
  utc(pay: any) {
    dayjs.extend(utc)
    return dayjs
      .utc(pay.time)
      .utcOffset(8)
      .format(pay.format ?? this.defaultFormat)
    // return dayjs.utc(pay.time).format(this.defaultFormat)
  }
  format(time: any) {
    return dayjs(time).format(this.defaultFormat)
  }
}
export default new Day()
