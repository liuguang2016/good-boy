window.onload = () => {
  // task:
  // 得知容器元素的高度 clientHeight
  // 得知列表项元素的高度 offsetHeight
  // 计算可视区域应该渲染的列表项的个数 count = clientHeight / offsetHeight
  // 计算可视区域数据渲染的起始位置 start
  // 计算可视区域数据渲染的结束位置 end
  // 对完整长列表数据进行截断 sliceList = dataList.slice(start, end)
  // 渲染截断后的列表数据，进而实现无限加载
  const $ = (selector) => {
    return document.querySelector(selector);
  }

  const allDatas = [...Array(1000).keys()];

  const loadData = ({ list }) => {
    const fragment = document.createDocumentFragment();
    list.forEach(item => {
      const li = document.createElement('li');
      li.innerText = JSON.stringify(item);
      fragment.appendChild(li);
      li.innerHTML
    });
    $(".container").insertBefore(fragment, $(".sentinels"));
  }

  let count = Math.ceil(document.body.clientHeight / 60);
  let startIndex = 0;
  let endIndex = count;

  let Io = new IntersectionObserver((entries) => {
    // 标志位元素进入视口
    if(entries[0].isIntersecting) {
      if(endIndex >= allDatas.length) {
        // 数据加载完取消观察
        Io.unobserve(entries[0].target);
      }
      // requestAnimationFrame 由系统决定回调函数的执行时机
      requestAnimationFrame(() => {
        const sliceData = allDatas.slice(startIndex, endIndex);
        loadData({ list: sliceData });
        // 更新列表数据起始和结束位置
        startIndex = startIndex += count;
        endIndex = startIndex + count;
        let num = Number(allDatas.length - startIndex)
        let info = ['还有', num , '条数据']
        $('.top').innerText = info.join(' ')
        if(num - count <= 0) {
          $('.top').classList.add('out');
        }
      })
    }
  },{
    rootMargin:"0px 0px 40px 0px"
  });
  // 开始观察“标志位”元素
  const target = $(".sentinels");
  Io.observe(target);
}