function talkRubbish(jobs) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let results

  if (jobs === 'engineer') {
    const length = task.engineer.length
    results = `身為工程師，${task.engineer[Math.floor(Math.random() * length)]}，${phrase[Math.floor(Math.random() * length)]}吧！`
  }

  if (jobs === 'designer') {
    const length = task.designer.length
    results = `身為設計師，${task.designer[Math.floor(Math.random() * length)]}，${phrase[Math.floor(Math.random() * length)]}吧！`
  }

  if (jobs === 'entrepreneur') {
    const length = task.entrepreneur.length
    results = `身為創業家，${task.entrepreneur[Math.floor(Math.random() * length)]}，${phrase[Math.floor(Math.random() * length)]}吧！`
  }

  if (!jobs) {
    return `(請選擇上列任一職業)`
  }

  return results

}

module.exports = talkRubbish