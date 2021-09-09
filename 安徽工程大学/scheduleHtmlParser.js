function scheduleHtmlParser(html) {
  const $ = cheerio.load(html, { decodeEntities: false })
  const tds = $('td.infoTitle')
  console.log(tds)
  let courseInfos = []
  for (let i = 0; i < tds.length; i++) {
    let td = tds[i]
    let texts = td.children.filter(text => {
      return text.type == 'text'
    })
    for (let j = 0; j < texts.length; j += 2) {
      let id = td.attribs.id
      let title = texts[j].data
      let address = texts[j + 1].data
      let span = td.attribs.rowspan
      courseInfos.push(getCourseInfo(id, title, address, span))
    }
  }
  console.log(courseInfos)
  return {
    courseInfos: courseInfos,
  }
}

function getCourseInfo(id, title, address, span) {
  const ALL = 12
  let blocks = parseInt(id.match(/\d+_/)[0].split('_')[0])
  let courseInfo = {}
  courseInfo.name = getName(title)
  courseInfo.teacher = getTeacherName(title)
  courseInfo.position = getPosition(address)
  courseInfo.day = parseInt(blocks / ALL) + 1 + ''
  courseInfo.weeks = getWeeks(address)
  courseInfo.sections = getSections(courseInfo.day, blocks, span, ALL)
  return courseInfo
}

function getSections(day, blocks, span, ALL) {
  let start = blocks - (day - 1) * ALL + 1
  let sections = []
  for (let i = 0; i < parseInt(span); i++)
    sections.push({
      section: start + i,
    })
  return sections
}

function getWeeks(address) {
  let weekArr = address.match(/\d+\-\d+/)[0].split('-')
  let start = parseInt(weekArr[0])
  let end = parseInt(weekArr[1])
  let step = address.indexOf('单') != -1 || address.indexOf('双') != -1 ? 2 : 1
  let weeks = []
  for (let i = start; i <= end; i += step) weeks.push(i)
  return weeks
}

function getPosition(address) {
  return address.match(/\d.\d{3}\(.*\)/)[0]
}

function getName(title) {
  return title.split(' ')[0].split('(')[0]
}

function getTeacherName(title) {
  return deleteBracket(title.match(/\([\D^)]+\)/g)[0])
}

function deleteBracket(str) {
  return str.replace(/\(|\)/g, '')
}
