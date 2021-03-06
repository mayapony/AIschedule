function scheduleHtmlParser(html) {
  let res
  try {
    res = main(html)
  } catch (err) {
    console.info(err)
    res = {
      courseInfos: errInfo(),
    }
  }
  return res
}

function main(html) {
  const $ = cheerio.load(html, { decodeEntities: false })
  let p = $('p')
  console.info(p)
  let courseInfos = []
  for (let i = 0; i < p.length; i++) {
    let courseInfo = {} //课程相关信息
    let children = p[i].children // 获取p节点的子节点

    if (children == null) continue

    console.log(p[i])

    courseInfo.name = children[0].data.trim() // 课程名称

    let str = children[3].data // 获取文本数据
    let arr = str.trim().split(/\s+/) // 将文本数据按空格分开, 其中包含位置 周数 节数
    console.log(arr)

    if (arr.length === 4) {
      courseInfo.position = arr[0]
      courseInfo.weeks = getWeeks(arr[1])
      courseInfo.day = Number(arr[2])
      courseInfo.sections = getSections(arr[3])
    } else if (arr.length === 3) {
      //当未安排教室时
      courseInfo.position = '暂未安排教室' //未安排教室
      courseInfo.weeks = getWeeks(arr[0])
      courseInfo.day = Number(arr[1])
      courseInfo.sections = getSections(arr[2])
    }

    courseInfo.teacher = '' // 课程所属教师为空
    courseInfos.push(courseInfo)
  }

  let sectionTimes = getSectionTimes()

  console.info({
    courseInfos,
    sectionTimes,
  })

  return {
    courseInfos,
    sectionTimes,
  }
}

function getWeeks(s) {
  let weeks = []
  if (s.indexOf('~') != -1) {
    let weekArr = s.match(/\d+(.\d+)?/g)[0].split('~') // 获取是1~10
    let begin = weekArr[0]
    let end = weekArr[1]
    for (let i = Number(begin); i <= Number(end); i++) {
      weeks.push(i)
    }
  } else {
    weeks.push(parseInt(s))
  }
  return weeks
}

function getSections(s) {
  let sections = []
  let sectionArr = s.slice(1, s.length - 1).split(',')
  for (let i = 0; i < sectionArr.length; i++) {
    let temp = {}
    temp.section = Number(sectionArr[i])
    sections.push(temp)
  }
  return sections
}

function getSectionTimes() {
  let date = new Date()
  let month = date.getMonth() + 1
  let day = date.getDate()
  // 冬季作息起止时间:2020年11月2日（星期一）至2021年4月4日（星期日）。
  let winter = false
  if ((month == 11 && day >= 2) || (month >= 4 && day <= 4)) {
    winter = true
  } else if (month > 11 || month < 4) winter = true

  getTimes(winter)
  return partTimes
}

let partTimes = [
  {
    section: 1,
    startTime: '8:00',
    endTime: '8:45',
  },
  {
    section: 2,
    startTime: '8:50',
    endTime: '9:35',
  },
  {
    section: 3,
    startTime: '9:50',
    endTime: '10:35',
  },
  {
    section: 4,
    startTime: '10:40',
    endTime: '11:25',
  },
  {
    section: 5,
    startTime: '11:30',
    endTime: '12:15',
  },
]

function getTimes(winter) {
  let startH = 14,
    startM = 30
  if (winter) startM = 00
  // startTime section endTime
  let startTime, endTime
  for (let section = 6; section <= 13; section++) {
    if (section == 11) {
      ;(startH = 19), (startM = 30)
      if (winter) startM = 0
    }
    // startTime = startH + ':' + startM
    if (startM / 10 < 1) startTime = startH + ':0' + startM
    else startTime = startH + ':' + startM

    startM += 45
    if (startM > 59) {
      startM %= 60
      startH++
    }

    // endTime = startH + ':' + startM
    if (startM / 10 < 1) endTime = startH + ':0' + startM
    else endTime = startH + ':' + startM

    if (section !== 8) startM += 5
    else startM += 15
    if (startM > 59) {
      startM %= 60
      startH++
    }
    partTimes.push({
      section,
      startTime,
      endTime,
    })
  }
}

function errInfo() {
  return [
    {
      day: 1,
      name: '错误请联系开发人员',
      position: 'QQ: 1327909321',
      sections: [{ section: 1 }, { section: 2 }, { section: 3 }],
      teacher: '@maya',
      weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
  ]
}
