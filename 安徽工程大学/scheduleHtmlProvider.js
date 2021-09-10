function scheduleHtmlProvider(iframeContent = '', frameContent = '', dom = document) {
  let res = ''
  getIds(ids => {
    console.log(ids)
    res = postCourseTableForStd(ids)
  })
  return res
}

function postCourseTableForStd(ids) {
  let res = request(
    'POST',
    `ignoreHead=1&setting.kind=std&startWeek=&project.id=1&semester.id=81&ids=${ids}`,
    'courseTableForStd!courseTable.action'
  ).replace(/[\r\n]/g, '')
  // console.log(res)
  res = res.match(/\/\/ function CourseTable in TaskActivity\.js.+<\/script>/)[0]
  // console.log(res)
  return res
}

function getIds(callback) {
  let xhr
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState + ' ' + xhr.status)
    if (xhr.readyState == 4 && xhr.status == 200) {
      let ids = xhr.responseText.match(/"ids","\d+"/)[0].match(/\d+/)[0]
      callback(ids)
    }
  }
  xhr.open('GET', 'courseTableForStd.action', false)
  xhr.send()
}

function request(tag, data, url) {
  let res = ''
  var xhr
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xhr = new XMLHttpRequest()
  } else {
    // code for IE6, IE5
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState + ' ' + xhr.status)
    if ((xhr.readyState == 4 && xhr.status == 200) || xhr.status == 304) {
      res = xhr.responseText
    }
  }
  xhr.open(tag, url, false)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.send(data)
  return res
}
