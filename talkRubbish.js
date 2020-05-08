

function talkRubbish(jobs) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  function turnToChinese(jobs) {
    switch (jobs) {
      case 'engineer':
        return '工程師'
      case 'designer':
        return '設計師'
      case 'entrepreneur':
        return '創業家'
    }
  }
  let results

  for (let thing in task) {
    //console.log(thing)  key
    //console.log(task[thing])  value
    if (jobs === thing) {
      const length = task[thing].length
      results = `身為${turnToChinese(jobs)}，${task[thing][Math.floor(Math.random() * length)]}，${phrase[Math.floor(Math.random() * length)]}吧！`
    } else {
      return `(請選擇上列任一職業)`
    }
  }

  return results
}

module.exports = talkRubbish