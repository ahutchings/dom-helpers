import getWindow from './isWindow'
import offset from './offset'

export default function getWidth(node: HTMLElement, client?: boolean) {
  const win = getWindow(node)
  return win ? win.innerWidth : client ? node.clientWidth : offset(node).width
}
