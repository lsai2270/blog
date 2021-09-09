import request from '@/utils/request';

export async function createCategories(data:any): Promise<any> {
  return request.post('/category/create',{data});
}
export async function getList(params?:any): Promise<any> {
  
  const newParams = {
    page: params.current,
    limit: params.pageSize
  }
  
  return request.get('/category/list',{params:newParams});
}
export async function getAllList(): Promise<any> {
  return request.get('/category/list/all');
}
export async function updateCategory(data: any): Promise<any> {
  return request.post('/category/update', { data });
}
