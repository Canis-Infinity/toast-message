/*
  Usage:
  message.success({ type: 'success', content: 'success' })
  message.info({ type: 'info', content: 'info' })
  message.loading({ type: 'loading', content: 'loading' })
  message.warning({ type: 'warning', content: 'warning' })
  message.error({ type: 'error', content: 'error' })
*/

const toastRootId = 'toast-root'

/**
 * 建立吐司訊息容器
 * @returns 吐司訊息容器
 */
function createToastRoot() {
  let toastRoot
  let toastContainer
  if (document.getElementById(toastRootId)) {
    toastRoot = document.getElementById(toastRootId)
  } else {
    const divDOM = document.createElement('div')
    divDOM.id = toastRootId
    document.body.appendChild(divDOM)
    toastRoot = divDOM
  }
  if (toastRoot.firstElementChild) {
    toastContainer = toastRoot.firstElementChild
  } else {
    const divDOM = document.createElement('div')
    divDOM.className = 'toast-container'
    toastRoot.appendChild(divDOM)
    toastContainer = divDOM
  }
  const divDOM = document.createElement('div')
  divDOM.id = new Date().getTime()
  toastContainer.appendChild(divDOM)
  return divDOM
}

/**
 * 建立吐司訊息
 * @param {Element} container 吐司訊息容器
 * @param {Object} props 吐司訊息類型、內容、滯留時間
 */
function testToast(container, props) {
  const { type, content } = props
  let { duration } = props
  let toastId = container.id
  if (duration === undefined) {
    duration = 5000
  }
  let icon = ``
  switch (type) {
    case 'success':
      icon = `<i class="ri-checkbox-circle-fill ri-fw"></i>`
      break
    case 'info':
      icon = `<i class="ri-information-2-fill ri-fw"></i>`
      break
    case 'loading':
      icon = `<i class="ri-loader-4-fill ri-fw"></i>`
      break
    case 'warning':
      icon = `<i class="ri-alert-fill ri-fw"></i>`
      break
    case 'error':
      icon = `<i class="ri-close-circle-fill ri-fw"></i>`
      break
    default:
      icon = `<i class="ri-information-2-fill ri-fw"></i>`
      break;
  }
  let toastHTML = `${icon}<p class='content'>${content}</p></div>`;
  document.getElementById(toastId).classList = `toast ${type} show`;
  document.getElementById(toastId).style = `--duration: ${duration}ms`;
  document.getElementById(toastId).innerHTML = toastHTML;
  setTimeout(() => {
    document.getElementById(toastId).classList.remove('show')
    document.getElementById(toastId).classList.add('hide')
  }, duration)
  setTimeout(() => {
    document.getElementById(toastId).remove()
  }, duration + 200)
}

const message = {
  success: (props) => {
    let toastRootElement = createToastRoot()
    testToast(toastRootElement, props)
  },
  info: (props) => {
    let toastRootElement = createToastRoot()
    testToast(toastRootElement, props)
  },
  loading: (props) => {
    let toastRootElement = createToastRoot()
    testToast(toastRootElement, props)
  },
  warning: (props) => {
    let toastRootElement = createToastRoot()
    testToast(toastRootElement, props)
  },
  error: (props) => {
    let toastRootElement = createToastRoot()
    testToast(toastRootElement, props)
  },
}
