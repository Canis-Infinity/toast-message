/*
  Usage:
  message.success({ type: 'success', content: 'success' })
  message.info({ type: 'info', content: 'info' })
  message.loading({ type: 'loading', content: 'loading' })
  message.warning({ type: 'warning', content: 'warning' })
  message.error({ type: 'error', content: 'error' })
*/

const toastRootId = 'toast-root';

/**
 * 建立吐司訊息容器
 * @returns 吐司訊息容器
 */
function createToastRoot() {
  let toastRoot;
  let toastContainer;
  if (document.getElementById(toastRootId)) {
    toastRoot = document.getElementById(toastRootId);
  } else {
    const divDOM = document.createElement('div');
    divDOM.id = toastRootId;
    document.body.appendChild(divDOM);
    toastRoot = divDOM;
  }
  if (toastRoot.firstElementChild) {
    toastContainer = toastRoot.firstElementChild;
  } else {
    const divDOM = document.createElement('div');
    divDOM.className = 'toast-container';
    toastRoot.appendChild(divDOM);
    toastContainer = divDOM;
  }
  const divDOM = document.createElement('div');
  divDOM.id = dayjs().format('YYYYMMDDHHmmssSSS');
  toastContainer.appendChild(divDOM);
  return divDOM;
}

/**
 * 暫停吐司訊息滯留時間
 * @param {String} toastId 吐司訊息容器ID
 */
function pauseToastTimer(toastId) {
  const toastElement = document.getElementById(toastId);
  const duration = parseInt(toastElement.duration);
  const timeout = parseInt(toastElement.timeout);
  const pass = parseInt(toastElement.pass) + (new Date().getTime() - timeout);
  const remainingTime = duration - pass;
  toastElement.pass = pass;
  toastElement.remainingTime = remainingTime;

  clearTimeout(toastElement.toastTimeout);
  clearTimeout(toastElement.toastRemove);
  toastElement
    .querySelector('.toast')
    .style.setProperty('--animation-play-state', 'paused');
}

/**
 * 恢復吐司訊息滯留時間
 * @param {String} toastId 吐司訊息容器ID
 */
function resumeToastTimer(toastId) {
  const toastElement = document.getElementById(toastId);
  const remainingTime = toastElement.remainingTime;
  toastElement.timeout = new Date().getTime();
  toastElement
    .querySelector('.toast')
    .style.setProperty('--animation-play-state', 'running');

  toastElement.toastTimeout = setTimeout(() => {
    toastElement.classList.remove('show');
    toastElement.classList.add('hide');
  }, remainingTime);

  toastRemove = setTimeout(() => {
    toastElement.remove();
  }, remainingTime + 200);
  toastElement.toastRemove = toastRemove;
}

/**
 * 建立吐司訊息
 * @param {Element} container 吐司訊息容器
 * @param {Object} props 吐司訊息類型、內容、滯留時間
 */
function testToast(container, props) {
  const { content } = props;
  let { type, duration } = props;
  let toastId = container.id;
  if (type === undefined) {
    type = 'info';
  }
  if (duration === undefined) {
    duration = 3000;
  }
  let icon = ``;
  switch (type) {
    case 'success':
      icon = `<i class="ri-checkbox-circle-fill ri-fw"></i>`;
      break;
    case 'info':
      icon = `<i class="ri-information-fill ri-fw"></i>`;
      break;
    case 'loading':
      icon = `<i class="ri-loader-4-fill ri-fw ri-spin"></i>`;
      break;
    case 'warning':
      icon = `<i class="ri-alert-fill ri-fw"></i>`;
      break;
    case 'error':
      icon = `<i class="ri-close-circle-fill ri-fw"></i>`;
      break;
    default:
      icon = `<i class="ri-information-fill ri-fw"></i>`;
      break;
  }
  let toastHTML = `<div
    class="toast ${type} show"
    style="--duration: ${duration}ms"
    onmouseenter="pauseToastTimer('${toastId}')"
    onmouseleave="resumeToastTimer('${toastId}')"
  >
    ${icon}
    <div class='content'>${content}</div>
  </div>`;
  document.getElementById(toastId).innerHTML = toastHTML;
  let toastTimeout = setTimeout(() => {
    document.getElementById(toastId).classList.remove('show');
    document.getElementById(toastId).classList.add('hide');
  }, duration);
  let toastRemove = setTimeout(() => {
    document.getElementById(toastId).remove();
  }, duration + 200);
  container.duration = duration;
  container.pass = 0;
  container.timeout = new Date().getTime();
  container.toastTimeout = toastTimeout;
  container.toastRemove = toastRemove;
  return toastTimeout;
}

const message = {
  success: (props) => {
    let toastRootElement = createToastRoot();
    testToast(toastRootElement, props);
  },
  info: (props) => {
    let toastRootElement = createToastRoot();
    testToast(toastRootElement, props);
  },
  loading: (props) => {
    let toastRootElement = createToastRoot();
    testToast(toastRootElement, props);
  },
  warning: (props) => {
    let toastRootElement = createToastRoot();
    testToast(toastRootElement, props);
  },
  error: (props) => {
    let toastRootElement = createToastRoot();
    testToast(toastRootElement, props);
  },
};
