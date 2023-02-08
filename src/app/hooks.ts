import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';
async function request<TResponse>(
  url: string, 
  config: RequestInit = {}
): Promise<TResponse> {
  const response = await fetch(url, config);
  return await response.json();
}
 export const api = {
  get: <TResponse>(url: string,token: string) => 
  	request<TResponse>(url,{
  	  headers:{
  	    authorization:token
  	  }
  	}),
  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody, token:string) => 
  	request<TResponse>(url, { method: 'POST',   headers:{
  	    authorization:token
  	  },body }),
   put: <TBody extends BodyInit, TResponse>(url: string, body: TBody,token:string) => 
  	request<TResponse>(url, { method: 'PUT', body,  headers:{
  	    authorization:token
  	  } }),
  delete: <TResponse>(url: string, 
    id:string,token:string) => 
  	request<TResponse>(url, { method: 'DELETE',  headers:{
  	    authorization:token
  	  }, body:id }),
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
