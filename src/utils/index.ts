const playAudio = (path: string) => new Audio(path).play()

const sendNotifications = (title: string, options: Record<string, unknown>) =>
  new Notification(title, options)

const splitValue = (value: number) => {
  return `${value}`.padStart(2, '0').split('')
}

export { playAudio, sendNotifications, splitValue }
