// this is a hook to help us fetch data from
// a collection for only one document by using it id
import { projectFirestore } from '../firebase/config';
import { useEffect, useState } from 'react';
export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  // realdata time
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);
    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
         setDocument({ ...snapshot.data(), id: snapshot.id });
         setError(null); 
        } else {
          setError('Not such document')
        }
        
      },
      (err) => {
        console.log(err.message);
        setError('Failed to get the document');
      }
    );
    return () => unsubscribe();
  }, [collection, id]);
  return { document, error };
};
