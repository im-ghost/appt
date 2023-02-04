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
  get: <TResponse>(url: string) => 
  	request<TResponse>(url),
  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) => 
  	request<TResponse>(url, { method: 'POST', body }),
   put: <TBody extends BodyInit, TResponse>(url: string, body: TBody) => 
  	request<TResponse>(url, { method: 'PUT', body }),
  delete: <TResponse>(url: string, id: string) => 
  	request<TResponse>(url, { method: 'DELETE', body:id }),
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
