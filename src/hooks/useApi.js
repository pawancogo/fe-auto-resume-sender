import { useState, useCallback } from 'react';
import axios from '../services/axios';

const useApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (method, url, payload = {}, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        method,
        url,
        data: ['get', 'delete'].includes(method) ? undefined : payload,
        params: ['get', 'delete'].includes(method) ? payload : undefined,
        ...config,
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err?.response?.data || err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, request };
};

export default useApi;
