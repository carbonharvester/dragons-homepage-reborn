
// Helper functions for storing and retrieving data in IndexedDB for offline use

// Open database
const openDB = () => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = window.indexedDB.open('kapesCompanion', 1);
    
    request.onerror = (event) => {
      reject('Error opening database');
    };
    
    request.onsuccess = (event) => {
      const db = request.result;
      resolve(db);
    };
    
    request.onupgradeneeded = (event) => {
      const db = request.result;
      
      // Create object stores for different data types
      if (!db.objectStoreNames.contains('trips')) {
        db.createObjectStore('trips', { keyPath: 'id' });
      }
      
      if (!db.objectStoreNames.contains('itineraries')) {
        db.createObjectStore('itineraries', { keyPath: 'id' });
      }
      
      if (!db.objectStoreNames.contains('resources')) {
        db.createObjectStore('resources', { keyPath: 'id' });
      }
      
      if (!db.objectStoreNames.contains('user')) {
        db.createObjectStore('user', { keyPath: 'id' });
      }
    };
  });
};

// Store data
export const storeData = async <T>(storeName: string, data: T) => {
  try {
    const db = await openDB();
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put(data);
      
      request.onerror = () => {
        reject('Error storing data');
      };
      
      request.onsuccess = () => {
        resolve();
      };
    });
  } catch (error) {
    console.error('Failed to store data:', error);
    throw error;
  }
};

// Retrieve data
export const getData = async <T>(storeName: string, id: string): Promise<T | null> => {
  try {
    const db = await openDB();
    return new Promise<T | null>((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.get(id);
      
      request.onerror = () => {
        reject('Error retrieving data');
      };
      
      request.onsuccess = () => {
        resolve(request.result || null);
      };
    });
  } catch (error) {
    console.error('Failed to retrieve data:', error);
    return null;
  }
};

// Retrieve all data from a store
export const getAllData = async <T>(storeName: string): Promise<T[]> => {
  try {
    const db = await openDB();
    return new Promise<T[]>((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();
      
      request.onerror = () => {
        reject('Error retrieving data');
      };
      
      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  } catch (error) {
    console.error('Failed to retrieve data:', error);
    return [];
  }
};

// Delete data
export const deleteData = async (storeName: string, id: string) => {
  try {
    const db = await openDB();
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.delete(id);
      
      request.onerror = () => {
        reject('Error deleting data');
      };
      
      request.onsuccess = () => {
        resolve();
      };
    });
  } catch (error) {
    console.error('Failed to delete data:', error);
    throw error;
  }
};

// Sync data with server when online
export const syncData = async (storeName: string, apiEndpoint: string) => {
  if (!navigator.onLine) {
    return false;
  }
  
  try {
    const data = await getAllData(storeName);
    // Implement server sync logic here
    // For each item in data, send to server
    
    return true;
  } catch (error) {
    console.error('Failed to sync data:', error);
    return false;
  }
};
