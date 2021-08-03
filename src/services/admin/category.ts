import request from '@/utils/request';

export async function createCategories(data:any): Promise<any> {
  return request.post('/category/create',{data});
}
export async function getList(data?:any): Promise<any> {
  return request.get('/category/list',{data});
}

