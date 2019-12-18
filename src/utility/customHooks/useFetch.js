import { useReducer, useState, useEffect } from 'react';

const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAIL = 'FETCH_FAIL';

const fetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data,
      };
    case FETCH_FAIL: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default () => {
  const [state, dispatch] = useReducer(fetchReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  const [urlData, setUrlData] = useState({
    url: '',
    method: 'get',
    body: null,
    headers: {},
    type: 'json',
  });

  useEffect(() => {
    let abort = false;
    if (urlData.url.length) {
      const customFetch = async () => {
        if (!abort) {
          dispatch({ type: FETCH_INIT });
        }
        const method = urlData.method.toUpperCase();
        const init = {
          method,
          headers: new Headers({ ...urlData.headers }),
        };

        if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
          init.body = urlData.body instanceof FormData
            ? urlData.body : JSON.stringify(urlData.body);
        }

        try {
          const response = await fetch(urlData.url, init);
          if (!response.ok) {
            throw new Error('Something Went Wrong');
          }
          let resBody = null;

          if (urlData.type === 'blob') {
            resBody = await response.blob();
          } else {
            resBody = await response.json();
          }

          if (!abort) {
            dispatch({
              type: FETCH_SUCCESS,
              payload: {
                data: resBody,
              },
            });
          }
        } catch (error) {
          if (!abort) {
            dispatch({ type: FETCH_FAIL });
          }
        }
      };

      customFetch();
    }
    return () => {
      abort = true;
    };
  }, [urlData]);

  // Function which will be used to fetch the data
  function doFetch({
    url, method, body, headers, type,
  }) {
    const urlUsed = url || '';
    const methodUsed = method || 'get';
    const bodyUsed = body || null;
    const headersUsed = headers || {};
    const typeUsed = type || 'json';

    setUrlData({
      url: urlUsed,
      method: methodUsed,
      body: bodyUsed,
      headers: headersUsed,
      type: typeUsed,
    });
  }
  return { ...state, doFetch };
};
