import React, { useEffect, useState } from 'react';

function ProtectedPage() {
  const [user, setUser] = useState(null);

  const validateToken = async () => {
    //
  };

  useEffect(() => {
    validateToken();
  }, []);

  return <div>ProtectedPage</div>;
}

export default ProtectedPage;
