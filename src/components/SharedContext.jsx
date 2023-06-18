import React, { createContext } from 'react';

const SharedContext = createContext({sharedValue: 0, setSharedValue: () => console.warn('please add a setSharedValue provider')});
    
export default SharedContext;