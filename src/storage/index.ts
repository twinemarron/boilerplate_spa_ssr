import { Mode, Size } from '../enums'

const DB_NAME = 'twine_db'
const STORE_NAME = 'themeInfo'
const KEY_PATH = 'appSetting'
const VERSION = 1

export type AppSetting = {
  appSetting: String
  mode: Mode
  size: Size
}

const getOpenDBRequest = (): IDBOpenDBRequest | null => {
  try {
    const request = (typeof window !== 'undefined' && window && window.indexedDB)
      ? window.indexedDB.open(DB_NAME, VERSION)
      : null
    return request
  } catch (err) {
    return null
  }
}

export const putData = (data: AppSetting): void => {
  let db, objectStore
  const openDBRequest = getOpenDBRequest()
  if(!openDBRequest) return
  openDBRequest.onsuccess = (event) => {
    console.log('event!!!!')
    console.log(event)
    if(!event || !event.target) return
    console.log('onsuccess event: ', event)
    const db = (event.target as IDBOpenDBRequest).result
    const transaction = db.transaction(STORE_NAME, 'readwrite')
    const objectStore = transaction.objectStore(STORE_NAME)
    const request = objectStore.put(data)
    request.onsuccess = () => {
      console.log('データの挿入に成功') 
    }
    transaction.oncomplete = () => {
      console.log('トランザクション完了') 
    }
  }
  openDBRequest.onupgradeneeded = (event): void => {
    console.log('onupgradeneeded event: ', event)
    if(!event || !event.target) return
    const db = (event.target as IDBOpenDBRequest).result
    const objectStore = db.createObjectStore(STORE_NAME, { keyPath: KEY_PATH })
  }
  openDBRequest.onerror = (event): void => {
    console.log('onerror event: ', event)
  }
}

// export const getData = (key: string): Promise<IDBRequest> => {
export const getData = (key: string): Promise<AppSetting> => {
  let db, objectStore
  const openDBRequest = getOpenDBRequest()
  return new Promise((resolve, reject) => {
    if(!openDBRequest) {
      reject()
      return
    }
    openDBRequest.onsuccess = (event): void => {
      if(!event || !event.target) return
      console.log('onsuccess event: ', event)
      const db = (event.target as IDBOpenDBRequest).result
      const transaction = db.transaction([STORE_NAME], 'readonly')
      const objectStore = transaction.objectStore(STORE_NAME)
      const request = objectStore.get(key)
      request.onsuccess = (event) => {
        console.log('データの取得に成功 event: ', event) 
        console.log('データの取得に成功 request: ', request) 
        resolve(request.result)
      }
      transaction.oncomplete = () => {
        console.log('トランザクション完了') 
      }
    }
    openDBRequest.onerror = (event) => {
      console.log('onerror event: ', event)
      reject()
    }
  })
}
